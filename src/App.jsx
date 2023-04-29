
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const nombre = "React";
  return (
    <>
      <NavBar/>
      <h1></h1>
      <ItemListContainer greeting="tu tienda favorita" />
    </>
  );
}

export default App;
