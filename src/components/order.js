import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import '../styles/card.css';

function Order({ order }) {
  console.log(order);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let ans = 0;
    order.map((item) => (ans += item?.amount * item?.price));
    console.log(ans);
    setPrice(ans);
  }, [order]);

  return (
    <div>
      <Navbar show={true} />

      {order.length > 0 ? (
        order.map((item) => (
          <div>
            {item.name}
            {item.type}
            {item.cuisine}
            {item.amount}
            {price}
          </div>
        ))
      ) : (
        <div className="order-Empty">
          <h1>No Order Yet</h1>
          <p>Please Add Something in Cart</p>{" "}
          <Link to="/">
            <p>Click here</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Order;
