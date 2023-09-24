
import Line from '~/components/line';
import { useAccount, useAccounts } from '~/store/auth/hook';
export default function MoreAccount() {
    const account = useAccount()
    const accounts = useAccounts()
    console.log(accounts);
    return (
        <>
            {accounts.map((account, id) =>
            (

                <div key={id} className={'flex  my-1 justify-between items-center w-full p-3 transition-all cursor-pointer hover:bg-[#eff3f41a] outline-none'}>
                    <div className='flex gap-x-2 items-center'>

                        <img className='w-10 h-10 rounded-full ' src={account?.avatar} alt="" />

                        <div className='flex flex-col '>
                            <span className='text-white font-bold text-left '>{account?.userName}</span>
                            <span className='text-[#71767B] text-left'> {account?.fullName}</span>
                        </div>

                    </div>

                </div>



            )
            )}
            <Line width={100} />
            <div className=" px-3  py-4 font-bold text-white w-full  transition-all cursor-pointer  hover:bg-[#eff3f41a] ">
                Var olan bir hesap ekle
            </div>
            <div className=" px-3 py-4 font-bold text-white  w-full transition-all cursor-pointer hover:bg-[#eff3f41a]">
                {account.fullName} hesabından çıkış yap
            </div>
        </>
    )
}