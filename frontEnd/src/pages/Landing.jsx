import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../components/Navbar'

function Landing() {
    return (
        <section className='flex flex-col justify-center items-center w-full h-fit bg-white'>
            <section className='w-screen bg-white pt-3 h-fit justfy-start items-start flex-col Apadding-x'>
                <Navbar />
            </section>
            <section className='Apadding-x h-fit bg-white'>
                <Hero />
            </section>
        </section>
    )
}

export default Landing
