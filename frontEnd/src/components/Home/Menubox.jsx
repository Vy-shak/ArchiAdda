import React from 'react'
import boxicons from "boxicons"

function Menubox({ type, name, visibility }) {
    return (
        <div className='flex justify-start items-center w-full py-2 h-fit border-b-2 border-solid border-Agrey900'>
            <div className='w-fit h-fit mt-1'>
                <box-icon type='solid' name={type} size='xm'></box-icon>
            </div>
            {visibility ? null : <span className='text-Agrey100 ml-2 text-sm font-Aroboto'>{name}</span>}
        </div >
    )
}

export default Menubox
