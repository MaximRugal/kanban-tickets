import './Card.scss';
import { useState } from 'react';

import StatusBar from '../bar/StatusBar';
import Table from '../table/Table';
import Button from '../button/Button';
import Textbox from '../textbox/Textbox';

const Card = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <div className={`card-wrapper${isExpanded ? '--expanded' : ''}`}>
        <StatusBar number={data.number} type={data.type} status={data.status} />
        <div className='card-wrapper__padding'>
          <Table data={data} expanded={isExpanded} />
          <p className='card-table__divider' />
          <Textbox data={data} action={setIsOverflowing} isExpanded={isExpanded} isOverflowing={isOverflowing} />
          {isOverflowing && <Button action={toggleExpand} expanded={isExpanded} />}
        </div>
      </div>
    </>
  );
};

export default Card;
