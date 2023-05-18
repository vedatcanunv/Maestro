import React from 'react';
import {CustomProvider} from './context/provide';
import Navigation from './Navigation';

const Router = () => {
  return (
    <CustomProvider>
      <Navigation />
    </CustomProvider>
  );
};

export default Router;
