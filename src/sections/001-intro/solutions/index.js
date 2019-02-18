import path from 'path';
import { fileAbsolute, npmRoot } from 'paths.macro';
import { init as initInitialSetup } from './initialSetup';
import { init as initMeetingReact } from './meetingReact';

const relative = path.relative(npmRoot, path.join(fileAbsolute, '..'));

export const introSolutions = [
  {
    name: 'Initial Setup',
    fileSystemPath: path.join(relative, 'initialSetup'),
    init: initInitialSetup
  },
  {
    name: 'Meeting React',
    fileSystemPath: path.join(relative, 'meetingReact'),
    init: initMeetingReact
  }
];
