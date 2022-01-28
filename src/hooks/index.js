import { useState, useEffect } from 'react';
import axios from 'axios';

export const apiGet = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      axios
        .get(url)
        .then(((response) => setState(response.data)))
        .catch(() => console.log('error'))
        .finally(() => setLoading(false));
    },
    [],
  );
  return [state, loading];
};

export const apiPost = (url, object) => {
  // const [state, setState] = useState({});
  useEffect(
    () => {
      axios
        .post(url, object)
        .then(((response) => {
          // setState(response.data);
          console.log(response.data);
        }))
        .catch(() => console.log('error'));
    },
    [],
  );
};
