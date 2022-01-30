import { useState, useEffect } from 'react';
import axios from 'axios';

const apiGet = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      axios
        .get(url)
        .then(((response) => {
          setState(response.data);
        }))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    },
    [],
  );
  return [state, loading, setState, setLoading];
};

export default apiGet;
