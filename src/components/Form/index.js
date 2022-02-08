import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, setNewTask } from '../../store/actions';
import Select from '../Select';
import './style.scss';

const Form = () => {
  const dispatch = useDispatch();
  const newTaskValue = useSelector((state) => state.newTaskValue);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    dispatch(addNewTask());
  };
  return (
    <div className="task task--add">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="task__content">
          <div className="task__title">
            <p className="task__title-label" />
            <input
              onChange={(evt) => dispatch(setNewTask(evt.target.value))}
              className="task__title-field input"
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              value={newTaskValue}
            />
          </div>
          <div className="task__category">
            <div className="select is-small">
              <Select />
            </div>
          </div>
          <div className="task__buttons">
            <button
              type="submit"
              className="task__button task__button--add button is-info"
            >
              <span className="icon is-small">
                <i className="fa fa-plus" />
              </span>
              <span>Ajouter</span>
            </button>
          </div>
          <div className="task__error">La tâche n'a pas été envoyée !</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
