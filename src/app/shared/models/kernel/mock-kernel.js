"use strict";
exports.customer = {
    color: 12,
    name: 'Cliente',
    description: 'Persona,grupo, o organizacion que son afectados por el sistema de software',
    type: 'customer',
};
exports.solution = {
    color: 12,
    name: 'Solucion',
    description: 'Persona,grupo, o organizacion que son afectados por el sistema de software',
    type: 'solution',
};
exports.endeavor = {
    color: 12,
    name: 'Esfuerzo',
    description: 'Persona,grupo, o organizacion que son afectados por el sistema de software',
    type: 'endeavor',
};
exports.state16 = { name: 'Satisfecho por el uso', id: 16, next: null, back: null, checkList: [] };
exports.state15 = { name: 'Staisfecho por el despliegue', id: 15, next: exports.state16, back: null, checkList: [] };
exports.state14 = { name: 'De acuerdo', id: 14, next: exports.state15, back: null, checkList: [] };
exports.state13 = { name: 'Involucrado', id: 13, next: exports.state14, back: null, checkList: [] };
exports.state12 = { name: 'Representado', id: 12, next: exports.state13, back: null, checkList: [] };
exports.state11 = { name: 'Reconocido', id: 11, next: exports.state12, back: null, checkList: [] };
exports.state21 = { name: 'Identificado', id: 21, next: null, back: null, checkList: [] };
exports.checkpointsForState11 = [
    {
        code: '1-1-1',
        name: 'Se identificaron los interesados',
        description: 'Se identificaron todos los diferentes grupos de interesados que son, o serán, afectados por el desarrollo y funcionamiento del sistema de software.',
        type: 'abbrev',
        state: exports.state11,
    },
    {
        code: '1-1-2',
        name: 'Existe un acuerdo entre los grupos de interesados que se van a representar',
        description: 'Existe un acuerdo sobre los grupos de interés a ser representado. Como mínimo, se han considerado los grupos de interés que el financian, usan, dan soporte y mantenimiento al sistema.',
        type: 'abbrev',
        state: exports.state11,
    },
    {
        code: '1-1-3',
        name: 'Se definieron las responsabilidades de los representantes de los interesados',
        description: 'Se han definido las responsabilidades de los representantes de los interesados.',
        type: 'abbrev',
        state: exports.state11,
    }
];
exports.checkpointsForState12 = [
    {
        code: '1-2-1',
        name: 'Responsabilidades acordadas',
        description: 'Los representantes de los interesados han acordado en tomar sus responsabilidades.',
        type: 'abbrev',
        state: exports.state12,
    },
    {
        code: '1-2-2',
        name: 'Representantes autorizados',
        description: 'Los representantes de los interesados estan autorizados para llevar a cabo sus responsabilidades.',
        type: 'abbrev',
        state: exports.state12,
    },
    {
        code: '1-2-3',
        name: 'Forma de colaboración acordada',
        description: 'Se han acordado la forma de colaboracion entre los representantes de los interesados.',
        type: 'abbrev',
        state: exports.state12,
    },
    {
        code: '1-2-4',
        name: 'Forma de trabajo soportada y respetada',
        description: 'Los representantes de los interesados apoyan y respetan la forma de trabajo del equipo.',
        type: 'abbrev',
        state: exports.state12,
    }];
