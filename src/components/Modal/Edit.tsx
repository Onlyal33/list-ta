import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import routes from '../../common/routes';
import { editItem } from '../../redux/features/items';
import { FormikActions, NewItemToServer } from '../../types';
import ItemFormModal from './ItemFormModal';
import { selectModal } from '../../redux/features/modal/selectors';
import { useState } from 'react';

interface ModalOptions {
  onClose: () => void;
  onSubmit: () => void;
}

function Edit({ onClose }: ModalOptions) {
  const { item } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const [httpError, setHttpError] = useState<string | undefined>()

  const onSubmit = (values: NewItemToServer, actions: FormikActions) => {
    setHttpError(undefined);
    fetch(routes.itemPath(item?.id ?? 0), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: item?.id,
        title: values.title,
        description: values.description,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(res.status.toString());
      })
      .then((data) => {
        dispatch(
          editItem({
            id: data.id,
            description: data.description,
            title: data.title,
          }),
        );
        onClose();
      })
      .catch((err) => {
        actions.setSubmitting(false);
        if (err.message === '404') {
          setHttpError('Error Code: 404 Not Found. Sorry, the item you are trying to edit could not be found on the server.')
        } else {
          setHttpError(`Error Code: ${err.message}`)
        }
      });
  };

  return (
    <ItemFormModal
      onClose={onClose}
      onSubmit={onSubmit}
      headerText="Edit Item"
      buttonText="Confirm Changes"
      initialValues={{
        title: item?.title ?? '',
        description: item?.description ?? '',
      }}
      httpError={httpError}
    />
  );
}

export default Edit;
