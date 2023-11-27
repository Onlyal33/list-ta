import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { ReactComponent as SortIcon } from '../../assets/sort.svg';
import ButtonSvg from '../shared/ButtonSvg';
import FilterInput from './FilterInput';

function ListMenu() {
  return (
    <div className="sticky top-0">
      <div className="md:sticky md:top-[68px] md:min-w-[260px] md:scroll-offset">
        <div className="flex items-center gap-3 rounded-t-md border bg-white p-3 md:flex-col md:items-start md:h-full">
          <ButtonSvg Svg={PlusIcon}></ButtonSvg>
          <FilterInput></FilterInput>
          <ButtonSvg Svg={SortIcon}></ButtonSvg>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;
