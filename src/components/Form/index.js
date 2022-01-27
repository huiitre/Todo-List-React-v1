import propTypes from 'prop-types';
import Select from '../Select';

const Form = ({ categories }) => (
  <div className="task task--add">
    <form method="POST">
      <div className="task__content">
        <div className="task__title">
          <p className="task__title-label" />
          <input
            className="task__title-field input"
            type="text"
            placeholder="Titre de la tâche"
            name="title"
          />
        </div>
        <div className="task__category">
          <div className="select is-small">
            <Select categories={categories} />
          </div>
        </div>
        <div className="task__buttons">
          <button
            type="button"
            className="task__button task__button--add button is-info"
          >
            <span className="icon is-small">
              <i className="fa fa-plus" />
            </span>
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </form>
  </div>
);

Form.propTypes = {
  categories: propTypes.array.isRequired,
};

export default Form;
