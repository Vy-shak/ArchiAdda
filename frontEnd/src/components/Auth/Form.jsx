import React from 'react';
import Input from '../Auth/Input.jsx';

function Form() {
    return (
        <div className='w-1/2 h-full centerDiv bg-Agrey1200 px-16'>
            <div className='centerDiv flex-col bg-white rounded-md px-6 py-6 w-full '>
                <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Become a member</label>
                <div className='w-full bg-white  flex flex-col justify-start items-start'>
                    <Input err={"phone number already exist!"} title={"Phone Number"} />
                    <Input title={"Full Name"} />
                    <Input title={"User Name"} />
                    <Input title={"Password"} />
                </div>
                <button className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Join</button>
            </div>
        </div>
    )
}

export default Form
