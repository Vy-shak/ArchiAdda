import React from 'react'

function Form() {
    return (
        <section className='w-full h-fit justify-between flex items-center'>
            <div className='w-1/2 h-full centerDiv bg-Aneutral500'>
                <div className='w-full bg-white rounded-md flex flex-col justify-start items-start'>
                    <label className='text-Agrey500 font-Aroboto text-lg font-semibold' >Become a member</label>
                    <div className='flex-col flex'>
                        <label className='text-Agrey500 text-[16px]'>Password</label>
                        <input className='bg-red-400 border-2 border-Ablue500 rounded-sm h-9' type="text" name="" id="" />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Form
