import { Component, OnInit, Input ,EventEmitter,Output} from '@angular/core';
import { Dimension, State } from '../../model/project-kernel';
import { SessionService } from '../../services/session.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'set-current-state',
    templateUrl: 'set-current-state.component.html',
    styleUrls: ['style.component.css']
})
export class SetCurrentStateComponent implements OnInit {
    @Input()
    dimension: Dimension;
    @Input()
    idSession: string;
    private sub: Subscription;
    private subscription: Subscription;
    selectedState: State;
    constructor(private service: SessionService) {
    }
    ngOnInit() {
    }
    onSelectedState(state: State) {
        this.putDimensionAsTouching();
        this.selectedState = state;
        if (this.isPosiblePutStateAsWorking(state)) {
            this.service.setStateAsWorking(this.idSession, this.dimension.concept, state.info.name);
        } else {
            alert("Aun no haz iniciado el estado anterior");
        }
    }
    private isPosiblePutStateAsWorking(state: State): Boolean {
        return state.isWorking === false && (state.isFirst || state.stateBackIsAchaived);
    }
    private putDimensionAsTouching() {
        if (this.dimension.isTouched == false) {
            this.dimension.isTouched = true;
        }
    }
    onSelectedCheckpoint(check) {
        this.service.setCheckpointTo(this.idSession, this.dimension.concept, this.selectedState.info.name, check.info.concept, check.isAchaived);
    }
}