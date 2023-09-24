import React from 'react'
import { Popover, Transition } from '@headlessui/react'

import { useAccount } from '~/store/auth/hooks';
import MoreAccount from './moreAccount';



function Account() {

    const account = useAccount()

    return (
        <Popover className="relative w-full">
            <Popover.Button className={"flex  my-1 justify-between items-center w-full p-3 rounded-full  transition-all hover:bg-[#eff3f41a] outline-none"}>

                <div className='flex gap-x-2 items-center'>

                    <img className='w-10 h-10 rounded-full ' src={account.avatar} alt="" />

                    <div className='flex flex-col '>
                        <span className='text-white font-bold text-left '>{account.userName}</span>
                        <span className='text-[#71767B] text-left'> {account.fullName}</span>
                    </div>

                </div>


                <svg viewBox="0 0 24 24" width={18.75} height={18.75}><g><path fill='#fff' d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>

            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="w-[300px] absolute left-1/2 -translate-x-1/2 bottom-[80px] p-2.5 bg-black shadow-box rounded-xl overflow-hidden flex flex-col justify-between items-start ">
                    <MoreAccount />


                </Popover.Panel>


            </Transition>

        </Popover>

    )
}
export default Account

