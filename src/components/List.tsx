import { useEffect, useState } from 'react';
import Item from './Item';
import routes from '../common/routes';
import { ItemInterface } from '../types';

function List() {
  const [items, setItems] = useState<ItemInterface[]>([]);

  useEffect(() => {
    fetch(routes.itemsPath())
      .then((res) => res.json())
      .then((data: ItemInterface[]) => setItems(data))
      .catch((err) => console.log('implement error handling here', err));
  }, []);

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
