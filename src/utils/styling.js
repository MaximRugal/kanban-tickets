import { REQUEST_STATUS } from '../constants/constants';

export const getStatusBarColor = (status) => {
  let color;
  switch (status) {
    case REQUEST_STATUS.DONE:
      color = 'green';
      break;
    case REQUEST_STATUS.EXPIRED:
      color = 'red';
      break;
    case REQUEST_STATUS.HAVE_REVIEW:
      color = 'blue';
      break;
    case REQUEST_STATUS.IN_PROGRESS:
      color = 'gray';
      break;
    default:
      color = 'gray';
  }
  return color;
};

export const checkTextOverflowing = (element) => {
  const isOverflowing = element.scrollHeight > element.clientHeight;
  return isOverflowing ? true : false;
};
