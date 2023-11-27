import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import ButtonSvg from '../shared/ButtonSvg';
import FilterInput from './FilterInput';
import SortSelect from './SortSelect';

function ListMenu() {
  return (
    <div className="sticky top-0">
      <div className="md:scroll-offset md:min-w-[260px]">
        <div className="flex items-center gap-3 md:rounded-t-md border bg-white p-3 md:h-full md:flex-col md:items-start">
          <ButtonSvg Svg={PlusIcon}></ButtonSvg>
          <FilterInput></FilterInput>
          <SortSelect></SortSelect>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;
