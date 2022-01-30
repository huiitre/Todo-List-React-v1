import propTypes from 'prop-types';
import Tasks from '../Tasks';
import Form from '../Form';

const Main = ({
  tasks,
  categories,
  setEditTask,
  editTask,
  addTask,
  setLabel,
  label,
  setCategoryLabel,
  errorAddTask,
}) => (
  <main>
    <Form
      categories={categories}
      addTask={addTask}
      setLabel={setLabel}
      label={label}
      setCategoryLabel={setCategoryLabel}
      errorAddTask={errorAddTask}
    />
    <Tasks
      setEditTask={setEditTask}
      tasks={tasks}
      editTask={editTask}
    />
  </main>
);

Main.propTypes = {
  tasks: propTypes.array.isRequired,
  categories: propTypes.array.isRequired,
  setEditTask: propTypes.func.isRequired,
  editTask: propTypes.object.isRequired,
  setLabel: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  addTask: propTypes.func.isRequired,
  setCategoryLabel: propTypes.func.isRequired,
  errorAddTask: propTypes.bool.isRequired,
  // setUpdateTask: propTypes.func.isRequired,
};

export default Main;
