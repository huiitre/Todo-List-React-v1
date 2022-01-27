/* eslint-disable brace-style */
import propTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line arrow-body-style
const Task = ({
  id,
  title,
  completion,
  category,
  status,
  setEditTask,
  editTask,
}) => {
  // console.log(category);
  let varClass = 'task';

  const handleEdit = (evt) => {
    console.log(evt.target);
    const task = evt.target.closest('.task');
    task.classList.add('task--edit');
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setEditTask(value);
  };

  if (status === 2) {
    varClass += ' task--archive';
  } else {
    varClass += ' task--todo';
  }
  if (completion === 100) {
    varClass += ' task--complete';
  } else {
    varClass += ' task--todo';
  }

  return (
    <div className={varClass} id={id}>
      <div className="task__content">
        <div className="task__title">
          <p
            onClick={handleEdit}
            className="task__title-label"
          >
            {title}
          </p>
          <input
            className="task__title-field input"
            type="text"
            placeholder="Titre de la tâche"
            name="title"
            value={editTask}
            onChange={handleChange}
          />
        </div>
        <div className="task__category">
          <p>{category.name}</p>
          <input
            className="task__category-field input"
            type="text"
            placeholder="Nom de la catégorie"
            name="category"
          />
        </div>
        <div className="task__buttons">
          <button
            type="button"
            className="task__button task__button--incomplete button is-success is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-step-backward" />
            </span>
          </button>
          <button
            type="button"
            className="task__button task__button--desarchive button is-success is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-undo" />
            </span>
          </button>
          <button
            type="button"
            className="task__button task__button--validate button is-success is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-check-square-o" />
            </span>
          </button>
          <button
            type="button"
            className="task__button task__button--modify button is-warning is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-pencil-square-o" />
            </span>
          </button>
          <button
            type="button"
            className="task__button task__button--archive button is-danger is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-archive" />
            </span>
          </button>
          <button
            type="button"
            className="task__button task__button--delete button is-danger is-small"
          >
            <span className="icon is-small">
              <i className="fa fa-trash" />
            </span>
          </button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar__level" style={{ width: `${completion}%` }} />
      </div>
    </div>
  );
};

Task.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  completion: propTypes.number.isRequired,
  category: propTypes.object.isRequired,
  setEditTask: propTypes.func.isRequired,
  editTask: propTypes.bool.isRequired,
  status: propTypes.number.isRequired,
};

export default Task;
