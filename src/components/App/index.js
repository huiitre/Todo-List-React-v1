// == Import
import './style.scss';
import './css/font-awesome.css';
import './css/bulma.css';

import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Main from '../Main';

// == Composant
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await axios.get('http://localhost:1234/tasks');
        const categoriesData = await axios.get('http://localhost:1234/categories');

        setTasks(tasksData.data);
        setCategories(categoriesData.data);
      }
      catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const changeEditMode = (id) => {
    console.log(`change edit mode ${id}`);
    console.log(tasks);
  };
  return (
    <div className="container">
      <Header categories={categories} />
      <Main
        editMode={editMode}
        setEditMode={setEditMode}
        categories={categories}
        tasks={tasks}
      />
    </div>
  );
};

// == Export
export default App;
