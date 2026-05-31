import React from 'react'

export default function ProductCard() {
    return (
        <div className='shadow bg-white p-2'>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774357330113-155.png" alt="" />
            <div className='flex flex-col gap-2'>
                <button className='text-[10px] w-[90px] shadow bg-white px-4 rounded-md'>17 MINT</button>
                <p className=' cursor-pointer text-[13px] font-medium'>Perfect Rolled Cones (Natural) - Bongchie</p>
                <p>3 pcs</p>
                <p className='flex justify-between'>
                    <span>₹45</span>
                    <button className='text-sm shadow bg-green-200 border-green-300 px-4 rounded-md'>ADD</button>
                </p>
            </div>

        </div>
    )
}
