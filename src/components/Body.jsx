import React from 'react';
import MD5 from 'crypto-js/md5';
import axios from 'axios';

const Body = () => {
  const apikey = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`;
  const privateAPI = `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}`;
  const ts = 1;
  const baseURL = `http://gateway.marvel.com/v1/public/comics?`;
  const hash = MD5(ts + privateAPI + apikey).toString();
  console.log(hash);
  const call = async () => {
    const response = await axios.get(
      `${baseURL}ts=${ts}&apikey=${apikey}&hash=${hash}`
    );
    const data = response.data.data;
    console.log(data.results[1].title);
  };
  call();
  return <div className='app-body'></div>;
};

export default Body;
