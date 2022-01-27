import propTypes from 'prop-types';
import Task from './task';

const Tasks = ({ tasks, setEditMode, editMode }) => (
  <div className="tasks">
    {/* LISTE DES TODOS ICI */},
    {
      tasks.map(
        (task) => <Task editMode={editMode} setEditMode={setEditMode} key={task.id} {...task} />,
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
  setEditMode: propTypes.func.isRequired,
  editMode: propTypes.bool.isRequired,
};

export default Tasks;
