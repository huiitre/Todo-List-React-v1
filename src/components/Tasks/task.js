/* eslint-disable brace-style */
import propTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect } from 'react';

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
  //! méthode qui remplace le titre par l'input d'édition
  const handleEdit = (evt) => {
    //* on récupère le parent principal de l'event
    const task = evt.target.closest('.task');

    //* on lui applique la classe pour afficher l'input à la place du titre
    task.classList.add('task--edit');

    //* on récupère l'input depuis le parent et on lui applique le focus()
    task.querySelector('.task__title-field').focus();
  };

  //! méthode qui applique le champ contrôlé sur l'input
  const handleChange = (evt) => {
    //* on récupère la value de l'input
    //* puis on l'envoie avec l'id de l'input à la méthode setEditTask qui va remplir le hooks
    const { value } = evt.target;
    setEditTask({ value: value, id: id });
  };

  //! méthode qui finalise l'édition avec un blur (perte de focus de l'input)
  const handleBlur = (evt) => {
    const task = evt.target.closest('.task');
    task.classList.remove('task--edit');
    // setUpdateTask(id);
  };

  //! méthode qui finalise l'édition avec un kewDown (pression sur "Enter")
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      const task = evt.target.closest('.task');
      task.classList.remove('task--edit');
    }
  };

  /* if (status === 2) {
    varClass += ' task--archive';
  } else {
    varClass += ' task--todo';
  }
  if (completion === 100) {
    varClass += ' task--complete';
  } else {
    varClass += ' task--todo';
  } */

  const classList = classNames('task', { 'task--archive': status === 2 }, { 'task--complete': completion === 100 }, { 'task--todo': status !== 2 && completion !== 100 });

  return (
    <div className={classList} id={id}>
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
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
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
  editTask: propTypes.string.isRequired,
  status: propTypes.number.isRequired,
  // setUpdateTask: propTypes.func.isRequired,
};

export default Task;
