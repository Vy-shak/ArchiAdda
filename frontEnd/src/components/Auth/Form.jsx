import React from 'react';
import Input from '../Auth/Input.jsx';
import { useState } from 'react';

function Form() {
    const [userData, setUserData] = useState({
        phoneNo: '',
        username: '',
        password: '',
        fullname: ''
    });

    console.log(userData)

    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-1/2 h-full centerDiv bg-Agrey1200 px-16'>
            <div className='centerDiv flex-col bg-white rounded-md px-6 py-6 w-full '>
                <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Become a member</label>
                <form onClick={handleForm} autoComplete='on'>
                    <div className='w-full bg-white  flex flex-col justify-start items-start'>
                        <Input updateData={setUserData} item={"phoneNo"} type={"number"} id={1} err={"phone number already exist!"} title={"Phone Number"} />
                        <Input updateData={setUserData} item={"fullname"} id={2} title={"Full Name"} />
                        <Input updateData={setUserData} item={"username"} id={3} title={"User Name"} />
                        <Input updateData={setUserData} item={"password"} id={4} autocomplete={"new-password"} type={"password"} title={"Password"} />
                    </div>
                    <button className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Join</button>
                </form>
            </div>
        </div>
    )
}

export default Form
