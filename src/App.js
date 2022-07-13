import React, { useState } from "react";
import Data from "./components/data";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Order from "./components/order";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    console.log(item,d)
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navbar setShow={setShow} size={cart.length} />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      {show ? <Cart cart={cart} setCart={setCart} handleChange={handleChange} /> : null}
      <Data handleClick={handleClick} />

    </BrowserRouter>
  );


};

export default App;
