import './Table.scss';
import { formatDateTime, calcDuration } from '../../utils/datetime';

const Table = ({ data, expanded }) => {
  const { created_at, completed_at, controlled_at, system, type, address } = data;

  const formattedCreatedAt = formatDateTime(created_at);
  const formattedCompletedAt = completed_at ? formatDateTime(completed_at) : null;
  const formattedControlleddAt = controlled_at ? formatDateTime(controlled_at) : null;

  return (
    <>
      <div className='card-table__wrapper'>
        <div className='card-table__row'>
          <p className='card-table__row__left'>Создана</p>
          <p className='card-table__row__right'>{formattedCreatedAt}</p>
        </div>
        <div className='card-table__row'>
          <p className='card-table__row__left'>{completed_at ? 'Выполнена' : 'Контроль'}</p>
          <p className='card-table__row__right'>
            {completed_at
              ? formattedCompletedAt + ` (${calcDuration(created_at, completed_at)})`
              : formattedControlleddAt}
          </p>
        </div>
        <div className='card-table__row'>
          <p className='card-table__row__left'>Система</p>
          <p className={`card-table__row__right${expanded ? '--expanded' : ''}`}>{`${system} | ${type}`}</p>
        </div>
        <div className='card-table__row'>
          <p className='card-table__row__left'>Обьект</p>
          <p className={`card-table__row__right${expanded ? '--expanded' : ''}`}>{`${address.name}, ${address.city},
           ${address.street}${address.placement ? ',' + address.placement : ''}`}</p>
        </div>
      </div>
    </>
  );
};
export default Table;
