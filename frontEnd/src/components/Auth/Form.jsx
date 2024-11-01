import React, { useEffect } from 'react';
import Input from '../Auth/Input.jsx';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../Store/Atoms/Userinfo.jsx';
import axios from 'axios';

function Form() {
    const userData = useRecoilValue(userAtom);
    const sendInfo = async () => {
        try {
            const upload = await axios.post('http://localhost:3000/user/signup', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(upload.data)
        } catch (error) {
            console.log("unable to upload")
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-1/2 h-full centerDiv bg-Agrey1200 px-16'>
            <div className='centerDiv flex-col bg-white rounded-md px-6 py-6 w-full '>
                <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Become a member</label>
                <form onClick={handleForm} autoComplete='on'>
                    <div className='w-full bg-white  flex flex-col justify-start items-start'>
                        <Input item={"phoneNo"} type={"number"} id={1} err={"phone number already exist!"} title={"Phone Number"} />
                        <Input item={"fullname"} id={2} title={"Full Name"} />
                        <Input item={"username"} id={3} title={"User Name"} />
                        <Input item={"password"} id={4} autocomplete={"new-password"} type={"password"} title={"Password"} />
                    </div>
                    <button onClick={sendInfo} className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Join</button>
                </form>
            </div>
        </div>
    )
}

export default Form
