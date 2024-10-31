import React from 'react'
import { Form } from '../components/export';
import { Sitting } from '../assets';

function Signup() {
    return (
        <section className='w-Screen bg-Agrey1200 h-fit justify-between flex items-center'>
            <Form />
            <div className='w-1/2 p-12'>
                <img className='w-full' src={Sitting} alt="" />
            </div>
        </section>
    )
}

export default Signup
