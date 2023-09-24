import Logo from "./logo";
import Menu from "./menu";
import Account from "./menu/account";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen px-2 py-3 flex flex-col items-start justify-between ">
            <div className="w-full">
                <Logo />
                <Menu />
            </div>

            <Account />
        </aside>

    )
}