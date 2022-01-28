// == Import
import './style.scss';
import '../../assets/css/font-awesome.css';
import '../../assets/css/bulma.css';

import { useState } from 'react';

import Header from '../Header';
import Main from '../Main';
import Spinner from '../Spinner';

import { apiGet, postApi } from '../../hooks';

// == Composant
const App = () => {
  // const [tasks, setTasks] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [editTask, setEditTask] = useState([]);
  const [label, setLabel] = useState([]);
  const [tasks, loadingTasks] = apiGet('http://localhost:1234/tasks');
  const [categories, loadingCategories] = apiGet('http://localhost:1234/categories');

  return (
    <div className="container">
      <Header categories={categories} />
      {(loadingTasks || loadingCategories) && <Spinner />}
      {(!loadingTasks || !loadingCategories) && (
        <>
          <Main
            label={label}
            setLabel={setLabel}
            editTask={editTask}
            setEditTask={setEditTask}
            categories={categories}
            tasks={tasks}
          />
        </>
      )}
    </div>
  );
};

// == Export
export default App;
