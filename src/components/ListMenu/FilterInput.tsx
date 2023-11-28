import { ChangeEvent, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import Input from '../shared/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectFilter } from '../../redux/features/listControls/selectors';
import { setFilter } from '../../redux/features/listControls';
import useDebounce from '../../hooks/useDebounce';

function FilterInput() {
  const dispatch = useAppDispatch();
  const storeValue = useAppSelector(selectFilter);
  const [visualValue, setVisualValue] = useState(storeValue);

  const dispatchPriceFilter = () =>
    dispatch(setFilter(visualValue));
  const debouncedDispatch = useDebounce(dispatchPriceFilter);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(debouncedDispatch);
    setVisualValue(e.target.value);
  };

  return (
    <Input
      label="Filter Input"
      placeholder="Filter..."
      id="filterInput"
      Icon={SearchIcon}
      onChange={onChange}
    ></Input>
  );
}

export default FilterInput;
