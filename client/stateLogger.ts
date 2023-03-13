/* eslint-disable no-unused-expressions */
// Tool for tracking and labeling animation/component state
const { log } = console;
export const framerLogger = (label: any) => log(`%c${label}: animation complete`, 'color: red');
export const stateLogger = (label: any, mounted: any) => {
  mounted
    ? log(`%c${label}: mounted`, 'color: green')
    : log(`%c${label}: unmounted`, 'color: orange');
};
