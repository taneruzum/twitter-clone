import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



function PremiumModal({close}) {
  const [selectButton, setSelectButton] = useState("personal");
	
  return (
    
        <div className="w-[600px]">
          <div className="w-full h-[3.313rem] px-3 flex items-center justify-start">
            <div className="hover:bg-[color:var(--background-secondary)] rounded-full flex items-center justify-center p-2">
              <button onClick={close} className="w-[1.25rem] h-[1.25rem]">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="currentColor"
                      d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                    ></path>
                  </g>
                </svg>
              </button>       
            </div>
          </div>
          <div className="pt-12 pb-[72px] px-[72px] flex flex-col ">
            <div className="text-[color:var(--color-third)] text-[1.938rem] leading-9 break-words font-extrabold text-center">
              <span>Hesabının türü hangisi?</span>
            </div>
            <div className="mt-5 font-normal  text-[color:var(--color-third)] text-base leading-5 text-center">
              <span>Sana uygun doğru aboneliği seç:</span>
            </div>
            <div className="flex justify-center gap-x-2 items-center mt-8 w-full ">
              <button
                id="personal"
                onClick={() => setSelectButton("personal")}
                className={classNames(
                  "flex  flex-col border border-transparent   justify-center gap-1 min-w-[50%] w-full shadow-[#0f14191f] px-4 py-6 rounded-xl break-words hover:bg-[color:var(--background-secondary)]",
                  {
                    " !border-[color:var(--color-primary)]":
                      selectButton === "personal",
                  }
                )}
              >
                <div className="text-sm text-[color:var(--color-base-secondary)] leading-4 ">
                  Premium
                </div>
                <div className="text-[1.063rem ] text-[color:var(--color-third)] font-bold leading-5">
                  Bireyim
                </div>
                <div className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] font-normal ">
                  Bireyler ve içerik üreticileri için{" "}
                </div>
              </button>
              <button
                id="organization"
                onClick={() => setSelectButton("organization")}
                className={classNames(
                  "flex  flex-col  border border-transparent  justify-center gap-1 min-w-[50%] w-full shadow-[#0f14191f] p-4 rounded-xl break-words hover:bg-[color:var(--background-secondary)]",
                  {
                    " !border-[color:var(--color-primary)]":
                      selectButton === "organization",
                  }
                )}
              >
                <div className="text-sm text-[color:var(--color-base-secondary)] leading-4 ">
                  Onaylı Kuruluşlar
                </div>
                <div className="text-[1.063rem ] text-[color:var(--color-third)] font-bold leading-5">
                  Kuruluşum
                </div>
                <div className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] font-normal text-left">
                  İşletmeler, devlet kurumları, kâr amacı gütmeyen kuruluşlar
                  için{" "}
                </div>
              </button>
            </div>
            <button className="mt-8 bg-[#eff3f4] min-h-[3.25rem] min-w-[3.25rem] px-8 py-4 w-full rounded-full  ">
              <div className="text-[color:var(--background-primary)] font-bold  leading-5 text-center break-words">
                <span className="text-[1.063rem] leading-4">
                  <span>Abone Ol</span>
                </span>
              </div>
            </button>
            <div className="mt-8 text-[color:var(--color-third)] font-normal text-[0.938rem ] leading-5 text-center break-words">
              <span>Daha fazla bilgi al: {""} </span>
              <Link
                to="/"
                className="text-[color:var(--color-primary)] hover:underline "
              >
                Premium
              </Link>
              <span>
                {""} ve {""}{" "}
              </span>
              <Link
                to="/"
                className="text-[color:var(--color-primary)] hover:underline"
              >
                Onaylı Kuruluşlar
              </Link>
            </div>
          </div>
        </div>
  );
}

PremiumModal.propTypes = {
  close: PropTypes.any,
};


export default PremiumModal;
