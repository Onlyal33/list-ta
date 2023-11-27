import List from './components/List';
import ListMenu from './components/ListMenu';

function App() {
  return (
    <>
      <header className="md:sticky top-0 p-3 bg-indigo-100">
        <h1 className="text-2xl font-bold italic">List of generic items</h1>
      </header>
      <main className="flex flex-col md:flex-row bg-gray-100 p-3 gap-3">
        <ListMenu />
        <List />
      </main>
    </>
  );
}

export default App;
