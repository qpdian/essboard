import { AreaMetadata, AlphaMetadata, StateMetadata, CheckpointMetadata,CompetencyMetadata,CompetencyLevel } from './kernel';

export const customer = new AreaMetadata(
  'Cliente',
  'Persona,grupo, o organizacion que son afectados por el sistema de software',
  'customer');
export const solution = new AreaMetadata(
  'Solucion',
  'Persona,grupo, o organizacion que son afectados por el sistema de software',
  'solution');
export const endeavor = new AreaMetadata(
  'Esfuerzo',
  'Persona,grupo, o organizacion que son afectados por el sistema de software',
  'endeavor');
export const state16: StateMetadata = new StateMetadata(
  'Satisfecho por el uso',
  16, null, []
);
export const state15: StateMetadata = new StateMetadata(
  'Staisfecho por el despliegue', 15, state16, []
);
export const state14: StateMetadata = new StateMetadata('De acuerdo', 14, state15, []);
export const state13: StateMetadata = new StateMetadata('Involucrado', 13, state14, []);
export const state12: StateMetadata = new StateMetadata('Representado', 12, state13, []);
export const state11: StateMetadata = new StateMetadata('Reconocido', 11, state12, []);

export const state26: StateMetadata = new StateMetadata('Con beneficio acumulado', 26, null, []);
export const state25: StateMetadata = new StateMetadata('Tratado', 25, state26, []);
export const state24: StateMetadata = new StateMetadata('Viable', 24, state25, []);
export const state23: StateMetadata = new StateMetadata('Con valor establecido', 23, state24, []);
export const state22: StateMetadata = new StateMetadata('Con solucion requerida', 22, state23, []);
export const state21: StateMetadata = new StateMetadata('Identificada', 21, state22, []);





export const state36: StateMetadata = new StateMetadata('Cumplido', 36, null, []);
export const state35: StateMetadata = new StateMetadata('Tratado', 35, state36, []);
export const state34: StateMetadata = new StateMetadata('Aceptable', 34, state35, []);
export const state33: StateMetadata = new StateMetadata('Coherente', 33, state34, []);
export const state32: StateMetadata = new StateMetadata('Acotado', 32, state33, []);
export const state31: StateMetadata = new StateMetadata('Concebido', 31, state32, []);




export const state46: StateMetadata = new StateMetadata('Retirado', 46, null, []);
export const state45: StateMetadata = new StateMetadata('Operacional', 45, state46, []);
export const state44: StateMetadata = new StateMetadata('Listo', 44, state45, []);
export const state43: StateMetadata = new StateMetadata('Usable', 43, state44, []);
export const state42: StateMetadata = new StateMetadata('Demostrable', 42, state43, []);
export const state41: StateMetadata = new StateMetadata('Con arquitectura seleccionada', 41, state42, []);





export const state55: StateMetadata = new StateMetadata('Suspendido', 55, null, []);
export const state54: StateMetadata = new StateMetadata('Ejecutando', 54, state55, []);
export const state53: StateMetadata = new StateMetadata('Colaborando', 53, state54, []);
export const state52: StateMetadata = new StateMetadata('Formado', 52, state53, []);
export const state51: StateMetadata = new StateMetadata('Sembrado', 51, state52, []);




export const state66: StateMetadata = new StateMetadata('Cerrado', 66, null, []);
export const state65: StateMetadata = new StateMetadata('Concluido', 65, state66, []);
export const state64: StateMetadata = new StateMetadata('Bajo control', 64, state65, []);
export const state63: StateMetadata = new StateMetadata('Comenzado', 63, state64, []);
export const state62: StateMetadata = new StateMetadata('Preparado', 62, state63, []);
export const state61: StateMetadata = new StateMetadata('Iniciado', 61, state62, []);

