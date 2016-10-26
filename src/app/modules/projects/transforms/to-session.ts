
import { Session } from '../model/project';
import { Util } from '../model/util';
export class ToSession {
    public static withCompleteTransformation(source: any) {
        let session = new Session(source._id, source.nroOrder, source.createdAt);
        let kernel = Util.buildKernel(source.dimensions);
        session.kernel = kernel;
        return session;
    }

}