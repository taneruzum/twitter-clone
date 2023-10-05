import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "~/utils/const";
import More from "./more";
import New from "./new";
import { useState, useEffect } from "react";

export default function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Ekran genişliği değiştiğinde windowWidth state'ini güncelle
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener'ı ekleyin ve component unmount olduğunda kaldırın
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="mt-0.5 mb-1 w-full">
      {mainMenu.map((menu, index) => {
        if (
          // daha iyi bir yöntem bulana kadar en iyisi bu
          menu.title === "Yer İşaretleri" &&
          // 1280 < windowWidth &&
          windowWidth < 1540
        ) {
          return null;
        }
        return (
          <NavLink to={menu.path} className="py-[3px] block group" key={index}>
            {({ isActive }) => (
              <div
                className={classNames(
                  " p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]",
                  {
                    "font-bold": isActive,
                    "!p-2": windowWidth < 1540,
                  }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && (
                    <span className="w-[18px] h-[18px] bg-[color:var(--color-primary)] text-[color:var(--background-primary)]  rounded-full  absolute -top-1.5 -right-1 flex justify-center items-center text-[11px]">
                      {menu?.notification}
                    </span>
                  )}
                  {menu?.newPost > 1 && (
                    <span className="w-[8px] h-[8px] bg-[color:var(--color-primary)] text-[color:var(--background-primary)]  rounded-full  absolute -top-1 -right-0 flex justify-center items-center"></span>
                  )}
                  {!isActive && menu.icon.passive}
                  {isActive && menu.icon.active}
                </div>
                <div className={"text-xl pr-4 "}>{menu.title}</div>
              </div>
            )}
          </NavLink>
        );
      })}

      <More />
      <New />
    </nav>
  );
}
