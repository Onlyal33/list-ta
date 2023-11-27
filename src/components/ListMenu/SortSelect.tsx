import { ReactComponent as SortIcon } from '../../assets/sort.svg';
import Select from '../shared/Select';

function SortSelect() {
  return (
    <Select
      label="Sort by"
      id="sortSelect"
      options={['Default order', 'Title: A to Z', 'Title: Z to A', 'Description: A to Z', 'Description: Z to A']}
      Icon={SortIcon}
    />
  );
}

export default SortSelect;
