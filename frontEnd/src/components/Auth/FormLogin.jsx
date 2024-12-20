import React from 'react'
import Input from './Input'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../Store/Atoms/Userinfo';
import axios from 'axios';

function FormLogin() {
    const LoginData = useRecoilValue(userAtom);
    console.log(LoginData);

    const Logindb = async () => {
        try {
            const Login = await axios.post('http://localhost:3000/user/signin', LoginData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(Login)
        } catch (error) {
            console.log("some error in login");
            console.log(error)
        }
    }
    return (
        <div className='w-1/2 h-full centerDiv bg-Agrey1200 px-16'>
            <div className='centerDiv flex-col bg-white rounded-md px-6 py-6 w-full '>
                <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Login to your account</label>
                <form autoComplete='on' onClick={(e) => e.preventDefault()}>
                    <div className='w-full bg-white  flex flex-col justify-start items-start'>
                        <Input item={"username"} id={3} title={"User Name"} />
                        <Input item={"password"} id={4} autocomplete={"new-password"} type={"password"} title={"Password"} />
                    </div>
                    <button onClick={Logindb} className='bg-blue-900 mt-4 px-24 rounded-md py-2 text-sm'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
