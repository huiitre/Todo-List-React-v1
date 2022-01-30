import propTypes from 'prop-types';
import Task from './task';

const Tasks = ({
  tasks,
  setEditTask,
  editTask,
}) => (
  <div className="tasks">
    {/* LISTE DES TODOS ICI */},
    {
      //* slice(0).reserve() remplace le prepend()
      tasks.slice(0).reverse().map(
        (task) => <Task editTask={editTask.id === task.id ? editTask.value : ''} setEditTask={setEditTask} key={task.id} {...task} />,
      )
    }
  </div>
);

Tasks.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
  setEditTask: propTypes.func.isRequired,
  editTask: propTypes.objectOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
  // setUpdateTask: propTypes.func.isRequired,
};

export default Tasks;
