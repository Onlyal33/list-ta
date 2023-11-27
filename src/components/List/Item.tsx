import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ItemInterface } from '../../types';

function Item({ id, title, description }: ItemInterface) {
  return (
    <div className="flex justify-between items-center border bg-white p-2 md:first:rounded-t-md hover:border hover:border-indigo-500">
      <div className="flex flex-col justify-start p-1 gap-2">
        <h4 className="text-xl font-bold">{title}</h4>
        <div>{description}</div>
      </div>
      <div className="flex flex-col gap-1">
        <ButtonSvg Svg={Edit} id={id}/>
        <ButtonSvg Svg={Delete} id={id}/>
      </div>
    </div>
  );
}

export default Item;
