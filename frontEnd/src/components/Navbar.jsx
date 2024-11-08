import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link to="/signup"><button className='w-fit text-Agrey500 font-normal h-fit px-5 py-1 rounded-md bg-white border-solid text-sm border-white border-2 '>Signup</button></Link>
                <Link to="/login"><button className='w-fit text-white text-sm font-normal h-fit px-5 py-1 rounded-md border-solid border-white border-2 '>Login</button></Link>
            </div>
        </section >
    )
}

export default Navbar
