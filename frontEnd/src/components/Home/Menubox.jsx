import React from 'react'
import boxicons from "boxicons"
import { memo } from 'react'

const Menubox = memo(({ type, name, visibility }) => {
    return (
        <div className='flex justify-start flex-shrink-0 items-center w-full py-2 h-fit border-b-2 border-solid border-Agrey900'>
            <div className='w-fit h-fit mt-1'>
                <box-icon type='solid' name={type} size='xm'></box-icon>
            </div>
            {visibility ? null : <span className='text-Agrey100 whitespace-nowrap ml-2 text-sm font-Aroboto'>{name}</span>}
        </div >
    )
})

export default Menubox
