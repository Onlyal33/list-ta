const apiUrl = process.env.REACT_APP_API_URL;

const routes = {
  itemsPath: () => [apiUrl, 'items'].join('/'),
  itemPath: (id: number) => [apiUrl, 'items', id].join('/'),
};

export default routes;
