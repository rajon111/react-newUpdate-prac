import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData()
    // console.log(friends)
    
    return (
        <div>
            {
                friends.map(friend =>{
                    return(
                        <div key={friend.id}>
                            <h3>Name:{friend?.name}</h3>
                            <p>Email:{friend?.email}</p>
                            <p><small>UserName: <Link to={`/friend/${friend.id}`}>{friend?.username}</Link></small></p>
                        </div>
                    )
                } )
            }
        </div>
    );
};

export default Friends;