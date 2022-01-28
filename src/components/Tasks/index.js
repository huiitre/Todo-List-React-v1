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
        tasks.map(
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
  editTask: propTypes.arrayOf(
    propTypes.shape({

    }),
  ).isRequired,
  // setUpdateTask: propTypes.func.isRequired,
};

export default Tasks;
