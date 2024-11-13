import React from 'react'
import { House } from '../assets';
import { Users } from 'lucide-react'
import BorderLIne from '../components/BorderLIne';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='w-full h-fit flex-col space-y-4'>
            <div className='flex max-lg:flex-col  w-full justify-center items-center mt-8'>
                <div className='flex justify-start flex-shrink-0 items-start space-y-2 flex-col'>
                    <h1 className='text-6xl font-medium font-Aroboto text-Agrey500 leading-tight'>
                        A Revolutionary
                        <br />
                        Community
                        <br />
                        for Future
                        <br />
                        <span className='text-Ablue500'>Architects</span>
                        <div className='w-72'>
                            <p className='text-sm text-Aneutral500'>ARCHI-ADDA, as the term suggests, helps architecture students share their study resources, find mentors, get gigs, and explore career opportunities</p>
                        </div>
                    </h1>
                    <div className='flex justify-start items-center space-x-6'>
                        <Link to='/signup'>
                            <button className='bg-Ablue500 flex-shrink-0  text-sm px-12 py-2 rounded-sm space-x-4 centerDiv'>
                                <Users />
                                Join
                            </button>
                        </Link>
                        <Link to='/home'>
                            <button className=' text-Agrey500 flex-shrink-0  text-sm px-12 py-2 border-2 border-solid border-Ablue500 rounded-sm space-x-4 centerDiv'>
                                <Users />
                                Nah,Let me try first
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='w-full h-fit '>
                    <img src={House} />
                </div>
            </div>
            <BorderLIne />
        </section>
    )
}

export default Hero
