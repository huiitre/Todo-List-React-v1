/* eslint-disable brace-style */
// == Import
import './style.scss';
import '../../assets/css/font-awesome.css';
import '../../assets/css/bulma.css';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header';
import Main from '../Main';
import Spinner from '../Spinner';
import { loadTasksFromApi } from '../../store/actions';

// == Composant
const App = () => {
  console.log('------ rendu ------');

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:1234/tasks')
      .then((response) => {
        // console.log('success', response);
        dispatch(loadTasksFromApi(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

// == Export
export default App;
