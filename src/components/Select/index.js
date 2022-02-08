/* eslint-disable brace-style */
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setNewCategory } from '../../store/actions';

const Select = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <select className="filters__choice" onChange={(evt) => dispatch(setNewCategory(evt.target.value))}>
      <option value={0}>Choisir une catégorie</option>
      {
        categories.map(
          (item) => <option value={item.id} key={item.id}>{item.name}</option>,
        )
      }
    </select>
  );
};

export default Select;
