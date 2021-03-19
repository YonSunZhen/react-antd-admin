import React, { useState, useEffect } from 'react';
import { getTestData } from '../services';

const Test2 = () => {

  useEffect(() => {
    const fetchData = async() => {
      const res = await getTestData();
      console.log('debug2');
      console.log(res);
    }
    // TODO: 疑问 fetchData(...)不能阻塞?
    fetchData();
  }, [])

  return (
    <div>
      Test2
    </div>
  );
}

export default Test2;
