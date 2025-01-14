import './MainPage.scss';
import { useState, useEffect } from 'react';

import Card from '../../components/card/Card';
import Preloader from '../../components/preloader/Preloader';

import { mockData } from '../../api/mockData';
import { REQUEST_STATUS } from '../../constants/constants';

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setData(mockData);
    };

    fetchData();
  }, []);

  const inProgressItems = data.filter((item) => item.status[0] === REQUEST_STATUS.IN_PROGRESS);
  const expiredItems = data.filter((item) => item.status[0] === REQUEST_STATUS.EXPIRED);
  const haveReviewItems = data.filter((item) => item.status[0] === REQUEST_STATUS.HAVE_REVIEW);
  const doneItems = data.filter((item) => item.status[0] === REQUEST_STATUS.DONE);

  return (
    <div className='kanban-wrapper'>
      {data.length > 0 ? (
        <>
          <div className='kanban-column'>
            <h3>{REQUEST_STATUS.IN_PROGRESS}</h3>
            {inProgressItems.length > 0 ? inProgressItems.map((item) => <Card key={item.id} data={item} />) : null}
          </div>
          <div className='kanban-column'>
            <h3>{REQUEST_STATUS.EXPIRED}</h3>
            {expiredItems.length > 0 ? expiredItems.map((item) => <Card key={item.id} data={item} />) : null}
          </div>
          <div className='kanban-column'>
            <h3>{REQUEST_STATUS.HAVE_REVIEW}</h3>
            {haveReviewItems.length > 0 ? haveReviewItems.map((item) => <Card key={item.id} data={item} />) : null}
          </div>
          <div className='kanban-column'>
            <h3>{REQUEST_STATUS.DONE}</h3>
            {doneItems.length > 0 ? doneItems.map((item) => <Card key={item.id} data={item} />) : null}
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default MainPage;
