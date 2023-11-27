import { useEffect } from 'react';
import Item from './Item';
import routes from '../../common/routes';
import { ItemInterface } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectItems } from '../../redux/features/items/selectors';
import { setInitialState } from '../../redux/features/items';

function List() {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(routes.itemsPath())
      .then((res) => res.json())
      .then((data: ItemInterface[]) => dispatch(setInitialState({items: data})))
      .catch((err) => console.log('implement error handling here', err));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-3">
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