export const state76: StateMetadata = new StateMetadata('Retirado', 76, null, []);
export const state75: StateMetadata = new StateMetadata('Trabajando bien', 75, state76, []);
export const state74: StateMetadata = new StateMetadata('En su lugar', 74, state75, []);
export const state73: StateMetadata = new StateMetadata('En uso', 73, state74, []);
export const state72: StateMetadata = new StateMetadata('Con bases establecidas', 72, state73, []);
export const state71: StateMetadata = new StateMetadata('Con principios establecidos', 71, state72, []);











export const checkpointsForState11: CheckpointMetadata[] = [
  {
    code: '1-1-1',
    name: 'Se identificaron los interesados',
    description: 'Se identificaron todos los diferentes grupos de interesados que son, o serán, afectados por el desarrollo y funcionamiento del sistema de software.',
    type: 'abbrev',
    state: state11,
  },
  {
    code: '1-1-2',
    name: 'Existe un acuerdo entre los grupos de interesados que se van a representar',
    description: 'Existe un acuerdo sobre los grupos de interés a ser representado. Como mínimo, se han considerado los grupos de interés que el financian, usan, dan soporte y mantenimiento al sistema.',
    type: 'abbrev',
    state: state11,
  },
  {
    code: '1-1-3',
    name: 'Se definieron las responsabilidades de los representantes de los interesados',
    description: 'Se han definido las responsabilidades de los representantes de los interesados.',
    type: 'abbrev',
    state: state11,
  }
];
export const checkpointsForState12: CheckpointMetadata[] = [
  {
    code: '1-2-1',
    name: 'Responsabilidades acordadas',
    description: 'Los representantes de los interesados han acordado en tomar sus responsabilidades.',
    type: 'abbrev',
    state: state12,
  },
  {
    code: '1-2-2',
    name: 'Representantes autorizados',
    description: 'Los representantes de los interesados estan autorizados para llevar a cabo sus responsabilidades.',
    type: 'abbrev',
    state: state12,
  },
  {
    code: '1-2-3',
    name: 'Forma de colaboración acordada',
    description: 'Se han acordado la forma de colaboracion entre los representantes de los interesados.',
    type: 'abbrev',
    state: state12,
  },
  {
    code: '1-2-4',
    name: 'Forma de trabajo soportada y respetada',
    description: 'Los representantes de los interesados apoyan y respetan la forma de trabajo del equipo.',
    type: 'abbrev',
    state: state12,
  }];
export const checkpointsForState13: CheckpointMetadata[] = [
  {
    code: '1-3-1',
    name: 'Representantes de los interesados asisten al equipos',
    description: 'Los representantes de los interesados asisten al equipo conforme a sus responsabilidades.',
    type: 'abbrev',
    state: state13,
  },
  {
    code: '1-3-2',
    name: 'Representantes de los interesados agregan retroalimentacion y participan en decisiones temporales.',
    description: 'Los representantes de los interesados proveen retroalimentacion y toman parte en la toma de decisiones de una manera oportuna.',
    type: 'abbrev',
    state: state13,
  },
  {
    code: '1-3-3',
    name: 'Representantes de los interesados se comunican con el grupo de interesados.',
    description: 'Los representantes de los interesados comunican cambios que son relevantes para su grupo.',
    type: 'abbrev',
    state: state13,
  }
];
export const checkpointsForState14: CheckpointMetadata[] = [
  {
    code: '1-4-1',
    name: 'Representantes de los interesados acordaron las expectativas minimas.',
    description: 'Los representantes de los interesados acordaron sobre sus expectativas minimas sobre el siguiente despliegue del nuevo sistema',
    type: 'abbrev',
    state: state14,
  },

  {
    code: '1-4-2',
    name: 'Representantes de los interesados estan feliz con su participacion.',
    description: 'Los representantes de los interesados  estan felices por su partipacion en el trabajo.',
    type: 'complete',
    state: state14,
  },
  {
    code: '1-4-3',
    name: 'Entrada de los representantes de los interesados son valoradas.',
    description: 'Los representantes de los interesados acuerdan que su entrada es valorada por los representantes de los interesados y tratada con respeto ',
    type: 'abbrev',
    state: state14,
  },
  {
    code: '1-4-4',
    name: 'Entrada del equipo es valorado y respetado.',
    description: 'Los miembros del equipo acuerdan que su entrada es valorada por los representantes de los interesados y tratada con respeto',
    type: 'complete',
    state: state14,
  },
  {
    code: '1-4-5',
    name: 'Prioridades claras y perspectivas balanceadas.',
    description: 'Los representantes de los interesados acuerdan como sus diferentes prioridades y perspectivas han sido balanceados para proveer una clara direccion al equipo',
    type: 'abbrev',
    state: state14,
  }];
