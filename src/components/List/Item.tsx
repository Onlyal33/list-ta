import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ItemInterface } from '../../types';
import useModal from '../../hooks/useModal';

function Item({ id, title, description }: ItemInterface) {
  const { showModal } = useModal();

  return (
    <div className="flex justify-between items-center border bg-white p-2 md:first:rounded-t-md hover:border hover:border-indigo-500">
      <div className="flex flex-col justify-start p-1 gap-2">
        <h4 className="text-xl font-bold">{title}</h4>
        <div>{description}</div>
      </div>
      <div className="flex flex-col gap-3">
        <ButtonSvg Svg={Edit} id={id} onClick={showModal}/>
        <ButtonSvg Svg={Delete} id={id} onClick={showModal}/>
      </div>
    </div>
  );
}

export default Item;
