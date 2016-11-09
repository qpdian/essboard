import { Injectable } from '@angular/core';
import { AreaMockService } from '../mock-areas/index.service';
import { StateMockService } from '../mock-states/index.service';
import { ActivitySpaceMetadata } from '../kernel';

@Injectable()
export class ActivitySpaceMockService {
    areas: any[];
    activitySpaces: any[];
    constructor(public areaService: AreaMockService, public alphaService: StateMockService) {
    }

    registerObjects() {
        //customer
        this.registerObject("1-1", this.areaService.getCustomer(), 'Explore posibilities', ['Enable the right stakeholders to be involved', 'Understand the stakeholders’ needs',
            'Identify opportunities for the use of the software system',
            'Understand why the software system is needed',
            'Establish the value offered by the software system'], [], [11, 13]);
        this.registerObject("1-2", this.areaService.getCustomer(), 'Understand Stakeholder Needs',
            ['Ensure the right solution is created', 'Collect feedback and generate input',
                'Ensure that the solution produced provides benefit to the stakeholders',
                'Align expectations'], [11, 23], [14, 24]);
        this.registerObject("1-3", this.areaService.getCustomer(), 'Ensure Stakeholder Satisfaction', [],
            [14, 24], [15, 25]);
        this.registerObject("1-4", this.areaService.getCustomer(), 'Use the system', [],
            [15, 25], [16, 26]);
        //solution
        this.registerObject("2-1", this.areaService.getSolutin(), 'Understand the requeriments', [], [], [33]);
        this.registerObject("2-2", this.areaService.getSolutin(), 'Shape the system', [], [33], [34, 41]);
        this.registerObject("2-3", this.areaService.getSolutin(), 'Implement the system', [], [41], [44]);
        this.registerObject("2-4", this.areaService.getSolutin(), 'Test the system', [], [34, 45], [36, 46]);
        this.registerObject("2-5", this.areaService.getSolutin(), 'Deploy the system', [], [44], [45]);
        this.registerObject("2-6", this.areaService.getSolutin(), 'Operate the system', [], [45], [46]);
        //this.areaService.getEndeavor()

        this.registerObject("3-1", this.areaService.getEndeavor(), 'Prepare do to work', [], [], [51, 62, 72]);
        this.registerObject("3-2", this.areaService.getEndeavor(), 'Coordinate activity', [], [51, 62], [52, 64]);
        this.registerObject("3-3", this.areaService.getEndeavor(), 'Support the team', [], [52, 63], [53, 74]);
        this.registerObject("3-4", this.areaService.getEndeavor(), 'Track progress', [], [53, 63, 74], [54, 65, 75]);
        this.registerObject("3-5", this.areaService.getEndeavor(), 'Stop the work', [], [54, 65, 75], [55, 66, 76]);

    }

    registerObject(code, area, name, objectives: string[], statesEntry: any[], statesCompletion: any[]) {
        let activitySpace = new ActivitySpaceMetadata(code, area, name, '');
        activitySpace.setObjectives(objectives);
        for (let ïdentifier of statesCompletion) {
            activitySpace.addCompletionCriteria(this.alphaService.getState(ïdentifier));
        }
        for (let identifier of statesEntry) {
            activitySpace.addEntryCriteria(this.alphaService.getState(identifier));

        }
        this.activitySpaces.push(activitySpace);
    }

}