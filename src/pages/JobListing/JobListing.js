import React, { useEffect, useState } from 'react';
import { store } from '../../store';
import { addJobs } from './slice/JobListing.slice';
import Loading from '../../components/Loading';

function JobListing() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    fetch(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        store.dispatch(addJobs(res.jdList));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Loading loading={loading}/>
    </div>
  );
}

export default JobListing;
