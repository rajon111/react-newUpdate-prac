import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const data = useLoaderData()

  return (
    <div>
      <h2>This Is {data.length}</h2>
    </div>
  );
};

export default Home;