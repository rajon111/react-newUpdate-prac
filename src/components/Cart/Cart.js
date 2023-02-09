import React from 'react';

const Cart = ({cart, removeItem}) => {
    let message ;
    if(cart.length === 0){
        message = <p>Pleaase add at least one</p>
    }
    return (
        <div>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=>removeItem(tshirt)}>x</button></p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;