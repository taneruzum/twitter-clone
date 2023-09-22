import React from 'react'
import { Popover } from '@headlessui/react'

import store from "~/store";


const username = store.getState()?.auth?.currentAccount?.userName
const fullname = store.getState()?.auth?.currentAccount?.fullName

function Profile() {
    return (
        <Popover className="relative w-full">
            <Popover.Button className={'flex justify-between items-center w-full p-3 rounded-full  transition-all hover:bg-[#eff3f41a] outline-none'}>
                <div className='flex gap-x-5 items-center'>

                    <img className='rounded-full' src="/images/MR.png" alt="" width={40} height={40} />

                    <div className='flex flex-col '>
                        <span className='text-white font-bold '>{username}</span>
                        <span className='text-[#71767B]'> {fullname}</span>
                    </div>

                </div>


                <svg viewBox="0 0 24 24" width={18.75} height={18.75}><g><path fill='#fff' d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>

            </Popover.Button>

            <Popover.Panel className="w-[300px] absolute -top-36 left-0 py-3 bg-black shadow-box rounded-xl overflow-hidden flex flex-col justify-between items-start">
                <div className=" px-3  py-4 font-bold text-white w-full  transition-all cursor-pointer  hover:bg-[#eff3f41a] ">
                    Var olan bir hesap ekle
                </div>
                <div className=" px-3 py-4 font-bold text-white  w-full transition-all cursor-pointer hover:bg-[#eff3f41a]">
                    {fullname} hesabından çıkış yap
                </div>


            </Popover.Panel>
        </Popover>

    )
}
export default Profile

