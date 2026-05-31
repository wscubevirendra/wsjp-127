import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Header />
      <div className='w-full text-5xl font-bold grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 text-white'>
        <div className='even:bg-amber-500 odd:bg-sky-500 lg:col-span-2 p-6 text-center'>1</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>2</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>3</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>4</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>5</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>6</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>7</div>
        <div className='even:bg-amber-500 odd:bg-sky-500 p-6 text-center'>8</div>
      </div>
      <Footer/>
    </>
  )
}