exports.checkpointsForState13 = [
    {
        code: '1-3-1',
        name: 'Representantes de los interesados asisten al equipos',
        description: 'Los representantes de los interesados asisten al equipo conforme a sus responsabilidades.',
        type: 'abbrev',
        state: exports.state13,
    },
    {
        code: '1-3-2',
        name: 'Representantes de los interesados agregan retroalimentacion y participan en decisiones temporales.',
        description: 'Los representantes de los interesados proveen retroalimentacion y toman parte en la toma de decisiones de una manera oportuna.',
        type: 'abbrev',
        state: exports.state13,
    },
    {
        code: '1-3-3',
        name: 'Representantes de los interesados se comunican con el grupo de interesados.',
        description: 'Los representantes de los interesados comunican cambios que son relevantes para su grupo.',
        type: 'abbrev',
        state: exports.state13,
    }
];
exports.checkpointsForState14 = [
    {
        code: '1-4-1',
        name: 'Representantes de los interesados acordaron las expectativas minimas.',
        description: 'Los representantes de los interesados acordaron sobre sus expectativas minimas sobre el siguiente despliegue del nuevo sistema',
        type: 'abbrev',
        state: exports.state14,
    },
    {
        code: '1-4-2',
        name: 'Representantes de los interesados estan feliz con su participacion.',
        description: 'Los representantes de los interesados  estan felices por su partipacion en el trabajo.',
        type: 'complete',
        state: exports.state14,
    },
    {
        code: '1-4-3',
        name: 'Entrada de los representantes de los interesados son valoradas.',
        description: 'Los representantes de los interesados acuerdan que su entrada es valorada por los representantes de los interesados y tratada con respeto ',
        type: 'abbrev',
        state: exports.state14,
    },
    {
        code: '1-4-4',
        name: 'Entrada del equipo es valorado y respetado.',
        description: 'Los miembros del equipo acuerdan que su entrada es valorada por los representantes de los interesados y tratada con respeto',
        type: 'complete',
        state: exports.state14,
    },
    {
        code: '1-4-5',
        name: 'Prioridades claras y perspectivas balanceadas.',
        description: 'Los representantes de los interesados acuerdan como sus diferentes prioridades y perspectivas han sido balanceados para proveer una clara direccion al equipo',
        type: 'abbrev',
        state: exports.state14,
    }];
exports.checkpointsForState15 = [
    {
        code: '1-5-1',
        name: 'Interesadaos proveen retroalimentacion.',
        description: 'Los representantes de los interesados proveen retroalimentacion del sistema desde la perspectivas de su grupo de interesados',
        type: 'abbrev',
        state: exports.state15,
    },
    {
        code: '1-5-2',
        name: 'El sistema esta listo para el despiegue.',
        description: 'Los representantes de los interesados confirman que el sistema esta listo para el despliegue.',
        type: 'abbrev',
        state: exports.state15,
    }];
exports.checkpointsForState16 = [
    {
        code: '1-6-1',
        name: 'Retroalimentacion del uso del sistema es disponible',
        description: 'Los interesados estan usando el nuevo sistema y proveen retroalimentacion de sus experiencias',
        type: 'abbrev',
        state: exports.state16,
    },
    {
        code: '1-6-2',
        name: 'El sistema cumple con las alternativass',
        description: 'Los interesados confirman que el nuevo sistema cumple con las expectativas.',
        type: 'abbrev',
        state: exports.state16,
    }
];
exports.state11.checkList = exports.checkpointsForState11;
exports.state12.checkList = exports.checkpointsForState12;
exports.state13.checkList = exports.checkpointsForState13;
exports.state14.checkList = exports.checkpointsForState14;
exports.state15.checkList = exports.checkpointsForState15;
exports.state16.checkList = exports.checkpointsForState16;
exports.ALPHAS = [
    {
        color: 11,
        area: exports.customer,
        description: '',
        name: 'Interesado',
        states: [exports.state11, exports.state12, exports.state13, exports.state14, exports.state15, exports.state16],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.customer,
        description: '',
        name: 'Oportunidad',
        states: [exports.state21],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.solution,
        description: '',
        name: 'Requerimientos',
        states: [exports.state16, exports.state15],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.solution,
        description: '',
        name: 'Sistema de Software',
        states: [exports.state16, exports.state15],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.endeavor,
        description: '',
        name: 'Equipo',
        states: [exports.state16, exports.state15],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.endeavor,
        description: '',
        name: 'Trabajo',
        states: [exports.state16, exports.state15],
        subAlphas: null,
        workProducts: null
    },
    {
        color: 11,
        area: exports.endeavor,
        description: '',
        name: 'Forma de trabajo',
        states: [exports.state16, exports.state15],
        subAlphas: null,
        workProducts: null
    }
];
//# sourceMappingURL=mock-kernel.js.map