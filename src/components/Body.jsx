import React from 'react';

const Body = () => {
  const apikey = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`;
  console.log(apikey);

  return <div className='app-body'>{apikey}</div>;
};

export default Body;
