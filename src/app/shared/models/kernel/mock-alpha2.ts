


import {  StateMetadata,CheckpointMetadata } from './kernel';



export const state26: StateMetadata = new StateMetadata('Con beneficio acumulado', 26, null, []);
export const state25: StateMetadata = new StateMetadata('Tratado', 25, state26, []);
export const state24: StateMetadata = new StateMetadata('Viable', 24, state25, []);
export const state23: StateMetadata = new StateMetadata('Con valor establecido', 23, state24, []);
export const state22: StateMetadata = new StateMetadata('Con solucion requerida', 22, state23, []);
export const state21: StateMetadata = new StateMetadata('Identificada', 21, state22, []);

export const checkpointsForState21: CheckpointMetadata[] = [
  {
     concept: '2-1-1',
    name: 'Se identifico una oportunidad que una solucion basada en software podria tratar',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  }, {
     concept: '2-1-2',
    name: 'Un interesado quiere hacer una inversion en un mejor valor potencial de comprension',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  },
  {
     concept: '2-1-3',
    name: 'Se identificaron otros interesados que quieren compartir la oportunidad',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  }];
export const checkpointsForState22: CheckpointMetadata[] = [
  {
     concept: '2-2-1',
    name: 'Se confirmo la necesidad de una solucion basada en software',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  }, {
     concept: '2-2-2',
    name: 'Se identificaron las necesidades de los interesados',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  },
  {
     concept: '2-2-3',
    name: 'Se identificaron los problemas y las causad raices subyacentes',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  },
  {
     concept: '2-2-4',
    name: 'Se propuso al menos una solucion basada en software',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  }];
export const checkpointsForState23: CheckpointMetadata[] = [
  {
     concept: '2-3-1',
    name: 'Se establecio el valor de una solucion exitosa',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state23
  }, {
     concept: '2-3-2',
    name: 'Se comprendio el impacto de la solucion sobre los interesados',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state23
  },
  {
     concept: '2-3-3',
    name: '',
    description: 'Se comprendio el valor del sistema de software.',
    type: 'abbrev',
    state: state23
  }
];
export const checkpointsForState24: CheckpointMetadata[] = [
  {
     concept: '2-4-1',
    name: 'Se esbozo una solucion',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state24
  }, {
     concept: '2-4-2',
    name: 'Las indicaciones y la solucion se pueden desarrollar y desplegar dentro de las restricciones',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state24
  },
  {
     concept: '2-4-3',
    name: '',
    description: 'Los riesgos son manejables.',
    type: 'abbrev',
    state: state24
  }
];
export const checkpointsForState25: CheckpointMetadata[] = [
  {
     concept: '2-5-1',
    name: 'Se produjo una solucion que trata la oportunidad de forma demostrable',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state25
  }, {
     concept: '2-4-2',
    name: 'Un sistema usable esta disponible',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state25
  },
  {
     concept: '2-4-3',
    name: '',
    description: 'Los interesados acuerdan el despliegue de valor.',
    type: 'abbrev',
    state: state25
  },
  {
     concept: '2-4-4',
    name: '',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state25
  }
];
export const checkpointsForState26: CheckpointMetadata[] = [
  {
     concept: '2-6-1',
    name: 'El uso operacional esta creando beneficios tangibles',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state26
  }, {
     concept: '2-6-2',
    name: 'El perfil de retorno de la inversion es al menos tan bueno como se espero',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state26
  }
];

state21.checkList = checkpointsForState21;
state22.checkList = checkpointsForState22;
state23.checkList = checkpointsForState23;
state24.checkList = checkpointsForState24;
state25.checkList = checkpointsForState25;
state26.checkList = checkpointsForState26;

