import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData()
    // console.log(friendDetails)
    return (
        <div>
            <h1>Name: {friendDetails.name}</h1>
            <h5>Phone: {friendDetails.phone}</h5>
            <button ><Link to='/'>Back</Link></button>
        </div>
    );
};

export default FriendDetails;