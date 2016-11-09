import { Injectable } from '@angular/core';
import { AlphaMetadata } from '../kernel';

@Injectable()
export class AlphaMockService {
    alphas: AlphaMetadata[] = [];
    constructor(public areaMockService : ){

    }


    getAlphaSummary(identifier: number) {

    }
    getAlphaComplete(identifier: number) {


    }
    registerObjects() {
        const a1 = new AlphaMetadata(1, customer, '', 'Interesado', [], null, null);
        const a2 = new AlphaMetadata(2, customer, '', 'Oportunidad', [], null, null);
        const a3 = new AlphaMetadata(3, solution, '', 'Requerimientos', [], null, null);
        const a4 = new AlphaMetadata(4, solution, '', 'Sistema de Software', [], null, null);
        const a5 = new AlphaMetadata(5, endeavor, '', 'Equipo', [], null, null);
        const a6 = new AlphaMetadata(6, endeavor, '', 'Trabajo', [], null, null);
        const a7 = new AlphaMetadata(7, endeavor, '', 'Forma de trabajo', [], null, null);
    }
}