import { useEffect, useState } from 'react';
import Item from './Item';
import routes from '../../common/routes';
import { ItemInterface } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectFilteredAndSortedItems } from '../../redux/features/items/selectors';
import { setInitialState } from '../../redux/features/items';
import { shallowEqual } from 'react-redux';

function List() {
  const [httpError, setHttpError] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectFilteredAndSortedItems, shallowEqual)

  useEffect(() => {
    fetch(routes.itemsPath())
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(res.status.toString());
      })
      .then((data: ItemInterface[]) =>
        dispatch(setInitialState({ items: data })),
      )
      .catch((err) => {
        setHttpError(`Error Code: ${err.message}`);
      });
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-3">
      {httpError && (
        <div className="text-sm text-red-500" aria-live="assertive">
          {httpError}
        </div>
      )}
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        ></Item>
      ))}
    </div>
  );
}

export default List;
