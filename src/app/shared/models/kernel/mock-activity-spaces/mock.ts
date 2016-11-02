import { ActivitySpaceMetadata } from '../kernel';
import { customer, solution, endeavor } from '../mock-areas';
import { ALPHAS } from '../mock-kernel';

const activitySpace1 = new ActivitySpaceMetadata(customer, 'Explore posibilities', '');
activitySpace1.addObjective(
    'Enable the right stakeholders to be involved', 'Understand the stakeholders’ needs',
    'Identify opportunities for the use of the software system',
    'Understand why the software system is needed',
    'Establish the value offered by the software system');

activitySpace1.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(1));
activitySpace1.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(3));

const activitySpace2 = new ActivitySpaceMetadata(customer, 'Understand Stakeholder Needs', '');
activitySpace2.addObjective(
    'Ensure the right solution is created', 'Collect feedback and generate input',
    'Ensure that the solution produced provides benefit to the stakeholders',
    'Align expectations');
activitySpace2.addInput(customer.getAlpha(1));
activitySpace2.addInput(customer.getAlpha(2));
activitySpace2.addInput(solution.getAlpha(3));
activitySpace2.addInput(solution.getAlpha(4));

activitySpace2.addEntryCriteria(ALPHAS[0].getStateByIdentifier(1));
activitySpace2.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(4));

activitySpace2.addEntryCriteria(ALPHAS[1].getStateByIdentifier(3));
activitySpace2.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(4));

const activitySpace3 = new ActivitySpaceMetadata(customer, 'Ensure Stakeholder Satisfaction', '');
activitySpace3.addEntryCriteria(ALPHAS[0].getStateByIdentifier(4));
activitySpace3.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(5));
activitySpace3.addEntryCriteria(ALPHAS[1].getStateByIdentifier(4));
activitySpace3.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(5));

const activitySpace4 = new ActivitySpaceMetadata(customer, 'Use the system', '');
activitySpace4.addEntryCriteria(ALPHAS[0].getStateByIdentifier(5));
activitySpace4.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(6));
activitySpace4.addEntryCriteria(ALPHAS[1].getStateByIdentifier(5));
activitySpace4.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(6));

const activitySpace5 = new ActivitySpaceMetadata(solution, 'Understand the requeriments', '');
activitySpace5.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(3));
const activitySpace6 = new ActivitySpaceMetadata(solution, 'Shape the system', '');
activitySpace6.addEntryCriteria(ALPHAS[2].getStateByIdentifier(3));
activitySpace6.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace6.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(1));
const activitySpace7 = new ActivitySpaceMetadata(solution, 'Implement the system', '');
activitySpace7.addEntryCriteria(ALPHAS[3].getStateByIdentifier(1));
activitySpace7.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(4));
const activitySpace8 = new ActivitySpaceMetadata(solution, 'Test the system', '');
activitySpace8.addEntryCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace8.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(6));
activitySpace8.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace8.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));
const activitySpace9 = new ActivitySpaceMetadata(solution, 'Deploy the system', '');
activitySpace9.addEntryCriteria(ALPHAS[3].getStateByIdentifier(4));
activitySpace9.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(5));
const activitySpace10 = new ActivitySpaceMetadata(solution, 'Operate the system', '');
activitySpace10.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace10.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));


const activitySpace11 = new ActivitySpaceMetadata(endeavor, 'Prepare do to work', '');
activitySpace11.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace11.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace11.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(2));
const activitySpace12 = new ActivitySpaceMetadata(endeavor, 'Coordinate activity', '');
activitySpace12.addEntryCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace12.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(2));

activitySpace12.addEntryCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace12.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(4));

const activitySpace13 = new ActivitySpaceMetadata(endeavor, 'Support the team', '');
activitySpace13.addEntryCriteria(ALPHAS[4].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace13.addEntryCriteria(ALPHAS[6].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(4));
const activitySpace14 = new ActivitySpaceMetadata(endeavor, 'Track progress', '');
activitySpace14.addEntryCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(4));
activitySpace14.addEntryCriteria(ALPHAS[5].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(5));
activitySpace14.addEntryCriteria(ALPHAS[6].getStateByIdentifier(4));
activitySpace14.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(5));
const activitySpace15 = new ActivitySpaceMetadata(endeavor, 'Stop the work', '');
activitySpace15.addEntryCriteria(ALPHAS[4].getStateByIdentifier(4));
activitySpace15.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(5));
activitySpace15.addEntryCriteria(ALPHAS[5].getStateByIdentifier(5));
activitySpace15.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(6));
activitySpace15.addEntryCriteria(ALPHAS[6].getStateByIdentifier(5));
activitySpace15.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(6));

export const ACTIVITY_SPACES: ActivitySpaceMetadata[] = [
    activitySpace1, activitySpace2, activitySpace3, activitySpace4, activitySpace5, activitySpace6,
     activitySpace7, activitySpace8, activitySpace9, activitySpace10, activitySpace11, activitySpace12,
      activitySpace13, activitySpace14, activitySpace15
];