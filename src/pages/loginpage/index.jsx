import { Link } from "react-router-dom";
import LoginButtons from "~/components/login-buttons";

import { useAccount } from "~/store/auth/hooks";
import { footer } from "~/utils/const";

export default function LoginPage() {
  const currentAccount = useAccount();
  //   const allAccounts = useAccounts();
  //   const randomNumber = Math.floor(Math.random()*allAccounts.length)

  const date = new Date();
  return (
    <>
      <div className=" bg-black flex flex-col min-h-screen justify-between items-center  ">
        <div className=" flex items-center flex-shrink flex-grow ">
          <div className="w-[48vw]  flex items-center justify-center  desktop:w-[55vw]">
            <svg
              className="w-full  p-[32px] "
              height={440.75}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              ></path>
            </svg>
          </div>
          <div className="min-w-[45vw] flex items-center justify-start p-4  ">
            <div className="min-w-[437px] max-w-[760px] w-full p-5 text-[#e7e9ea] break-words text-left ">
              <div className="my-[48px]  font-bold leading-[64px] break-words  tracking-[-1.2px] font-[Verdana]  ">
                <span className=" 3xl:max-w-auto text-[64px] ">
                  Şu anda olup bitenler
                </span>
              </div>
              <div className="leading-9 mb-[32px] text-[31px] font-bold font-[Verdana] ">
                <span className="font-bold">Hemen katıl.</span>
              </div>

              <div className=" flex flex-col max-w-[300px]  ">
                {currentAccount.length > 0 ? (
                  <button className="flex items-center justify-beetwen outline-none rounded-full w-[300px] py-1 px-3 gap-1 bg-white mb-3  hover:bg-[#e6e6e6]">
                    <div className="w-full flex items-center justify-start gap-x-2">
                      <img
                        className="w-5 h-5 "
                        src="https://lh3.googleusercontent.com/a/ACg8ocLV1egFnSmQllc9sk-5T3LyKaGM-xjejj3dOYZ7lM3BgGc=s96-c"
                        alt="The için profil resmi"
                      />
                      <div className=" h-full text-left">
                        <p className="text-[#3c4043] text-[12px] font-medium ">
                          {currentAccount.username} oturum açın
                        </p>
                        <p className="text-[#5f6368] text-[11px] ">
                          {currentAccount.mail}
                        </p>
                      </div>
                    </div>
                    <svg
                      version="1.1"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </button>
                ) : (
                  <button className="flex items-center justify-center outline-none rounded-full w-[300px] py-2.5 px-3 gap-x-2 bg-white mb-3  hover:bg-[#e6e6e6]">
                    <svg
                      version="1.1"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                    <span className="text-[#3c4043] text-[14px] font-medium ">
                      Google ile kaydolun
                    </span>
                  </button>
                )}

                <LoginButtons className="primary">
                  <svg className="w-5 h-5 3xl:w-6 3xl:h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                    ></path>
                  </svg>
                  Apple ile kaydol
                </LoginButtons>

                <div className="my-1.5 flex items-center justify-start max-w-[300px] gap-x-2 ">
                  <div className="w-full h-[1px] bg-[#2f3336] " />
                  <span className="text-[15px] font-normal leading-6">
                    veya
                  </span>
                  <div className="w-full h-[1px] bg-[#2f3336]" />
                </div>

                <LoginButtons className="secondary">Hesap Oluştur</LoginButtons>

                <p className="leading-3 text-[11px] text-[#71767b] tracking-wide mb-[60px] ">
                  By signing up, you agree to the{" "}
                  <Link className="text-[#1d9bf0] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link className="text-[#1d9bf0] hover:underline break-words">
                    Privacy Policy
                  </Link>
                  , including{" "}
                  <Link className="text-[#1d9bf0] hover:underline">
                    Cookie Use.
                  </Link>{" "}
                </p>

                <span className="text-[17px]  leading-6 font-bold mb-5 ">
                  Zaten bir hesabın var mı?
                </span>
                <LoginButtons className="third">Giriş yap</LoginButtons>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-x-5 px-4 py-3 text-[#71767b] text-[13px] flex-wrap   ">
          {footer.map((f, index) => (
            <Link to="/" key={index} className="my-[4px] hover:underline ">
              <span>{f}</span>
            </Link>
          ))}

          <span className="my-[5px]">&copy; {date.getFullYear()} X Corp.</span>
        </div>
      </div>
    </>
  );
}
