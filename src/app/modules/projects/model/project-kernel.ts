
import { AlphaMetadata, StateMetadata, CheckpointMetadata } from '../../../shared/models/kernel/kernel';
export class Dimension {
  public currentState: State;
  public states: State[] = [];
  constructor(
    public info: AlphaMetadata, public isTouched: boolean
  ) {
    for (let state of info.states) {
      this.states.push(new State(state, false));
    }
    this.currentState = null;
    this.isTouched = isTouched;
  }
  setCurrentState(state: StateMetadata) {
    this.currentState = new State(state, true);
    this.fillPreviousToCurrent();
  }
  fillPreviousToCurrent(): void {
    this.cleanFill();
    let num = this.currentState.info.num;
    for (let i = 0; i <= num; i++) {
      this.states[i].isAcheived = true;
    }
  }
  cleanFill(){
    for(let state of this.states){
      state.isAcheived = false;
    }
  }
  get statesFulfilled(): StateMetadata[] {
    let cursor = this.info.states[0];
    let result = [];
    if (!!this.currentState) {
      while (cursor !== this.currentState.info && !!cursor) {
        result.push(cursor);
        cursor = cursor.next;
      }
      result.push(cursor);
    }
    return result;
  }
  get lastFilled(){
    return this.statesFulfilled[this.statesFulfilled.length-1];
  }
  get firstByFilled(){
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
      return this.currentState.info === state;


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
    public info: StateMetadata, public isAcheived: boolean
  ) {
    this.isAcheived = isAcheived;
    this.percent = 0;
    for (let check of info.checkList) {
      this.checklist.push(new Checkpoint(check, false));
    }
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
