
import { AlphaMetadata, StateMetadata, CheckpointMetadata } from '../../../shared/models/kernel/kernel';
export class Dimension {
  public states: State[] = [];
  public currentState: StateMetadata;
  constructor(
    public info: AlphaMetadata,
    public isTouched: boolean,
    public concept :string
  ) {
  }
  addStates(states) {
    this.states = states;
  }
  addState(state) {
    this.states.push(state);
  }
  setCurrentState(state: StateMetadata) {
    this.currentState = state;
    if (!!state) {
      this.fillPreviousToCurrent();
    }
  }
  fillPreviousToCurrent(): void {
    this.cleanFill();
    let num = this.currentState.num;
    for (let i = 0; i <= num; i++) {
      this.states[i].isAchaived = true;
    }
  }
  cleanFill() {
    for (let state of this.states) {
      state.isAchaived = false;
    }
  }
  get statesFulfilled(): StateMetadata[] {
    let cursor = this.info.states[0];
    let result = [];
    if (!!this.currentState) {
      while (cursor !== this.currentState && !!cursor) {
        result.push(cursor);
        cursor = cursor.next;
      }
      result.push(cursor);
    }
    return result;
  }
  get lastFilled() {
    return this.statesFulfilled[this.statesFulfilled.length - 1];
  }
  get firstByFilled() {
    return this.statesUnfulfilled[0];
  }

  get statesUnfulfilled(): StateMetadata[] {
    return this.diff(this.statesFulfilled);
  }

  private diff(a) {
    return this.info.states.filter(function (i) { return a.indexOf(i) < 0; });
  };
  getCurrentState() {
    return this.currentState;
  }
  getName() {
    return this.info.name;
  }
  getType() {
    return this.info.area.nameCSSClass;
  }
  getStates() {
    return this.info.states;
  }
  find(stateToSearch: StateMetadata) {
    console.log(this.states);
    return this.states.find(state => state.info === stateToSearch);
  }
  //return this.states.find(stat => stat.info === state) ? true : false;


  // clasificateState(){
  //   for (let state of this.info.states){
  //       if(this.fulfiledThisState(state)){
  //         this.achieveds.push(state);
  //       }else{
  //         this.noAchieveds.push(state);
  //       }  
  //   }
  // }

  fulfiledThisState(state: StateMetadata) {
    if (!!this.currentState) {
      return this.currentState === state;


    } else {
      return false;
    }
    // this.currentState.state

    /*  if (this.states.length != 0) {
        return this.states.find(stat => stat.info === state) ? true : false;
      }
      else {
        return false;
     }*/
  }
}

export class State {
  public checklist: Checkpoint[] = [];
  public percent: number;
  constructor(
    public info: StateMetadata,
    public isAchaived: boolean,
    public isWorking: boolean
  ) {
  }
  addCheckpoint(checkpoint: Checkpoint) {
    this.checklist.push(checkpoint);
  }
  getPercent(){
   this.percent = 100*this.getCheckPointAchaiveds.length/this.checklist.length;
   return this.percent;
  }
  getCheckPointAchaiveds(){
   this.checklist.find(check => check.isAchaived === true);
  }

  getX() {
    let width = 30;
    return (this.info.num - 1) * width + 55;
  }
  getY() {
    return 60;
  }

}

export class Checkpoint {
  constructor(
    public info: CheckpointMetadata, public isAchaived: boolean
  ) {
    this.isAchaived = isAchaived;
  }
}
