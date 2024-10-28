import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../components/Navbar'

function Landing() {
    return (
        <>
            <section className='w-screen bg-white pt-3 h-fit justfy-start items-start flex-col Apadding-x'>
                <Navbar />
            </section>
            <section className='Apadding-x'>
                <Hero />
            </section>
        </>
    )
}

export default Landing
