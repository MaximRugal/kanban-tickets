import './StatusBar.scss';
import { formatNumber } from '../../utils/math';
import { getStatusBarColor } from '../../utils/styling';
import gearIcon from '../../assets/gear.svg';

const StatusBar = ({ data }) => {
  const { number, technological, status } = data;
  const taskNumber = formatNumber(number);
  let [taskStatus] = status;
  const statusColor = getStatusBarColor(taskStatus);

  return (
    <>
      <div className='card-header'>
        <div className={`card-header__number--${statusColor}`}>
          <div className='card-header__number__wrapper'>
            <p className='card-header__number__data'>№ {taskNumber}</p>
          </div>
        </div>
        <div className='card-header__status'>
          <p className={`card-header__status__data`}>{status}</p>
          {technological && <img className='card-header__gearicon' src={gearIcon} alt='gearIcon' />}
        </div>
      </div>
    </>
  );
};

export default StatusBar;
