
import { Project, Session } from '../model/project';
import { Util } from '../model/util';
export class ToProject {
    public static transformCompleteToProject(obj: any) {
        let p = new Project(obj._id, obj.name, obj.description, obj.createdAt);
        for (let session of obj.sessions) {
            p.addSession(this.transformSourceToSession(session));
        }
        p.setCurrentKernel(Util.buildKernel(obj.currentKernel));
        for (let member of obj.members) {
            p.addMember(member._id, member.email, member.avatar);
        }
        return p;
    }
    public static transformSourceToSession(obj: any) {
        return new Session(obj._id, obj.nroOrder, obj.createdAt)
    }
}