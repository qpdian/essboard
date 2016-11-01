
import { Session } from '../model/project';
import { BuilderKernel } from '../model/util/build-kernel';
export class ToSession {
    public static withCompleteTransformation(source: any) {
        if (source) {
            let session = new Session(source._id, source.nroOrder, source.createdAt);
            let kernel = BuilderKernel.build(source.alphas);
            session.kernel = kernel;
            return session;
        }
        return null;
    }

}