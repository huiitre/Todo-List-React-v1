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
}) => (
  <main>
    <Form
      categories={categories}
      addTask={addTask}
      setLabel={setLabel}
      label={label}
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
  editTask: propTypes.array.isRequired,
  // setUpdateTask: propTypes.func.isRequired,
};

export default Main;
