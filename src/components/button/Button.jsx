import './Button.scss';
import icon from '../../assets/arrow.svg';

const Button = ({ action, expanded }) => {
  return (
    <>
      <button className={`card-table__card-button${expanded ? '--expanded' : ''}`} onClick={action}>
        <div className='card-table__card-button__wrapper'>
          <img src={icon} className={`card-table__card-data__button__icon${expanded ? '--expanded' : ''}`} />
          <p className='card-table__card-data__button__text'>{expanded ? 'Свернуть' : 'Читать далее'}</p>
        </div>
      </button>
    </>
  );
};

export default Button;
