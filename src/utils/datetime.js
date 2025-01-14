import { DateTime } from 'luxon';

export const formatDateTime = (dateString) => {
  const date = DateTime.fromISO(dateString, { zone: 'utc' });
  return date.toFormat('dd.MM.yyyy HH:mm');
};
export const formatOnlyDate = (dateString) => {
  const date = DateTime.fromISO(dateString, { zone: 'utc' });
  return date.toFormat('dd.MM.yyyy');
};
export const formatOnlyTime = (dateString) => {
  const date = DateTime.fromISO(dateString, { zone: 'utc' });
  return date.toFormat('HH:mm');
};

export const calcDuration = (startTimestamp, endTimestamp) => {
  const start = DateTime.fromISO(startTimestamp, { zone: 'utc' });
  const end = DateTime.fromISO(endTimestamp, { zone: 'utc' });
  const duration = end.diff(start, ['days', 'hours', 'minutes', 'seconds']).toObject();

  const getDaysString = (days) => {
    if (days % 10 === 1 && days % 100 !== 11) {
      return `${days} день`;
    } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
      return `${days} дня`;
    } else {
      return `${days} дней`;
    }
  };

  const getHoursString = (hours) => {
    if (hours % 10 === 1 && hours % 100 !== 11) {
      return `${hours} час`;
    } else if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) {
      return `${hours} часа`;
    } else {
      return `${hours} часов`;
    }
  };

  const getMinutesString = (minutes) => {
    if (minutes % 10 === 1 && minutes % 100 !== 11) {
      return `${minutes} минута`;
    } else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100)) {
      return `${minutes} минуты`;
    } else {
      return `${minutes} минут`;
    }
  };

  const getSecondsString = (seconds) => {
    if (seconds % 10 === 1 && seconds % 100 !== 11) {
      return `${seconds} секунда`;
    } else if ([2, 3, 4].includes(seconds % 10) && ![12, 13, 14].includes(seconds % 100)) {
      return `${seconds} секунды`;
    } else {
      return `${seconds} секунд`;
    }
  };

  if (duration.days >= 1) {
    const days = Math.floor(duration.days);
    return getDaysString(days);
  } else if (duration.hours >= 1) {
    const hours = Math.floor(duration.hours);
    return getHoursString(hours);
  } else if (duration.minutes >= 1) {
    const minutes = Math.floor(duration.minutes);
    return getMinutesString(minutes);
  } else {
    const seconds = Math.floor(duration.seconds);
    return getSecondsString(seconds);
  }
};
