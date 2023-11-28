import { ChangeEvent } from 'react';
import { ReactComponent as SortIcon } from '../../assets/sort.svg';
import { selectSortOrder } from '../../redux/features/listControls/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Select from '../shared/Select';
import { setSortOrder } from '../../redux/features/listControls';
import { SortOrder } from '../../types';

const sortOrderOptions: SortOrder[] = [
  'Default order',
  'Title: A to Z',
  'Title: Z to A',
  'Description: A to Z',
  'Description: Z to A',
];

function SortSelect() {
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector(selectSortOrder);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(e.target.value as SortOrder));
  };

  return (
    <Select
      label="Sort by"
      id="sortSelect"
      options={sortOrderOptions}
      Icon={SortIcon}
      value={sortOrder}
      onChange={handleSelectChange}
    />
  );
}

export default SortSelect;
