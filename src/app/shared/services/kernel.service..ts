import { Injectable } from '@angular/core';
import { ACTIVITY_SPACES } from '../../shared/models/kernel/mock-activity-spaces/mock';
import { AREAS } from '../models/kernel/mock-kernel';
import { AREAS as AREAS_SUMMARY } from '../models/kernel/mock-areas';

@Injectable()
export class KernelService {
    areas: any[];
    activitySpaces: any[];
    constructor() {
        this.activitySpaces = ACTIVITY_SPACES;
        this.areas = AREAS;
    }

    getArea(areaName: string) {
        return this.areas.find(item => item.name === areaName);
    }
     getAreas(){
        return AREAS_SUMMARY;
    }

}