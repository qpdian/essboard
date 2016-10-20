import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension, State,Checkpoint } from './project-kernel';
import { Kernel } from './project';
export class Util {
  public static source :any;
  public static getKernelEmpty() {
    let dimensions = [];
    for (let alpha of ALPHAS) {
      let states = [];
      for (let state of alpha.states) {
        let checklist = [];
        for (let check of state.checkList) {
          checklist.push(
            {
              concept: check.concept,
              isAchaived: false
            }
          );
        }
        states.push({
          name: state.name,
          percent: 0,
          isAchaived: false,
          isWorking: false,
          checklist: checklist
        });
      }
      dimensions.push({
        concept: alpha.identifier,
        name: alpha.name,
        currentState: null,
        states: states,
        isTouched: false
      })
    }
    return dimensions;
  }
  public static setSource(dimensions){
    this.source = dimensions;
  }
  public static getIndexs(concept:string,stateName:string){
    let indexDimension = this.source.map(function (item) { return item.concept; }).indexOf(concept);
    let indexState = this.source[indexDimension].states.map(function (item) { return item.name; }).indexOf(stateName);
    return {
      'dimension':indexDimension,
      'state':indexState
    }
  }
   public static getStateIndex(concept:string){
   return this.source.indexOf({concept : concept});
  }
  public static buildKernel(dimensions): Kernel {
    let kernel = new Kernel();
    if (!!dimensions) {
      for (let dim of dimensions) {
        let alphaMetadata = ALPHAS.find(alpha => alpha.identifier === dim.concept);
        let dimension = new Dimension(alphaMetadata, dim.isTouched,dim.concept);
        dimension.currentState = dim.currentState;
        for (let state of dim.states) {
          let stateMetadata = alphaMetadata.getState(state.name);
          let stateReal = new State(stateMetadata, state.isAchaived,state.isWorking);
          for (let check of state.checklist) {
            let checkpoint = stateMetadata.getCheckPoint(check.concept);
            stateReal.addCheckpoint(new Checkpoint(checkpoint, check.isAchaived));
          }
          dimension.addState(stateReal);
        }
        kernel.addDimension(dimension);
      }
    }
    else {
      kernel.dimensions = this.getKernelEmpty();
    }
    return kernel;
  }
}