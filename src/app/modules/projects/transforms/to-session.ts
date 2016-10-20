
import { Session } from '../model/project';
import { Util } from '../model/util';
export class ToSession {
    public static transformComplete(obj: any) {
        let session = new Session(obj._id, obj.nroOrder, obj.createdAt);
        let kernel = Util.buildKernel(obj.dimensions);
        session.kernel = kernel;
        return session;
    }

}