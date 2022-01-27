import propTypes from 'prop-types';
import Select from '../Select';

const Header = ({ categories }) => (
  <header className="header">
    <div className="logo">
      <a href=".">
        <h1 className="logo__title title is-3">TodoList</h1>
      </a>
    </div>
    <div className="filters">
      <div className="filters__task filters__task--completion buttons are-small has-addons">
        <button
          type="button"
          className="filters__choice button is-info is-selected"
        >
          Toutes
        </button>
        <button type="button" className="filters__choice button">
          Complètes
        </button>
        <button type="button" className="filters__choice button">
          Incomplètes
        </button>
      </div>
      <div className="filters__task filters__task--category select is-small">
        <Select categories={categories} />
      </div>
      <div className="filters__task filters__task--archived">
        <a className="filters__choice" href="#">
          Voir les archives
        </a>
        <a className="filters__all" href="#" style={{ display: 'none' }}>
          Voir les actifs
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  categories: propTypes.array.isRequired,
};

export default Header;
