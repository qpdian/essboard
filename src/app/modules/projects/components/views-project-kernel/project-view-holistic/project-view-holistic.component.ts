

import { Component, Input } from '@angular/core';
import { Project } from '../../../model/project';
import { Alpha } from '../../../model/project-kernel';


@Component({
  selector: 'project-view-holistic',
  templateUrl: 'project-view-holistic.component.html',
})
export class ProjectViewHolistic {

  selectDimension: any = null;
  @Input() project: Project;

  showCardStatesOfDimension(dimension : Alpha) {
    this.selectDimension = dimension;
  }

}