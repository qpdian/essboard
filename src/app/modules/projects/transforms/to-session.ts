
import { Session } from '../model/project';
import { Util } from '../model/util';
export class ToSession {
    public static withCompleteTransformation(source: any) {
        if (source) {
            let session = new Session(source._id, source.nroOrder, source.createdAt);
            let kernel = Util.buildKernel(source.alphas);
            session.kernel = kernel;
            return session;
        }

        return null;
    }

}