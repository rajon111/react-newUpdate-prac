import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'


const Home = () => {

  const tshirts = useLoaderData()
  const [cart,setCart] = useState([])

  const handleAddToCart= tshirt =>{
    console.log(tshirt)
    const exist = cart.find(ts=>ts._id === tshirt._id);
    if(exist){
      alert('already added')
    }else{
      const newCart = [...cart,tshirt]
      setCart(newCart) 
      // alert('successfully added')
    }
    
  }
  
  const removeItem = tshirt =>{
    console.log(tshirt)
    const remaining = cart.filter(ts => ts._id !== tshirt._id)
    setCart(remaining)

  }

  return (
    <div className='home-container'>
      <div className="t-shirt-containe">
      {
        tshirts.map( tshirt => <Tshirt tshirt={tshirt} key={tshirt._id} handleAddToCart={handleAddToCart}></Tshirt> 
        )
      }
      </div>
      <div className='cart-container'>
        <Cart cart={cart} removeItem={removeItem}></Cart>
      </div>
    </div>
  );
};

export default Home;