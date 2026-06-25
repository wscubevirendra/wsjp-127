"use client"

import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)

    return (
        <div className='p-4 flex gap-10 bg-red-500 w-50 text-white m-5'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h4>Count:{count}</h4>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
