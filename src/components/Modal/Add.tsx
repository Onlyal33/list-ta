import { useAppDispatch } from '../../redux/hooks';
import routes from '../../common/routes';
import { addItem } from '../../redux/features/items';
import { ModalProps, NewItemToServer } from '../../types';
import ItemFormModal from './ItemFormModal';
import { useState } from 'react';

function Add({ onClose }: { onClose: ModalProps['onClose'] }) {
  const [httpError, setHttpError] = useState<string | undefined>()

  const dispatch = useAppDispatch();
  const onSubmit = (values: NewItemToServer) => {
    setHttpError(undefined);
    fetch(routes.itemsPath(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: values.title, description: values.description }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(res.status.toString());
      })
      .then((data) => {
        dispatch(
          addItem({
            id: data.id,
            description: data.description,
            title: data.title,
          }),
        );
        onClose();
      })
      .catch((err) => {
        setHttpError(`Error Code: ${err.message}`)
      });
  };

  return (
    <ItemFormModal
      onClose={onClose}
      onSubmit={onSubmit}
      headerText="New Item"
      buttonText="Add Item"
      initialValues={{title: '', description: ''}}
      httpError={httpError}
      />
  );
}

export default Add;
