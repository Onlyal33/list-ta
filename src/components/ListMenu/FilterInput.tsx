import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import Input from '../shared/Input';

function FilterInput() {
  return (
    <Input
      label="Filter Input"
      placeholder="Filter..."
      id="filterInput"
      Icon={SearchIcon}
    ></Input>
  );
}

export default FilterInput;
