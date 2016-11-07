import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ACTIVITY_SPACES } from '../../shared/models/kernel/mock-activity-spaces/mock';
import { AREAS } from '../models/kernel/mock-kernel';

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

}