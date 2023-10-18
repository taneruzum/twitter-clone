import { Popover } from "@headlessui/react";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

import TextInputBottom from "~/components/textInputBottom";
import { useAccount } from "~/store/auth/hooks";
import PollForm from "~/components/commentPollForm";


export default function Comment() {
  const [active, setActive] = useState(false);
  const [whosee, setWhoSee] = useState("Herkes");
  const [textLength, setTextLength] = useState(0);
  const currentAccount = useAccount();

  const textareaRef = useRef();

  const checkTextLength = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setTextLength(textarea.value.length);
  };
  useEffect(() => { }, [textLength]);

  //*Anket 
  const [poll, setPoll] = useState(false)

  return (
    <div className=" pt-1 border-b border-[color:var(--background-third)]">
      <div className=" px-4 flex ">
        <div className="mr-3 pt-3">
          <img
            src={currentAccount.avatar}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className=" pt-[4px] flex flex-col flex-1 justify-center ">
          <div className="flex flex-col w-full  border-b border-[color:var(--background-third)]">
            <div
              className={classNames("pb-3 ", {
                "!pb-0 hidden": active === false,
              })}
            >
              <Popover className="relative outline-none">
                <Popover.Button>
                  <div
                    className={classNames(
                      "border border-[#536471] min-h-[24px] max-w-[94px] px-3 flex items-center gap-x-1 justify-center text-[color:var(--color-primary)] font-bold rounded-full hover:bg-[#1d7df01a]",
                      {
                        hidden: active === false,
                        "border-[#00ba7c] text-[#00ba7c]": whosee === "Çevre",
                      }
                    )}
                  >
                    <span>{whosee}</span>
                    <svg className="h-[1rem]" viewBox="0 0 24 24">
                      <g>
                        <path
                          fill="currentColor"
                          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </Popover.Button>

                <Popover.Panel className="w-[260px] h-auto absolute top-8  -left-20 py-3 bg-[color:var(--background-primary)] shadow-box rounded-2xl overflow-hidden z-10 ">
                  <h3 className="py-1 px-3 font-bold text-xl">
                    Hedef kitle seç
                  </h3>
                  <button
                    onClick={() => {
                      setWhoSee("Herkes");
                    }}
                    className="w-full flex items-center gap-3 py-3 px-4 hover:bg-[color:var(--background-secondary)]"
                  >
                    <div className=" p-2 bg-[color:var(--color-primary)] rounded-full">
                      <svg className="h-[1.5rem] " viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M4.65 8.24c-.57 1.13-.9 2.41-.9 3.76 0 4.56 3.69 8.25 8.25 8.25 2.87 0 5.4-1.47 6.88-3.69l-2.99-1.5.56-3.32-3.01-4.21 4.16-1.59c-1.27-1.17-2.91-1.95-4.72-2.14l-.5 2.38-2.08 1.04-.53 1.41 4.82 1.93-2.16 2.87-1.23 5.54-3.7-1.85V13.1l-.53-2.68.26-.71-2.58-1.47zm1.13-1.66l2.16 1.23.77-2.03 1.91-.96.21-.99c-2.01.29-3.78 1.3-5.05 2.75zm3.26 4l.46 2.32v2.98l.3.15.77-3.46.85-1.13-2.35-.94-.03.08zm9.92-3.02l-2.39.91 1.99 2.79-.45 2.68 1.67.83c.3-.87.47-1.8.47-2.77 0-1.63-.47-3.16-1.29-4.44zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"
                        ></path>
                      </svg>
                    </div>
                    <span className="flex-1 text-left text-[color:var(--color-base)] font-bold">
                      Herkes
                    </span>
                    {whosee === "Herkes" && (
                      <svg
                        className="text-[color:var(--color-primary)]"
                        width={20}
                        height={18.75}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        ></path>
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setWhoSee("Çevre");
                    }}
                    className="w-full flex items-center gap-3 py-3 px-4 hover:bg-[color:var(--background-secondary)]"
                  >
                    <div className=" p-2 bg-[#00ba7c] rounded-full">
                      <svg className="h-[1.5rem] " viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm13.759-3.83c-.355-.69-1.059-1.13-1.84-1.17-.66-.03-1.347.22-1.918.79-.573-.57-1.259-.82-1.92-.79-.781.04-1.485.48-1.84 1.17-.358.71-.339 1.62.206 2.59.541.97 1.601 1.99 3.352 2.98l.202.12.201-.12c1.751-.99 2.811-2.01 3.352-2.98.544-.97.563-1.88.205-2.59z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between w-full  font-bold">
                      <div className="flex flex-col text-left ">
                        <span className="flex-1">Çevre</span>
                        <div className="font-normal">
                          0{" "}
                          <span className="text-[color:var(--color-base-secondary)]">
                            kişi
                          </span>{" "}
                          <span className="underline">Düzenle</span>
                        </div>
                      </div>
                      {whosee === "Çevre" && (
                        <svg
                          className="text-[color:var(--color-primary)]"
                          width={20}
                          height={18.75}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </button>
                </Popover.Panel>
              </Popover>
            </div>
            <div className="py-3 w-full text-xl h-full">
              <textarea
                ref={textareaRef}
                onClick={() => {
                  setActive(true);
                }}
                id="auto-expanding-textarea"
                onInput={checkTextLength}
                className={classNames(
                  " w-full max-h-[24px] h-auto placeholder:text-[color:var(--color-base-secondary)]  bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)] overflow-y-hidden  resize-none leading-6",
                  {
                    "max-h-max ": active === true,
                  }
                )}
                placeholder={poll ? 'Soru sor' : 'Neler oluyor?'}
              />
              {poll && (
                <PollForm setPoll={setPoll} />
              )}
            </div>

            {whosee === "Herkes" && (
              <div className="w-full flex items-center justify-start">
                <div
                  className={classNames(
                    "flex items-center justify-start gap-x-1 text-left font-bold text-[14px] hover:bg-[#1d7df01a] min-h-[24px]   text-[color:var(--color-primary)] rounded-full -ml-2 px-3.5 mb-3  ",
                    {
                      hidden: active === false,
                    }
                  )}
                >
                  <svg className="h-[1rem]" viewBox="0 0 24 24">
                    <g>
                      <path
                        fill="currentColor"
                        d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
                      ></path>
                    </g>
                  </svg>
                  <span>Herkes yanıtlayabilir</span>
                </div>
              </div>
            )}
            {whosee === "Çevre" && (
              <div
                className={classNames(
                  "flex items-center justify-start gap-x-1 text-left font-bold text-[14px]  min-h-[24px]  w-auto text-[color:var(--color-primary)] rounded-full -ml-2 px-3 mb-3  ",
                  {
                    hidden: active === false,
                  }
                )}
              >
                <svg viewBox="0 0 24 24" className="h-[1rem] opacity-50">
                  <g>
                    <path
                      fill="currentColor"
                      d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"
                    ></path>
                  </g>
                </svg>
                <span className="w-full opacity-50 pointer-events-none">
                  Yalnızca seni takip eden Çevren yanıtlayabilir
                </span>
              </div>
            )}
          </div>
          <TextInputBottom textLength={textLength} setPoll={setPoll} />
        </div>
      </div>
    </div>
  );
}
