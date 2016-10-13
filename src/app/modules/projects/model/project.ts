import { Dimension, State } from '../model/project-kernel';
import { CheckpointMetadata } from '../../../shared/models/kernel/kernel';
import { AlphaMetadata, StateMetadata } from '../../../shared/models/kernel/kernel';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
export class Project {
  public currentKernel: Kernel;
  public members: any[];
  public createdAt: Date;
  public sessions: Session[];
  public id: string;
  public name: string;
  public description: string;
  public percent: number;
 
  constructor(id: string, name: string, description: string, createdAt: Date) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.members = [];
    /*FIX THIIS*/
    this.currentKernel = new Kernel();
    this.sessions = [];
    this.createdAt = createdAt;
  }
  addSession(session: Session): void {
    this.sessions.push(session);
  }
  addMember(id, email, avatar) {
    this.members.push(
      {
        id: id,
        email: email,
        avatar: avatar
      });
  }
  haveThisMember(member): boolean {
    const index = this.members.map(function (item) { return item.email; }).indexOf(member.email);
    return index != -1;

  }
  getLastSession() {
    if (this.sessions.length > 0) {
      return this.sessions[this.sessions.length - 1];
    }
    return null;
  }
  getLastSessionId() {
    if (this.sessions.length > 0) {
      console.log(this.sessions[this.sessions.length - 1].id);
      return this.sessions[this.sessions.length - 1].id;
    }
    return null;
  }
  fulfiledThisCheckpoint(check: CheckpointMetadata) {
    return false;
  }
  setCurrentKernel(kernel: Kernel) {
    this.currentKernel = kernel;
  }
  canCreateNewSession() {
    if (this.sessions.length == 0) { return true; }
    if (this.getLastSession().isComplete == true) { return true; }
  }
}

export class Session {
  public id: string;
  public kernel: Kernel;
  public date: Date;
  public percent: number;
  public num: number;
  public isComplete: boolean;
  public isTouched: boolean;
  public selecteds: Dimension[];
  constructor(id: string, num: number, date: Date) {
    this.date = date;
    this.num = num;
    this.id = id;
    this.isComplete = false;
    this.isTouched = false;
    this.kernel = new Kernel();
    this.percent = 0;
  }

  getIcon() {
    if (this.num > 9) {
      return 'filter_9_plus'
    }
    return 'filter_' + this.num;
  }
}

export class Kernel {
  dimensions: Dimension[] = [];
  constructor() {
    for (let alpha of ALPHAS) {
      this.dimensions.push(new Dimension(alpha, false));
    }
  }

}

