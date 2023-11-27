import { useState } from 'react';
import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

interface ModalOptions {
  onClose: () => void;
  onSubmit: () => void;
}

function Add({ onClose, onSubmit }: ModalOptions) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='flex flex-col rounded-lg gap-4 p-4 bg-gray-100 min-h-[var(--modal-height)]'>
      <div className='flex justify-between items-center w-full pb-4 border-b border-b-gray-300'>
        <h3 className='text-xl font-bold'>New Item</h3>
        <ButtonSvg onClick={onClose} Svg={CloseIcon} />
      </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium text-gray-600">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-700"
          />
        </div>
        <div className="flex justify-between gap-4 md:justify-end mt-auto">
        <button
            className="rounded-lg border border-gray-600 px-6 py-2 text-gray-600 focus:outline-indigo-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded-lg bg-indigo-500 px-6 py-2 text-white focus:outline-indigo-700"
            onClick={onSubmit}
          >
            Add Item
          </button>
        </div>
    </div>
  );
}

export default Add;
