import { ALPHAS } from '../../../../shared/models/kernel/mock-kernel';
import { Kernel, Alpha, State, Checkpoint } from '../project-kernel';
export class BuilderKernel {

  public static build(alphas: any[]): Kernel {
    if (!!alphas) {
      let kernel = new Kernel();
      for (let alphaRecord of alphas) {
        let alphaMetadata = ALPHAS.find(alpha => alpha.identifier === alphaRecord.metadataId);
        let dimension = new Alpha(alphaMetadata, alphaRecord.isTouched, alphaRecord.metadataId);
        dimension.currentState = alphaRecord.currentState;
        for (let stateRecord of alphaRecord.states) {
          let stateMetadata = alphaMetadata.getState(stateRecord.metadataId);
          let state = new State(stateMetadata, stateRecord.isAchieved, stateRecord.isWorking);
          for (let checkpointRecord of stateRecord.checklist) {
            let checkpointMetadata = stateMetadata.getCheckPoint(checkpointRecord.metadataId);
            let check= new Checkpoint(checkpointMetadata, checkpointRecord.isAchieved);
            check.addVotes("arthur",true);
            check.addVotes("diana",false);
            state.addCheckpoint(check);
          }
          dimension.addState(state);
        }
        kernel.addDimension(dimension);
      }
      return kernel;
    }
    return null;
  }
}