import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filterValue}
      onChange={handleChange}
    />
  );
};

export default Filter;
