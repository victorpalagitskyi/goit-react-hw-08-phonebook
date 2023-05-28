import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import css from '../pages/style.module.css'

export function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className={css.style} >
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={handleFilterChange} />
      </div>
  );
}
