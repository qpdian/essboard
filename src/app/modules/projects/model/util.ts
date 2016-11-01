import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Kernel,Alpha, State, Checkpoint } from './project-kernel';
export class Util {
  public static source: any;

  public static getKernelEmpty(): any {
    let dimensions = [];
    for (let alpha of ALPHAS) {
      let states = [];
      for (let state of alpha.states) {
        let checklist = [];
        for (let check of state.checkList) {
          checklist.push(
            {
              metadataId: check.identifier,
              isAchieved: false
            }
          );
        }
        states.push({
          name: state.identifier,
          percent: 0,
          isAchieved: false,
          isWorking: false,
          checklist: checklist
        });
      }
      dimensions.push({
        metadataId: alpha.identifier,
        name: alpha.name,
        currentState: null,
        states: states,
        isTouched: false
      })
    }

    return dimensions;
  }

  public static setSource(dimensions) {
    this.source = dimensions;
  }
  public static getIndexs(metadataId: string, stateName: string) {
    let indexDimension = this.source.map(function (item) { return item.metadataId; }).indexOf(metadataId);
    let indexState = this.source[indexDimension].states.map(function (item) { return item.name; }).indexOf(stateName);
    return {
      'dimension': indexDimension,
      'state': indexState
    }
  }
  public static getStateIndex(metadataId: string) {
    return this.source.indexOf({ metadataId: metadataId });
  }
  public static buildKernel(alphas): Kernel {
    let kernel = new Kernel();
    if (!!alphas) {
      for (let alphaRecord of alphas) {
        let alphaMetadata = ALPHAS.find(alpha => alpha.identifier === alphaRecord.metadataId);
        let dimension = new Alpha(alphaMetadata, alphaRecord.isTouched, alphaRecord.metadataId);
        dimension.currentState = alphaRecord.currentState;
        for (let state of alphaRecord.states) {
          let stateMetadata = alphaMetadata.getState(state.name);
          let stateReal = new State(stateMetadata, state.isAchaived, state.isWorking);
          for (let check of state.checklist) {
            let checkpoint = stateMetadata.getCheckPoint(check.metadataId);
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