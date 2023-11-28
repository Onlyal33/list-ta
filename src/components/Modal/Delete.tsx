import ButtonSvg from '../shared/ButtonSvg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectModalItem } from '../../redux/features/modal/selectors';
import routes from '../../common/routes';
import { deleteItem } from '../../redux/features/items';
import { useEffect, useRef, useState } from 'react';
import { ModalProps } from '../../types';

function Delete({ onClose }: { onClose: ModalProps['onClose'] }) {
  const [httpError, setHttpError] = useState<string | undefined>();
  const item = useAppSelector(selectModalItem);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLButtonElement>(null);

  const onSubmit = () => {
    setHttpError(undefined);
    fetch(routes.itemPath(item?.id ?? 0), {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(res.status.toString());
      })
      .then(() => {
        dispatch(deleteItem({ id: item?.id ?? 0 }));
        onClose();
      })
      .catch((err) => {
        if (err.message === '404') {
          setHttpError(
            'Error Code: 404 Not Found. Sorry, the item you are trying to delete could not be found on the server.',
          );
        } else {
          setHttpError(`Error Code: ${err.message}`);
        }
      });
  };

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <div
      role="dialog"
      aria-labelledby="modalTitle"
      className="flex min-h-[var(--modal-height)] flex-col gap-4 rounded-lg bg-gray-100 p-4"
    >
      <div className="flex w-full items-center justify-between border-b border-b-gray-300 pb-4">
        <h2 id="modalTitle" className="text-xl font-bold">
          Delete Item
        </h2>
        <ButtonSvg onClick={onClose} Svg={CloseIcon} label="Close" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="block text-lg font-medium text-gray-600">Title</p>
        <p>{item?.title}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="block text-lg font-medium text-gray-600">
          Description
        </p>
        <p>{item?.description}</p>
      </div>
      {httpError && (
        <div className="text-xs text-red-500" aria-live="assertive">
          {httpError}
        </div>
      )}
      <div className="mt-auto flex justify-between gap-4 md:justify-end">
        <button
          className="rounded-lg border border-gray-600 px-6 py-2 text-gray-600 focus:outline-indigo-700"
          onClick={onClose}
          ref={ref}
        >
          Cancel
        </button>
        <button
          className="rounded-lg bg-red-600 px-6 py-2 text-white focus:bg-red-800 focus:outline-red-600"
          onClick={onSubmit}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default Delete;
