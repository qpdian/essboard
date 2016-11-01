import { ActivitySpaceMetadata } from '../kernel';
import { customer, solution, endeavor } from '../mock-areas';
import { ALPHAS } from '../mock-kernel';

const activitySpace1 = new ActivitySpaceMetadata(customer, 'Explore posibilities', '');
activitySpace1.addObjective(
    'Enable the right stakeholders to be involved', 'Understand the stakeholders’ needs',
    'Identify opportunities for the use of the software system',
    'Understand why the software system is needed',
    'Establish the value offered by the software system');
activitySpace1.addInput(null);
activitySpace1.addEntryCriteria(null);
activitySpace1.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(1));
activitySpace1.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(1));

const activitySpace2 = new ActivitySpaceMetadata(customer, 'Understand Stakeholder Needs', '');
activitySpace2.addObjective(
    'Ensure the right solution is created', 'Collect feedback and generate input',
    'Ensure that the solution produced provides benefit to the stakeholders',
    'Align expectations');
activitySpace2.addInput(customer.getAlpha(1));
activitySpace2.addInput(customer.getAlpha(2));
activitySpace2.addInput(solution.getAlpha(3));
activitySpace2.addInput(solution.getAlpha(4));

activitySpace2.addEntryCriteria(ALPHAS[3].getStateByIdentifier(1));
activitySpace2.addEntryCriteria(ALPHAS[4].getStateByIdentifier(3));

activitySpace2.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(2));
activitySpace2.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(4));


export const ACTIVITY_SPACES: ActivitySpaceMetadata[] = [
    activitySpace1, activitySpace2
];