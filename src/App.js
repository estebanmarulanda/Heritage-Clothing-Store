import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FooterDesign} from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
     <main>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     </main>
    </div>
    <footer>
      <FooterDesign/>
    </footer>
    </BrowserRouter>
    
  );
}

export default App;
