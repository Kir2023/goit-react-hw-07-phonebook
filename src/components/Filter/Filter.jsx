import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter.reducer';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = searchData => {
    const value = searchData.target.value;
    dispatch(setFilter(value.toLowerCase().trim()));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
