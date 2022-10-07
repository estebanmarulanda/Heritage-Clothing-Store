import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
     <main>
      <ItemListContainer greeting = "Welcome to HCS store"/>
     </main>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
