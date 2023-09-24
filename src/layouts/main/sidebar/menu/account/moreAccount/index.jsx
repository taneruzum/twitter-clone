import Line from "~/components/line";
import { useAccount, useAccounts } from "~/store/auth/hook";
export default function MoreAccount() {
  const account = useAccount();
  const accounts = useAccounts();

  console.log(accounts.length);
  return (
    <>
        {accounts.map((account, id) => (
          <button
            key={id}
            className={
              "flex   justify-between items-center w-full p-2.5 transition-all cursor-pointer hover:bg-[#eff3f41a] outline-none"
            }
          >
            <div className="flex gap-x-2 items-center">
              <img
                className="w-10 h-10 rounded-full "
                src={account?.avatar}
                alt=""
              />

              <div className="flex flex-col ">
                <span className="text-white font-bold text-left ">
                  {account?.userName}
                </span>
                <span className="text-[#71767B] text-left">
                  {" "}
                  {account?.fullName}
                </span>
              </div>
            </div>
          </button>
        ))}
      <Line size={100} />
      <button className="text-left px-3  py-2.5 font-bold text-white w-full  transition-all cursor-pointer  hover:bg-[#eff3f41a] ">
        Var olan bir hesap ekle
      </button>
      {accounts?.length > 1 && (
        <button className="text-left px-3  py-2.5 font-bold text-white w-full  transition-all cursor-pointer  hover:bg-[#eff3f41a] ">
          Hesapları Yönet
        </button>
      )}

      <button className="text-left px-3 py-2.5 font-bold text-white  w-full transition-all cursor-pointer hover:bg-[#eff3f41a]">
        {account.fullName} hesabından <br /> çıkış yap
      </button>
    </>
  );
}
