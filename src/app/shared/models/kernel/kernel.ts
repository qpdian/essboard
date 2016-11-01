export class AlphaMetadata {
  constructor(
    public identifier:number,
    public area: AreaMetadata,
    public description: string,
    public name: string,
    public states: StateMetadata[],
    public subAlphas: any[],
    public workProducts: any[]
  ) {
    area.addDimension(this);
    for (let state of states) {
      state.dimension = this;
    }
  }
  getType() {
    return this.area.nameCSSClass;
  }
  getAllStates() {
    return this.states;
  }
  addState(state) {
    let tam = this.states.length;
    this.states.push(state);
    state.dimension = this;
    state.num = tam++;
  }
  getState(name:string){
    return this.states.find( state => state.name == name);
  }
  getStateByIdentifier(identifier : number){
    return this.states.find(state => state.identifier === (identifier + this.identifier*10));
  }
}

export class AreaMetadata {
  dimensions: AlphaMetadata[];
  competences: CompetencyMetadata[];
  activitypaces: ActivitySpaceMetadata[];
  constructor(
    public name: string,
    public description: string,
    public nameCSSClass: string,
    public numberDimension : number
  ) {
    this.dimensions = [];
    this.name = name;
    this.nameCSSClass = nameCSSClass;
    this.description = description;
    this.competences = [];
    this.activitypaces = [];
  }
  addDimension(dimension: AlphaMetadata) {
    this.dimensions.push(dimension);
  }
  addActivitySpace(activitySpace: ActivitySpaceMetadata) {
    this.activitypaces.push(activitySpace);
  }
  addCompetence(competence: CompetencyMetadata) {
    this.competences.push(competence);
  }
  getAlpha(identifier:number){
    return this.dimensions.find(dim => dim.identifier === identifier);

  }
}
export class StateMetadata {
  public back: StateMetadata;
  public dimension: AlphaMetadata;
  public num: number;
  constructor(
    public name: string,
    public identifier: number,
    public next: StateMetadata,
    public checkList: CheckpointMetadata[]
  ) {
    if (!!next) {
      next.back = this;
    }
    this.next = next;
  }
  getCheckPoint(identifier: string){
    return this.checkList.find( check => check.identifier === identifier);
  }
  getMainChecklist() {
    let mainChecklist: CheckpointMetadata[] = [];
    for (let check of this.checkList) {
      if (check.type == 'abbrev') {
        mainChecklist.push(check);
      }
    }
    return mainChecklist;
  }
}
export class CheckpointMetadata {
  constructor(
    public name: string,
    public description: string,
    public type: string,
    public identifier: string,
    public state: StateMetadata
  ) { }
}
export class ActivitySpaceMetadata {
  objectives: string[];
  inputs: any[];
  entryCriterias: StateMetadata[];
  completionCriterias: StateMetadata[];
  constructor(
    public area: AreaMetadata,
    public name: string,
    public description: string,
  ) {
    area.addActivitySpace(this);
    this.inputs = [];
    this.objectives = [];
    this.entryCriterias = [];
    this.completionCriterias = [];
  }
  addObjective(... objectives:string[]) {
    this.objectives = objectives;
  }
  addInput(input) {
    this.inputs.push(input);
  }
  addEntryCriteria(entryCriteria) {
    this.entryCriterias.push(entryCriteria);
  }
  addCompletionCriteria(completionCriteria: StateMetadata) {
    this.completionCriterias.push(completionCriteria);
  }
}
export class CompetencyMetadata {
  helpTo: any[];
  skills: any[];
  providedBy: any[];
  comptenceLevel: CompetencyLevel;
  constructor(
    public name: string,
    public description: string,
    public area: AreaMetadata,
    public justification: string
  ) {
    area.addCompetence(this);
    this.skills = [];
    this.helpTo = [];
    this.providedBy = [];
  }
  setCompetencyLevel(competence) {
    this.comptenceLevel = competence;
  }
}
export class CompetencyLevel {
  public next: CompetencyLevel;
  constructor(
    public level: number,
    public name: string,
    public description: string,
    public back: CompetencyLevel
  ) {
    if (!!back) {
      back.next = this;
    }
    this.back = back;
  }
}

