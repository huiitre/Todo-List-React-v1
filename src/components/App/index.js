/* eslint-disable brace-style */
// == Import
import './style.scss';
import '../../assets/css/font-awesome.css';
import '../../assets/css/bulma.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header';
import Main from '../Main';
import Spinner from '../Spinner';

import apiGet from '../../hooks';

// == Composant
const App = () => {
  console.log('------ rendu ------');
  // const [tasks, setTasks] = useState([]);
  // const [categories, setCategories] = useState([]);
  // ? champ controlé pour chaque input titre des tâches
  const [editTask, setEditTask] = useState({});
  // ? champ controlé pour l'input d'ajout d'une tâche
  const [label, setLabel] = useState('');
  // ? champ controlé pour le select catégories d'ajout d'une tâche
  const [categoryLabel, setCategoryLabel] = useState(0);
  // ? gestion d'erreur si task add ou non
  const [errorAddTask, setErrorAddTask] = useState(false);
  // ? requêtes api GET pour /tasks et /categories
  const [tasks, loadingTasks] = apiGet('http://localhost:1234/tasks');
  const [categories, loadingCategories] = apiGet('http://localhost:1234/categories');

  const addTask = () => {
    if (categoryLabel !== 0 && label !== '') {
      setErrorAddTask(false);
      const newTask = {
        title: label,
        categoryId: categoryLabel,
      };
      axios
        .post('http://localhost:1234/tasks', newTask)
        .then(((response) => {
        // setState(response.data);
          console.log(response.data);
        }))
        .catch(() => console.log('error'));
    } else {
      setErrorAddTask(true);
    }
  };

  return (
    <div className="container">
      <Header categories={categories} setCategoryLabel={setCategoryLabel} />
      {(loadingTasks || loadingCategories) && <Spinner />}
      {(!loadingTasks || !loadingCategories) && (
        <>
          <Main
            addTask={addTask}
            label={label}
            setLabel={setLabel}
            editTask={editTask}
            setEditTask={setEditTask}
            categories={categories}
            tasks={tasks}
            setCategoryLabel={setCategoryLabel}
            errorAddTask={errorAddTask}
          />
        </>
      )}
    </div>
  );
};

// == Export
export default App;
