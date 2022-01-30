/* eslint-disable brace-style */
import './style.scss';
import propTypes from 'prop-types';

const Select = ({ categories, setCategoryLabel }) => {
  const classList = 'filters__choice';
  const handleChange = (evt) => {
    setCategoryLabel(Number(evt.target.value));
  };
  return (
    <select className={classList} onChange={handleChange}>
      <option value={0}>Choisir une catégorie</option>
      {
        categories.map(
          (val) => <option value={val.id} key={val.id}>{val.name}</option>,
        )
      }
    </select>
  );
};

Select.propTypes = {
  categories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }),
  ).isRequired,
  setCategoryLabel: propTypes.func.isRequired,
};

export default Select;
