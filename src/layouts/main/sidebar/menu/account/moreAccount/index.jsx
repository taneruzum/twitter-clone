import Line from "~/components/line";
import { useAccount, useAccounts } from "~/store/auth/hooks"
import classNames from 'classnames'

export default function MoreAccount() {
    const currentAccount = useAccount()
    const accounts = useAccounts()

    return (
        <>
            {accounts.map((account, id) =>
            (

                <button key={id} className={classNames("flex  my-1 justify-between items-center w-full p-2.5 pr-5 transition-all  outline-none cursor-auto -order-1", {
                    "hover:bg-[color:var(--background-secondary)] cursor-pointer": currentAccount.id !== account.id,
                    "-order-2": account.id === currentAccount.id,
                })}>

                    <div className="flex gap-x-2 items-center w-full">

                        <img className='w-10 h-10 rounded-full ' src={account?.avatar} alt="" />

                        <div className='flex flex-col '>
                            <span className=' font-bold text-left '>{account?.userName}</span>
                            <span className='text-[color:var(--color-base-secondary)] text-left'> {account?.fullName}</span>
                        </div>

                        {currentAccount?.id === account?.id && (
                            <svg viewBox="0 0 24 24" className="ml-auto" width={18.75} height={18.75} fill="#00ba7c">
                                <path
                                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                                />
                            </svg>
                        )}
                    </div>


                </button>



            )
            )}
            <Line size={100} />
            <button className="text-left px-3  py-2.5 font-bold  w-full  transition-all cursor-pointer  hover:bg-[color:var(--background-secondary)] ">
                Var olan bir hesap ekle
            </button>
            {accounts?.length > 1 && (<button className="text-left px-3  py-2.5 font-bold  w-full  transition-all cursor-pointer  hover:bg-[color:var(--background-secondary)] ">Hesapları Yönet</button>)}

            <button className="text-left px-3  py-2.5 font-bold  w-full transition-all cursor-pointer hover:bg-[color:var(--background-secondary)]">
                {currentAccount.fullName} hesabından <br /> çıkış yap
            </button>
        </>
    )

}
