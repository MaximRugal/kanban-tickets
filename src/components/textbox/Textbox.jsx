import './Textbox.scss';
import { useRef, useEffect } from 'react';

import { checkTextOverflowing } from '../../utils/styling';

const Textbox = ({ data, action, isExpanded, isOverflowing }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        action(checkTextOverflowing(textRef.current));
      }
    };
    checkOverflow();
  }, [data]);

  return (
    <>
      <div className={`card-table__card-data`}>
        <p
          ref={textRef}
          className={`card-table__card-data__data${isOverflowing ? '--overflowed' : ''}${
            isExpanded ? '--expanded' : ''
          }`}
        >
          {data.request_text}
        </p>
      </div>
    </>
  );
};

export default Textbox;
