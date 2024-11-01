import React, { useState } from 'react'

function Input({ title, err, item, type, id, autocomplete }) {
    const [userData, setUserData] = useState({
        phoneNo: '',
        username: '',
        password: '',
        fullname: ''
    });
    console.log(userData)

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUserData((prev) => ({
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
}

export default Input
