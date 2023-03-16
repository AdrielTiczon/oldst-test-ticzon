import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import removeNullObject from '../helpers/removeNullObject';

const useFetch = (path, params, options) => {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const filterParams = removeNullObject(params);
  const parsedParams = new URLSearchParams(filterParams);
  const url = API_BASE_URL + path;
  const modifiedUrl = `${url}${params ? `?${parsedParams}` : ''}`;

  useEffect(() => {
    if (!url) return;
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(modifiedUrl, options)
          .catch((e) => {
            setError(e);
          });

        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, [modifiedUrl]);

  return { loading, data, error };
};

export default useFetch;
