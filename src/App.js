
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';


import NavBar from './componentes/NavBar';

import homeimage from '../src/componentes/imagenes/woman-2126955_1280.png'





function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <ItemListContainer imagen={homeimage} greeting={"Bienvenido a nuestra tienda"}/>

    </div>
  );
}

export default App;
