import './App.css';
import { Cart } from './components/Cart';
import { NavbarItem } from './components/Navbar';
import { Products } from './components/Products';
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavbarItem/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
