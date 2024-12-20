import React, { useEffect, useState } from 'react';
import Input from '../Auth/Input.jsx';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom, errAtominput } from '../../Store/Atoms/Userinfo.jsx';
import axios from 'axios';

function Form() {
    const [errData, setErrdata] = useState({
        phoneNo: [],
        username: [],
        password: [],
        fullname: []
    });

    console.log(errData);

    const userData = useRecoilValue(userAtom);

    const initState = {
        phoneNo: [],
        username: [],
        password: [],
        fullname: []
    }
    // const setErrdata = useSetRecoilState(errAtominput);

    const sendInfo = async () => {
        try {
            setErrdata(initState);
            const upload = await axios.post('http://localhost:3000/user/signup', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(upload)
            const zodError = upload?.data?.err?.issues
            if (upload?.data?.err?.issues) {
                zodError.map((item) => {
                    setErrdata((prev) => (
                        { ...prev, [item.path[0]]: item.message }
                    ))
                });
            }
            const duplicateErr = upload?.data?.msg2;
            if (duplicateErr?.code === 11000) {
                const source = Object.keys(duplicateErr.keyPattern)[0];
                const message = `This ${source} already exist`;
                setErrdata((prev) => (
                    { ...prev, [source]: [message] }
                ))

            };


        } catch (error) {
            console.log(error)
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
                        <Input item={"phoneNo"} type={"number"} id={1} title={"Phone Number"} errMsg={errData.phoneNo} />
                        <Input item={"fullname"} id={2} title={"Full Name"} errMsg={errData.fullname} />
                        <Input item={"username"} id={3} title={"User Name"} errMsg={errData.username} />
                        <Input item={"password"} id={4} autocomplete={"new-password"} type={"password"} title={"Password"} errMsg={errData.password} />
                    </div>
                    <button onClick={sendInfo} className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Join</button>
                    <p className='text-Agrey300 text-[16px] mt-2'>Already has an account?<span className='text-[18px] text-Ablue600 font-semibold'>Login</span></p>
                </form>
            </div>
        </div>
    )
}

export default Form