export const checkpointsForState15: CheckpointMetadata[] = [
  {
    code: '1-5-1',
    name: 'Interesadaos proveen retroalimentacion.',
    description: 'Los representantes de los interesados proveen retroalimentacion del sistema desde la perspectivas de su grupo de interesados',
    type: 'abbrev',
    state: state15,
  },
  {
    code: '1-5-2',
    name: 'El sistema esta listo para el despiegue.',
    description: 'Los representantes de los interesados confirman que el sistema esta listo para el despliegue.',
    type: 'abbrev',
    state: state15,
  }];
export const checkpointsForState16: CheckpointMetadata[] = [
  {
    code: '1-6-1',
    name: 'Retroalimentacion del uso del sistema es disponible',
    description: 'Los interesados estan usando el nuevo sistema y proveen retroalimentacion de sus experiencias',
    type: 'abbrev',
    state: state16,
  },
  {
    code: '1-6-2',
    name: 'El sistema cumple con las alternativass',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state16,
  }
];

state11.checkList = checkpointsForState11;
state12.checkList = checkpointsForState12;
state13.checkList = checkpointsForState13;
state14.checkList = checkpointsForState14;
state15.checkList = checkpointsForState15;
state16.checkList = checkpointsForState16;

export const checkpointsForState21: CheckpointMetadata[] = [
  {
    code: '2-1-1',
    name: 'Se identifico una oportunidad que una solucion basada en software podria tratar',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  }, {
    code: '2-1-2',
    name: 'Un interesado quiere hacer una inversion en un mejor valor potencial de comprension',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  },
  {
    code: '2-1-3',
    name: 'Se identificaron otros interesados que quieren compartir la oportunidad',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state21
  }];
export const checkpointsForState22: CheckpointMetadata[] = [
  {
    code: '2-2-1',
    name: 'Se confirmo la necesidad de una solucion basada en software',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  }, {
    code: '2-2-2',
    name: 'Se identificaron las necesidades de los interesados',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  },
  {
    code: '2-2-3',
    name: 'Se identificaron los problemas y las causad raices subyacentes',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  },
  {
    code: '2-2-4',
    name: 'Se propuso al menos una solucion basada en software',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state22
  }];
