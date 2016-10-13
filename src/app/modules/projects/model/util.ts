import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension, State } from './project-kernel';
import { Kernel } from './project';

export class Util {
  public static getKernelEmpty() {
    let dimensions = [];
    for (let alpha of ALPHAS) {
      let states = [];
      for (let state of alpha.states) {
        states.push({
          name: state.name, percent: 0, checklist: []
        });
      }
      dimensions.push({
        concept: alpha.name,
        name: alpha.name,
        currentState: null,
        states: states,
        isTouched: false
      })
    }
    return dimensions;
  }
  public static buildKernel(source): Kernel {
    let kernel = new Kernel();
    if (!!source) {
      //itero
    }
    else {
      kernel.dimensions = this.getKernelEmpty();
      return kernel;
    }


  }
}