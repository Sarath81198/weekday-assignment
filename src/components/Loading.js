import React from 'react';
import { CircularProgress } from '@mui/material';

function Loading({ loading }) {
  return (
    <div>
      {loading ? (
        <div className='centering-container'>
          <CircularProgress color='secondary' />
        </div>
      ) : null}
    </div>
  );
}

export default Loading;
