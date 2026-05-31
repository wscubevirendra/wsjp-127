import React from 'react'
import { FaCaretDown, FaUser } from "react-icons/fa";




export default function Header() {
    return (
        <header className='w-full p-4 shadow'>
            {/* //Desktop  */}
            <div className=' hidden md:flex'>
                <div className=' text-amber-500 text-3xl font-bold border-r-2 '>Blink<span className='text-green-500'>it</span></div>


            </div>
            <div>
                {/* //Mobile Header */}
                <div className='flex justify-between md:hidden items-center'>
                    <div>
                        <h3>Delivery in 16 minutes</h3>
                        <p className='flex items-center '>
                            21, Gopalpura Bypass Rd, Manav Ashram Colony, Vasundh
                            <FaCaretDown />
                        </p>
                    </div>
                    <FaUser className='text-3xl' />

                </div>


            </div>
        </header>
    )
}
