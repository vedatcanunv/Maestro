import React, {useState, createContext} from 'react';
import {API_URL} from '@env';

export const CustomContext = createContext({});

export const CustomProvider = ({children}) => {
  const [provideData, setProvideData] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async page => {
    //API'dan veri çekilen bölüm
    try {
      const response = await fetch(API_URL + '?page=' + page + '&count=10');
      const data = await response.json();
      const mappedData = data.result.map(item => item);
      setProvideData(prevData => [...prevData, ...mappedData]);
      setInitializing(false);
    } catch (error) {
      setError(error.message);
      setInitializing(false);
    } finally {
      setRefreshing(false);
    }
  };

  const getPostById = postId => {
    return provideData.find(item => item.postId === postId);
  };

  return (
    <CustomContext.Provider
      value={{
        initializing,
        provideData,
        error,
        getPostById,
        fetchData,
        refreshing,
        setRefreshing,
        setProvideData,
      }}>
      {children}
    </CustomContext.Provider>
  );
};
