import React from 'react';
import Menubox from './Menubox';
import { Navmenu } from '../../Constant';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const [miniSbar, setminiSbar] = useState(false)

    const handleSbar = () => {
        setminiSbar((prev) => !prev)
    }

    return (
        <div className={`${miniSbar ? 'w-12' : 'w-36'} px-4 h-full transition-width ease-in-out flex flex-col justify-start flex-shrink-0 items-start bg-white relative bottom-0 left-0`}>
            <div onClick={handleSbar} className={` ${miniSbar ? 'justify-center' : null} w-full h-fit flex justify-end items-center `}>
                <box-icon name='menu-alt-right'></box-icon>
            </div>
            <div className='w-fit h-fit mt-16'>
                {Navmenu.map((item) => (
                    <NavLink to='/home'>
                        <Menubox type={item.icon} name={item.name} visibility={miniSbar} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
