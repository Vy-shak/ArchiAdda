import { Section } from 'lucide-react'
import React from 'react';
import { FormLogin } from '../components/export';
import { Sitting } from '../assets';
import { RecoilRoot, } from 'recoil';

function Login() {
    return (
        <RecoilRoot>
            <section className='w-Screen bg-Agrey1200 h-fit justify-between flex items-center'>
                <FormLogin />
                <div className='w-1/2 p-12'>
                    <img className='w-full' src={Sitting} alt="" />
                </div>
            </section>
        </RecoilRoot>
    )
}

export default Login
