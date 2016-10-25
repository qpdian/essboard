import { Component, OnInit, Input } from '@angular/core';
import { Dimension, State } from '../../model/project-kernel';
import { SessionService } from '../../services/session.service';
@Component({
    selector: 'set-current-state',
    templateUrl: 'set-current-state.component.html',
    styleUrls : ['style.component.css']
})
export class SetCurrentStateComponent implements OnInit {
    @Input()
    dimension: Dimension;
    @Input()
    idSession: string;

    selectedState: State;
      constructor( private service: SessionService){
  }

    ngOnInit() { }
    onSelectedState(state : State) {
        if (this.dimension.isTouched == false) {
            this.dimension.isTouched = true;
        }
        this.selectedState = state;
        this.dimension.setCurrentState(state.info);
        this.service.setStateAsWorking(this.idSession,this.dimension.concept,state.info.name);
    }
    onSelectedCheckpoint(check) {
        this.service.setCheckpointTo(this.idSession,this.dimension.concept,this.selectedState.info.name,check.info.concept,check.isAchaived);
    }

}