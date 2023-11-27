import List from './components/List/List';
import ListMenu from './components/ListMenu/ListMenu';
import ModalContainer from './components/Modal/ModalContainer'

function App() {
  return (
    <>
      <header className="top-0 bg-indigo-100 p-3 md:sticky">
        <h1 className="text-2xl font-bold italic">List of generic items</h1>
      </header>
      <main className="flex flex-col gap-3 bg-gray-100 md:flex-row md:p-3">
        <ListMenu />
        <List />
        <ModalContainer />
      </main>
      <div id="backdrop-container"></div>
      <div id="modal-container"></div>
    </>
  );
}

export default App;
