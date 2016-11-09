import { ActivitySpaceMetadata } from '../kernel';
import { AREAS,ALPHAS } from '../mock-kernel';


const activitySpace1 = new ActivitySpaceMetadata(AREAS[0], 'Explore posibilities', '');
activitySpace1.addObjective(
    'Enable the right stakeholders to be involved', 'Understand the stakeholders’ needs',
    'Identify opportunities for the use of the software system',
    'Understand why the software system is needed',
    'Establish the value offered by the software system');

activitySpace1.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(1));
activitySpace1.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(3));

const activitySpace2 = new ActivitySpaceMetadata(AREAS[0], 'Understand Stakeholder Needs', '');
activitySpace2.addObjective(
    'Ensure the right AREAS[1] is created', 'Collect feedback and generate input',
    'Ensure that the AREAS[1] produced provides benefit to the stakeholders',
    'Align expectations');
activitySpace2.addInput(AREAS[0].getAlpha(1));
activitySpace2.addInput(AREAS[0].getAlpha(2));
activitySpace2.addInput(AREAS[1].getAlpha(3));
activitySpace2.addInput(AREAS[1].getAlpha(4));

activitySpace2.addEntryCriteria(ALPHAS[0].getStateByIdentifier(1));
activitySpace2.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(4));

activitySpace2.addEntryCriteria(ALPHAS[1].getStateByIdentifier(3));
activitySpace2.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(4));

const activitySpace3 = new ActivitySpaceMetadata(AREAS[0], 'Ensure Stakeholder Satisfaction', '');
activitySpace3.addEntryCriteria(ALPHAS[0].getStateByIdentifier(4));
activitySpace3.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(5));
activitySpace3.addEntryCriteria(ALPHAS[1].getStateByIdentifier(4));
activitySpace3.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(5));

const activitySpace4 = new ActivitySpaceMetadata(AREAS[0], 'Use the system', '');
activitySpace4.addEntryCriteria(ALPHAS[0].getStateByIdentifier(5));
activitySpace4.addCompletionCriteria(ALPHAS[0].getStateByIdentifier(6));
activitySpace4.addEntryCriteria(ALPHAS[1].getStateByIdentifier(5));
activitySpace4.addCompletionCriteria(ALPHAS[1].getStateByIdentifier(6));

const activitySpace5 = new ActivitySpaceMetadata(AREAS[1], 'Understand the requeriments', '');
activitySpace5.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(3));
const activitySpace6 = new ActivitySpaceMetadata(AREAS[1], 'Shape the system', '');
activitySpace6.addEntryCriteria(ALPHAS[2].getStateByIdentifier(3));
activitySpace6.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace6.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(1));
const activitySpace7 = new ActivitySpaceMetadata(AREAS[1], 'Implement the system', '');
activitySpace7.addEntryCriteria(ALPHAS[3].getStateByIdentifier(1));
activitySpace7.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(4));
const activitySpace8 = new ActivitySpaceMetadata(AREAS[1], 'Test the system', '');
activitySpace8.addEntryCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace8.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(6));
activitySpace8.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace8.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));
const activitySpace9 = new ActivitySpaceMetadata(AREAS[1], 'Deploy the system', '');
activitySpace9.addEntryCriteria(ALPHAS[3].getStateByIdentifier(4));
activitySpace9.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(5));
const activitySpace10 = new ActivitySpaceMetadata(AREAS[1], 'Operate the system', '');
activitySpace10.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace10.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));


const activitySpace11 = new ActivitySpaceMetadata(AREAS[2], 'Prepare do to work', '');
activitySpace11.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace11.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace11.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(2));
const activitySpace12 = new ActivitySpaceMetadata(AREAS[2], 'Coordinate activity', '');
activitySpace12.addEntryCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace12.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(2));

activitySpace12.addEntryCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace12.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(4));

const activitySpace13 = new ActivitySpaceMetadata(AREAS[2], 'Support the team', '');
activitySpace13.addEntryCriteria(ALPHAS[4].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace13.addEntryCriteria(ALPHAS[6].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(4));
const activitySpace14 = new ActivitySpaceMetadata(AREAS[2], 'Track progress', '');
activitySpace14.addEntryCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(4));
activitySpace14.addEntryCriteria(ALPHAS[5].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(5));
activitySpace14.addEntryCriteria(ALPHAS[6].getStateByIdentifier(4));
activitySpace14.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(5));
const activitySpace15 = new ActivitySpaceMetadata(AREAS[2], 'Stop the work', '');
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