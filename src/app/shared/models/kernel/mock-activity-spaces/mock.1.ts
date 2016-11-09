


const activitySpace6 = new ActivitySpaceMetadata("2-2",solution, 'Shape the system', '');
activitySpace6.addEntryCriteria(ALPHAS[2].getStateByIdentifier(3));
activitySpace6.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace6.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(1));
const activitySpace7 = new ActivitySpaceMetadata("2-3",solution, 'Implement the system', '');
activitySpace7.addEntryCriteria(ALPHAS[3].getStateByIdentifier(1));
activitySpace7.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(4));
const activitySpace8 = new ActivitySpaceMetadata("2-4",solution, 'Test the system', '');
activitySpace8.addEntryCriteria(ALPHAS[2].getStateByIdentifier(4));
activitySpace8.addCompletionCriteria(ALPHAS[2].getStateByIdentifier(6));
activitySpace8.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace8.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));
const activitySpace9 = new ActivitySpaceMetadata("2-5",solution, 'Deploy the system', '');
activitySpace9.addEntryCriteria(ALPHAS[3].getStateByIdentifier(4));
activitySpace9.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(5));
const activitySpace10 = new ActivitySpaceMetadata("2-6",solution, 'Operate the system', '');
activitySpace10.addEntryCriteria(ALPHAS[3].getStateByIdentifier(5));
activitySpace10.addCompletionCriteria(ALPHAS[3].getStateByIdentifier(6));


const activitySpace11 = new ActivitySpaceMetadata("3-1",endeavor, 'Prepare do to work', '');
activitySpace11.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace11.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace11.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(2));
const activitySpace12 = new ActivitySpaceMetadata("3-2",endeavor, 'Coordinate activity', '');
activitySpace12.addEntryCriteria(ALPHAS[4].getStateByIdentifier(1));
activitySpace12.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(2));

activitySpace12.addEntryCriteria(ALPHAS[5].getStateByIdentifier(2));
activitySpace12.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(4));

const activitySpace13 = new ActivitySpaceMetadata("3-3",endeavor, 'Support the team', '');
activitySpace13.addEntryCriteria(ALPHAS[4].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace13.addEntryCriteria(ALPHAS[6].getStateByIdentifier(2));
activitySpace13.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(4));
const activitySpace14 = new ActivitySpaceMetadata("3-4",endeavor, 'Track progress', '');
activitySpace14.addEntryCriteria(ALPHAS[4].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[4].getStateByIdentifier(4));
activitySpace14.addEntryCriteria(ALPHAS[5].getStateByIdentifier(3));
activitySpace14.addCompletionCriteria(ALPHAS[5].getStateByIdentifier(5));
activitySpace14.addEntryCriteria(ALPHAS[6].getStateByIdentifier(4));
activitySpace14.addCompletionCriteria(ALPHAS[6].getStateByIdentifier(5));
const activitySpace15 = new ActivitySpaceMetadata("3-5",endeavor, 'Stop the work', '');
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