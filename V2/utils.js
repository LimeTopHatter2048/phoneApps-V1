//utils.js
export const timers = [];

export function wait(seconds, action) {
  timers.push({
    duration: seconds * 1000, // convert to ms
    elapsed: 0,
    action: action
  });
}
