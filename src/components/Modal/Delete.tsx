import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { useAppSelector } from '../../redux/hooks';
import { selectModalItem } from '../../redux/features/modal/selectors';

interface ModalOptions {
  onClose: () => void;
  onSubmit: () => void;
}

function Delete({ onClose, onSubmit }: ModalOptions) {
  const item = useAppSelector(selectModalItem);

  return (
    <div className='flex flex-col rounded-lg gap-4 p-4 bg-gray-100 min-h-[var(--modal-height)]'>
      <div className='flex justify-between items-center w-full pb-4 border-b border-b-gray-300'>
        <h3 className='text-xl font-bold'>Delete Item</h3>
        <ButtonSvg onClick={onClose} Svg={CloseIcon} />
      </div>
        <div className="flex flex-col gap-1">
          <span className="block font-medium text-lg text-gray-600">
            Title
          </span>
          <span>{item?.title}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="block font-medium text-lg text-gray-600">
            Description
          </span>
          <span>{item?.description}</span>
        </div>
        <div className="flex justify-between gap-4 md:justify-end mt-auto">
        <button
            className="rounded-lg border border-gray-600 px-6 py-2 text-gray-600 focus:outline-indigo-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded-lg px-6 py-2 text-white focus:outline-red-900 bg-red-700"
            onClick={onSubmit}
          >
            Delete Item
          </button>
        </div>
    </div>
  );
}

export default Delete;
