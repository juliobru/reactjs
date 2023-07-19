
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Bienvenida from './componentes/Bienvenida';


import NavBar from './componentes/NavBar';

import homeimage from '../src/componentes/home/woman-2126955_1280.png'

import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailCointeiner';
import Error404 from '../src/componentes/Error404'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
      <Routes>   
      <Route path = {'/'} element = { <Bienvenida imagen={homeimage} greeting={"Bienvenido a nuestra tienda"}/>}/>
      <Route path = {'/Productos'} element = {<ItemListContainer/>}/>
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
      <Route path = {'*'} element = {<Error404/>}/>
      </Routes> 

      </BrowserRouter>

    </div>
  );
}

export default App;
