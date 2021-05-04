import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const changeMinutesToHoursAndMinutes = (runtime) => {
  let runtimeHour = runtime.get('hours');
  runtimeHour === 0 ? runtimeHour = '' : runtimeHour = `${runtimeHour}h`;
  let runtimeMinute = runtime.get('minutes');
  runtimeMinute === 0 ? runtimeMinute = '' : runtimeMinute = `${runtimeMinute}m`;
  return `${runtimeHour} ${runtimeMinute}`;
};

export const humanizeReleaseDate = (releaseDate) => {
  return dayjs(releaseDate).format('DD MMMM YYYY');
};

export const humanizeCommentDate = (commentDate) => {
  return dayjs(commentDate).format('YYYY/MM/DD HH:mm');
};
