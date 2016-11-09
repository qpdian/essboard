import { Injectable } from '@angular/core';
import { AreaMetadata } from '../kernel';

@Injectable()
export class AreaMockService {
    areasSummary = [];
    private customer = new AreaMetadata(
        'Cliente',
        'Persona,grupo, o organizacion que son afectados por el sistema de software',
        'customer', 2);
    private solution = new AreaMetadata(
        'Solucion',
        'Persona,grupo, o organizacion que son afectados por el sistema de software',
        'solution', 2);
    private endeavor = new AreaMetadata(
        'Esfuerzo',
        'Persona,grupo, o organizacion que son afectados por el sistema de software',
        'endeavor', 3);
    constructor() {
        this.registerObjects();
    }
    getAreasSummary() {
        return this.areasSummary;
    }
    registerObjects() {
        this.areasSummary.push(this.customer);
        this.areasSummary.push(this.solution);
        this.areasSummary.push(this.endeavor);
    }
    getCustomer() {
        return this.customer;
    }
    getSolutin() {
        return this.solution;
    }

    getEndeavor() {
        return this.endeavor;
    }
}