export const checkpointsForState23: CheckpointMetadata[] = [
  {
    code: '2-3-1',
    name: 'Se establecio el valor de una solucion exitosa',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state23
  }, {
    code: '2-3-2',
    name: 'Se comprendio el impacto de la solucion sobre los interesados',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state23
  },
  {
    code: '2-3-3',
    name: '',
    description: 'Se comprendio el valor del sistema de software.',
    type: 'abbrev',
    state: state23
  }
];
export const checkpointsForState24: CheckpointMetadata[] = [
  {
    code: '2-4-1',
    name: 'Se esbozo una solucion',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state24
  }, {
    code: '2-4-2',
    name: 'Las indicaciones y la solucion se pueden desarrollar y desplegar dentro de las restricciones',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state24
  },
  {
    code: '2-4-3',
    name: '',
    description: 'Los riesgos son manejables.',
    type: 'abbrev',
    state: state24
  }
];
export const checkpointsForState25: CheckpointMetadata[] = [
  {
    code: '2-5-1',
    name: 'Se produjo una solucion que trata la oportunidad de forma demostrable',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state25
  }, {
    code: '2-4-2',
    name: 'Un sistema usable esta disponible',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state25
  },
  {
    code: '2-4-3',
    name: '',
    description: 'Los interesados acuerdan el despliegue de valor.',
    type: 'abbrev',
    state: state25
  },
  {
    code: '2-4-4',
    name: '',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state25
  }
];
export const checkpointsForState26: CheckpointMetadata[] = [
  {
    code: '2-6-1',
    name: 'El uso operacional esta creando beneficios tangibles',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state26
  }, {
    code: '2-6-2',
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

/* requeriments*/

export const checkpointsForState31: CheckpointMetadata[] = [
  {
    code: '3-1-1',
    name: 'La necesidad de un nuevo sistema es clara',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state31
  }, {
    code: '3-1-2',
    name: 'Se identificaron los usuarios',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state31
  },
  {
    code: '3-1-3',
    name: 'Se identificaron los promotores iniciales',
    description: 'Los interesados acuerdan el despliegue de valor.',
    type: 'abbrev',
    state: state25
  }
];
export const checkpointsForState32: CheckpointMetadata[] = [
  {
    code: '3-2-1',
    name: 'Se acordaron el proposito y la extension del sistema',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state32
  }, {
    code: '3-2-2',
    name: 'Los criterios de exito son claros',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state32
  },
  {
    code: '3-2-3',
    name: '',
    description: 'Se acordaron los mecanismos para manejar los requisitos.',
    type: 'abbrev',
    state: state32
  },
  {
    code: '3-2-4',
    name: 'Se identiificaron las restricciones y suposiciones',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state32
  }
];
export const checkpointsForState33: CheckpointMetadata[] = [
  {
    code: '3-3-1',
    name: 'La vision general es clara y la comparten todos los involucrados',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state32
  }, {
    code: '3-3-2',
    name: 'Se explicaron importantes escenarios de uso',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state32
  },
  {
    code: '3-3-3',
    name: '',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state32
  },
  {
    code: '3-3-4',
    name: 'Se trataron los conflictos',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state32
  },
  {
    code: '3-3-5',
    name: 'Se comprende el impacto',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state32
  }
];
state31.checkList = checkpointsForState31;
state32.checkList = checkpointsForState32;
state33.checkList = checkpointsForState33;

export const checkpointsForState41: CheckpointMetadata[] = [
  {
    code: '4-1-1',
    name: 'Se selecciono la arquitectura que trata los riesgos tecnicos clave',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state41
  }, {
    code: '4-1-2',
    name: 'Se acordaron los criterios para seleccionar la arquitectura',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state41
  },
  {
    code: '4-1-3',
    name: 'Se seleccionaron las plataformas,tecnologias y lenguajes',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state41
  },
  {
    code: '4-1-4',
    name: 'Se tomaron las decisiones de compra,construccion y reuso',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state41
  }
];
export const checkpointsForState42: CheckpointMetadata[] = [
  {
    code: '4-2-1',
    name: 'Se demostraron las caracteristicas clave de la arquitectura',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state42
  }, {
    code: '4-2-2',
    name: 'Los interesados relevantes acordaron que la arquitectura es apropiada',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state42
  },
  {
    code: '4-2-3',
    name: 'Se ejercieron la interfaz critica y las confiuraciones del sistema',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state42
  }
];
state41.checkList = checkpointsForState41;
state42.checkList = checkpointsForState42;

export const checkpointsForState51: CheckpointMetadata[] = [
  {
    code: '5-1-1',
    name: 'La mision del equipo es clara',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state51
  }, {
    code: '5-1-2',
    name: 'El equipo sabe como crecer para lograr su mision',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state51
  },
  {
    code: '5-1-3',
    name: 'Se identificaron las competencias requeridas',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state51
  },
  {
    code: '5-1-4',
    name: 'Se identifico el tamaño del equipo',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state51
  }
];
export const checkpointsForState52: CheckpointMetadata[] = [
  {
    code: '5-2-1',
    name: 'El equipo tiene suficientes recursos para iniciar la mision',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state52
  }, {
    code: '5-2-2',
    name: 'Se comprendieron la organizacion del equipo y las responsabilidades individuales',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state52
  },
  {
    code: '5-2-3',
    name: 'Los miembros saben como ejecutar el trabajo',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state52
  }
];
state51.checkList = checkpointsForState51;
state52.checkList = checkpointsForState52;

export const checkpointsForState61: CheckpointMetadata[] = [
  {
    code: '6-2-1',
    name: 'Se conoce el iniciador del trabajo',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state61
  }, {
    code: '6-1-2',
    name: 'Se aclaran las restricciones del trabajo',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state61
  },
  {
    code: '6-1-3',
    name: 'Se aclaran el patrocinio y el modelo de financiacion',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state61
  },
  {
    code: '6-1-4',
    name: 'Se aclara la prioridad del trabajo',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state61
  }

];
export const checkpointsForState62: CheckpointMetadata[] = [
  {
    code: '6-2-1',
    name: 'Se estimaron el costo y el esfuerzo',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state62
  }, {
    code: '6-2-2',
    name: 'La financiacion y los recursos trabajan en su lugar',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state62
  },
  {
    code: '6-2-3',
    name: 'Se comprendieron los criterios de aceptacion',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state62
  },
  {
    code: '6-2-4',
    name: 'Se acordaron los procedimientos del gobierno',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state62
  }
  ,
  {
    code: '6-2-5',
    name: 'Se comprendio la exposicion al riesgo',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state62
  }
  ,
  {
    code: '6-2-6',
    name: 'Se aclararon las dependencias',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state62
  }

];
export const checkpointsForState63: CheckpointMetadata[] = [
  {
    code: '6-3-1',
    name: 'Se comenzo el trabajo de desarrollo',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state63
  }, {
    code: '6-3-2',
    name: 'Se monitoreo el proces de desarrollo',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state63
  },
  {
    code: '6-3-3',
    name: 'Se hizo la division en items accionables con una clara definicion',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state63
  },
  {
    code: '6-3-4',
    name: 'Los miembros del equipo estan aceptando y progresando en los items de trabajo',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state63
  }

];
state61.checkList = checkpointsForState61;
state62.checkList = checkpointsForState62;
state63.checkList = checkpointsForState63;
export const checkpointsForState71: CheckpointMetadata[] = [
  {
    code: '7-1-1',
    name: 'Se establecieron los principios y restricciones',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state71
  }, {
    code: '7-1-2',
    name: 'Se comprometieron los principios y restricciones',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state71
  },
  {
    code: '7-1-3',
    name: 'Se acordaron las practicas y herramientas',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state71
  },
  {
    code: '7-1-4',
    name: 'Se comprendio el contexto en que el equipo debe operar',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state71
  }
];
export const checkpointsForState72: CheckpointMetadata[] = [
  {
    code: '7-2-1',
    name: 'Practicas clave y herramientas listas',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state72
  }, {
    code: '7-2-2',
    name: 'Se analizaron y comprendieron las brechas entre practicas y herramientas',
    description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
    type: 'abbrev',
    state: state72
  },
  {
    code: '7-2-3',
    name: 'Se analizaron y comprendieron las brechas de capacidad',
    description: 'Las prioridades son claras.',
    type: 'abbrev',
    state: state72
  },
  {
    code: '7-2-4',
    name: 'Se integraron las practicas seleccionadas y las herramientas',
    description: 'La solucion que satisface los interesados trata la oportunidad.',
    type: 'abbrev',
    state: state72
  }
];
state71.checkList = checkpointsForState71;
state72.checkList = checkpointsForState72;


const states1 = [state11, state12, state13, state14, state15, state16];
const states2 = [state21, state22, state23, state24, state25, state26];
const states3 = [state31, state32, state33, state34, state35, state36];
const states4 = [state41, state42, state43, state44, state45, state46];
const states5 = [state51, state52, state53, state54, state55];
const states6 = [state61, state62, state63, state64, state65, state66];
const states7 = [state71, state72, state73, state74, state75, state76];
const a1 = new AlphaMetadata(customer, '', 'Interesado', [], null, null);
const a2 = new AlphaMetadata(customer, '', 'Oportunidad', [], null, null);
const a3 = new AlphaMetadata(solution, '', 'Requerimientos', [], null, null);
const a4 = new AlphaMetadata(solution, '', 'Sistema de Software', [], null, null);
const a5 = new AlphaMetadata(endeavor, '', 'Equipo', [], null, null);
const a6 = new AlphaMetadata(endeavor, '', 'Trabajo', [], null, null);
const a7 = new AlphaMetadata(endeavor, '', 'Forma de trabajo', [], null, null);

for (let state of states1) { a1.addState(state); }
for (let state of states2) { a2.addState(state); }
for (let state of states3) { a3.addState(state); }
for (let state of states4) { a4.addState(state); }
for (let state of states5) { a5.addState(state); }
for (let state of states6) { a6.addState(state); }
for (let state of states6) { a7.addState(state); }
export const ALPHAS: AlphaMetadata[] = [
  a1, a2, a3, a4, a5, a6, a7
];
export const AREAS: AreaMetadata[] = [
  customer, solution, endeavor
];

export const level1: CompetencyLevel = new CompetencyLevel(1,'Asistente', 'Demuestra una basica comprension de los conceptops y puede seguir instrucciones', null);
export const level2: CompetencyLevel = new CompetencyLevel(2,'Aplicante', 'Capaz de aplicar conceptos en contextos simples mediante la aplicacion rutinaria de la experiencia ganada',level1);
export const level3: CompetencyLevel = new CompetencyLevel(3,'Maestro','Capaz de aplicar los conceptos en muchos contextos y tiene la experiencia de trabajar sin supervision ',level2);
export const level4: CompetencyLevel = new CompetencyLevel(4,'Adaptador','Capaz de aplicar juicios sobre cuando,como aplicar los conceptos en contextos complejos.Puede habilitar a otros a plicar los conceptos',level3);
export const level5: CompetencyLevel = new CompetencyLevel(5,'Innovador','Un experto reconocido capaz de extender los conceptos a nuevos contextos e inspirar a otros',level4);
export const COMPETENCESLEVEL : CompetencyLevel[]=[level1,level2,level3,level4,level5];
export const competence1 : CompetencyMetadata = new CompetencyMetadata('Representacion del interesado','Encapsula la habilidad de obtener,comunicar y balancear las necesidades de los interesados y representar de forma precsa sus vistas ',customer,'');
export const competence2 : CompetencyMetadata = new CompetencyMetadata('Analisis','Encapsula la habilidad de comprender oportunidades y sus relaciones con las necesidades del interesado ,y transformarlos en requerimientos consistentes y convenientes',solution,'');
export const competence3 : CompetencyMetadata = new CompetencyMetadata('Desarrollo','Encapsula la habilidad de diseñar y programar efectivos sistemas de software siguiendo los estandares y normas acordadas por el equipo ',solution,'');
export const competence4 : CompetencyMetadata = new CompetencyMetadata('Pruebas','Encapsula la habilidad de probar el sistema, verificando que este sea usable y que cumple con los requerimientos ',solution,'');
export const competence5 : CompetencyMetadata = new CompetencyMetadata('Liderazgo','Encapsula la habilidad de inspirar y motivar a un grupo de personas a lograr un exitoso conclusion de su trabajo y lograr sus objetivos',endeavor,'');
export const competence6 : CompetencyMetadata = new CompetencyMetadata('Gestion','Encapsula la capacidad de coordinar,planear y rastrear el trabajo',endeavor,'');