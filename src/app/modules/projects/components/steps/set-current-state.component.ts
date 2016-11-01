import { Component, OnInit, Input ,EventEmitter,Output} from '@angular/core';
import { Alpha, State ,Checkpoint} from '../../model/project-kernel';
import { SessionService } from '../../services/session.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'set-current-state',
    templateUrl: 'set-current-state.component.html',
    styleUrls: ['style.component.css']
})
export class SetCurrentStateComponent implements OnInit {
    @Input()
    dimension: Alpha;
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
        console.log(state);
        if (this.isPosiblePutStateAsWorking(state)) {
            this.service.setStateAsWorking(this.idSession, this.dimension.metadataId, state.info.identifier);
        } else {
            alert("Deshabilitado");
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
    onSelectedCheckpoint(checkpoint:Checkpoint) {
        this.service.setCheckpointTo(this.idSession,
                                     this.dimension.metadataId, 
                                     this.selectedState.info.identifier, 
                                     checkpoint.info.identifier, !checkpoint.isAchieved);
    }
}