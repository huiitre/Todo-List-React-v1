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
import { loadTasksFromApi, loadTasks } from '../../store/actions';

// == Composant
const App = () => {
  console.log('------ rendu ------');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
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
