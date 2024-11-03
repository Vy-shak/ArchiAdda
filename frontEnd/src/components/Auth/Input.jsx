import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../../Store/Atoms/Userinfo';
import { memo } from 'react';

const Input = memo(({ title, err, item, type, id, autocomplete, }) => {

    const updateData = useSetRecoilState(userAtom);

    const handleChange = (e) => {
        let { name, value } = e.target;
        updateData((prev) => ({
            ...prev, [name]: value
        }))
    }

    return (
        <div className='flex-col flex w-full mt-3'>
            <label className='text-Agrey500 text-[16px]'>{title}</label>
            <input key={id} name={item} onChange={handleChange} className='bg-Agrey1200 px-2 text-Agrey500 text-sm border-2 focus:border-Ablue800 outline-none border-Ablue900 rounded-md h-9' autoComplete={autocomplete} type={type} id={id} />
            <span className='text-[12px] ml-2 text-red-800 '>{err}</span>
        </div>
    )
})

export default Input
