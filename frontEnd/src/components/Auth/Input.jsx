import React from 'react'

function Input({ title, err }) {
    return (
        <div className='flex-col flex w-full mt-3'>
            <label className='text-Agrey500 text-[16px]'>{title}</label>
            <input className='bg-Agrey1200 px-2 text-Agrey500 text-sm border-2 focus:border-Ablue800 outline-none border-Ablue900 rounded-md h-9' type="text" name="" id="" />
            <span className='text-[12px] ml-2 text-red-800 '>{err}</span>
        </div>
    )
}

export default Input
