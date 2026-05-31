import React from 'react'

export default function CategoryCard({ name = "Dummy", image }) {

    return (
        <div >
            <img src={image} alt="" className='bg-sky-100 rounded-2xl' />
            <p className='text-center text-md '>{name}</p>
        </div>
    )
}
