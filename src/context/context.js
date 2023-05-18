import {useContext} from 'react';
import {CustomContext} from './provide';

export const UseCustomContext = () => {
  const context = useContext(CustomContext);

  return context;
};
