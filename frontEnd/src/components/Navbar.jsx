import React from 'react'

function Navbar() {
    return (
        <section className='w-full flex justify-between items-center px-4 h-10 bg-Agrey500  rounded-md'>
            <span className='font-Aroboto font-bold' >ARCHI-ADDA</span>
            <div className='flex space-x-4'>
                <span className='font-Aroboto text-sm'>Home</span>
                <span className='font-Aroboto text-sm'>Pricing</span>
                <span className='font-Aroboto text-sm'>About us</span>
                <span className='font-Aroboto text-sm'>Services</span>
            </div>
            <div className='flex centerDiv space-x-4'>
                <button className='w-fit font-medium h-fit px-5 py-1 rounded-md bg-Ablue500 border-solid text-sm border-Ablue500 border-2 '>Signup</button>
                <button className='w-fit text-sm font-medium h-fit px-5 py-1 rounded-md border-solid border-Ablue500 border-2 '>Login</button>
            </div>
        </section>
    )
}

export default Navbar
