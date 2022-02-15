/* eslint-disable brace-style */
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewTask, setNewTask, setIsError } from '../../store/actions';
import Field from '../Field';
import Select from '../Select';
import './style.scss';

const Form = () => {
  const dispatch = useDispatch();

  const newTaskValue = useSelector((state) => state.newTaskValue);

  const newCategoryValue = useSelector((state) => state.newCategoryValue);

  const isError = useSelector((state) => state.isError);

  const classNamesError = classNames('task__error', { 'is-hidden': !isError });

  const changeFieldValue = (value) => {
    dispatch(setNewTask(value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (newTaskValue !== '' && newCategoryValue != '0') {
      dispatch(addNewTask());
      dispatch(setIsError(false));
    } else {
      console.log('champ vide');
      dispatch(setIsError(true));
    }
  };

  return (
    <div className="task task--add">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="task__content">
          <div className="task__title">
            <p className="task__title-label" />
            <Field
              name="title"
              placeholder="titre de la tâche"
              type="text"
              value={newTaskValue}
              onChange={changeFieldValue}
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
          <div className={classNamesError}>Veuillez remplir tous les champs</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
