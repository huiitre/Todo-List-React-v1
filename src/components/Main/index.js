import propTypes from 'prop-types';
import Tasks from '../Tasks';
import Form from '../Form';

const Main = ({
  tasks,
  categories,
  setEditTask,
  editTask,
}) => (
  <main>
    <Form categories={categories} />
    <Tasks setEditTask={setEditTask} tasks={tasks} editTask={editTask} />
  </main>
);

Main.propTypes = {
  tasks: propTypes.array.isRequired,
  categories: propTypes.array.isRequired,
  setEditTask: propTypes.func.isRequired,
  editTask: propTypes.bool.isRequired,
};

export default Main;
