import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name} = tshirt
    return (
        <div className='img-div'>
           <img src={picture} alt="" width='125' /> 
           <p>{name}</p>
           <button onClick={()=>handleAddToCart(tshirt)}>add to cart</button>
        </div>
    );
};

export default Tshirt;