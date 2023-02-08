import React from 'react';

const Cart = ({cart, removeItem}) => {
    return (
        <div>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=>removeItem(tshirt)}>x</button></p>)
            }
        </div>
    );
};

export default Cart;