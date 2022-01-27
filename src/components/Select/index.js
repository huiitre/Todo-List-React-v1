/* eslint-disable arrow-body-style */
import propTypes from 'prop-types';

const Select = ({ categories }) => {
  return (
    <select className="filters__choice">
      <option>Choisir une catégorie</option>
      {
        categories.map(
          (val) => <option key={val.id}>{val.name}</option>,
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
};

export default Select;
