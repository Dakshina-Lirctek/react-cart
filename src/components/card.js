import React,{useState} from "react";

const Cards = ({ item,handleClick}) => {

  const [cart, setCart] = useState([]);
  const { name, type, cuisine, availabilty,img,price } = item;

  const handleChange = (item, d) => {
     console.log(item,d)
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{type}</p>
        <p>{cuisine}</p>
        <h4>Available For:</h4>
        <p>{availabilty[0]}</p>
        <p>{availabilty[1]}</p>
        <p>{availabilty[2]}</p>
        <b>Price - {price}Rs</b><br></br>
        
    
        <div>
          <button onClick={() => handleChange(item, 1)}>+</button>
          <button>{item.amount}</button>
          <button onClick={() => handleChange(item, -1)}>-</button>
        </div>
  
    <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
    </div>
  );
};

export default Cards;


