import { Alpha, Kernel } from './project-kernel';
import { CheckpointMetadata } from '../../../shared/models/kernel/kernel';
import { User } from '../../users/model/user';

export class Project {
  public members: any[];
  public createdAt: Date;
  public sessions: Session[];
  public id: string;
  public name: string;
  public description: string;
  public percent: number;
  public lastSession: Session;

  constructor(id: string, name: string, description: string, private ownerId: string, createdAt: Date = new Date()) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.members = [];
    this.sessions = [];
    this.createdAt = createdAt;
  }

  isInvited(user: User): boolean {
    return this.ownerId !== user.id;
  }

  public get currentKernel(): Kernel {
    if (this.lastSession) {
      return this.lastSession.kernel;
    } else {
      return Kernel.empty();
    }
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

  canCreateNewSession() {
    if (this.sessions.length === 0) { return true; }
    if (this.getLastSession().isComplete === true) { return true; }
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
  public selecteds: Alpha[];
  constructor(id: string, num: number, date: Date) {
    this.date = date;
    this.num = num;
    this.id = id;
    this.isComplete = false;
    this.isTouched = false;
    this.kernel = null;
    this.percent = 0;
  }

  getIcon() {
    if (this.num > 9) {
      return 'filter_9_plus'
    }
    return 'filter_' + this.num;
  }
  setKernel(kernel: Kernel) {
    this.kernel = kernel;
  }
  getDimension(alpha) {
    if (!!alpha) { return this.kernel.dimensions.find(dim => dim.metadataId === alpha.metadataId); }
    return null;
  }
}
