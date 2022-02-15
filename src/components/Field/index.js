import './style.scss';
import PropTypes from 'prop-types';

const Field = ({ onChange, name, placeholder, type, value }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        className={`task__${name}-field input`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
