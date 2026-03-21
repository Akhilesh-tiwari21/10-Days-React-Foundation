import React from 'react'

const Card = ({user}) => {
    return (
        <div className='h-40 w-80 bg-gray-500 rounded-2xl font-mono flex items-center justify-center shadow-xl'>
            <div className='h-30 w-80 bg-gray-300 flex flex-col justify-center items-center'>
                <h3>Id:{user.id}</h3>
                <h1>Name:{user.name}</h1>
                <p>Email:{user.email}</p>
                <p>Phone No:{user.phone}</p>

            </div>
        </div>
    )
    
};

export default Card
