import React from 'react';
import Sidebar from '../components/Home/Sidebar';
import { Questions, Chat } from '../sections/export';

function Home() {
    return (
        <section className='w-screen h-screen flex justify-center items-center '>
            <Sidebar />
            <Questions />
            <Chat />
        </section>
    )
}

export default Home
