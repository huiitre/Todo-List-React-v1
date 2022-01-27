import propTypes from 'prop-types';
import Task from './task';

const Tasks = ({ tasks, setEditTask, editTask }) => (
  <div className="tasks">
    {/* LISTE DES TODOS ICI */},
    {
      tasks.map(
        (task) => <Task editTask={editTask} setEditTask={setEditTask} key={task.id} {...task} />,
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
  editTask: propTypes.bool.isRequired,
};

export default Tasks;
