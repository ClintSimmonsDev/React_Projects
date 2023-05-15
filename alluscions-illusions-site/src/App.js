import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Blog from './pages/Blog';

function App() {
  const [paintings] = useState([
  { id: 1, title: 'Art0', image: './images/Ent.jpg', price: 45},
  { id: 2, title: 'Art1', image: './images/P9260494.jpg', price: 85 },
  { id: 4, title: 'Art3', image: './images/P9260498.jpg', price: 95 },
  { id: 5, title: 'Art4', image: './images/P9260503.jpg', price: 105 },
  { id: 6, title: 'Art5', image: './images/P9260505.jpg', price: 65 },
  { id: 7, title: 'Art6', image: './images/P9260508.jpg', price: 125 },
  { id: 8, title: 'Art7', image: './images/P9260512.jpg', price: 75 },
  { id: 9, title: 'Art8', image: './images/P9260514.jpg', price: 55 },
  { id: 10, title: 'Art9', image: './images/P9260517.jpg', price: 130 }
  ]);
  const [cart, setCart] = useState([]);

  function addToCart(painting) {
  setCart([...cart, painting]);
  }

  function removeFromCart(painting) {
    const index = cart.indexOf(painting);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  }

  function Checkout() {
    console.log('Checking you out');
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home paintings={paintings}/>}></Route>
          <Route path="Gallery" element={<Gallery paintings={paintings}/>}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Shop" element={<Shop paintings={paintings}/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
