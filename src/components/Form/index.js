import { setTimeout } from 'core-js';
import propTypes from 'prop-types';
import Select from '../Select';
import './style.scss';

const Form = ({
  categories,
  addTask,
  setLabel,
  label,
  setCategoryLabel,
  errorAddTask,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask();
  };
  const handleChange = (evt) => {
    setLabel(evt.target.value);
  };
  return (
    <div className="task task--add">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="task__content">
          <div className="task__title">
            <p className="task__title-label" />
            <input
              className="task__title-field input"
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              value={label}
              onChange={handleChange}
            />
          </div>
          <div className="task__category">
            <div className="select is-small">
              <Select
                setCategoryLabel={setCategoryLabel}
                categories={categories}
              />
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
          {
            errorAddTask && (
            <div className="task__error">
              La tâche n'a pas été envoyée !
            </div>
            )
          }
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  categories: propTypes.array.isRequired,
  setLabel: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  addTask: propTypes.func.isRequired,
  setCategoryLabel: propTypes.func.isRequired,
  errorAddTask: propTypes.bool.isRequired,
};

export default Form;
