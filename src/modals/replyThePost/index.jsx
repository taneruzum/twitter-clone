import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import TextInputBottom from "~/components/textInputBottom";

import { useAccount } from "~/store/auth/hooks";
function ReplyThePost({ close, post }) {
  const textareaRef = useRef();
  const [active, setActive] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const currentAccount = useAccount();

  const checkTextLength = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setTextLength(textarea.value.length);
  };
  useEffect(() => {}, [textLength]);
  return (
    <div className="w-[600px]">
      <div className="w-full h-[3.313rem] px-3 flex items-center justify-between">
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
        <button className="flex items-center justify-start min-h-[32px] min-w[56px] bg-[color:var(--background-primary)] hover:bg-[#1d7df01a] rounded-full px-4 py-1 ">
          <div className="flex items-center justify-start gap-x-1 text-left font-bold text-[15px] leading-5 break-words  min-h-[24px]   text-[color:var(--color-primary)] rounded-full    ">
            <span className="text-[14px] leading-4 font-[verdana]">
              Taslaklar
            </span>
          </div>
        </button>
      </div>
      <div className="pt-1 px-4">
        <div className=" flex relative pt-3 gap-3   z-10">
          <div className="flex flex-col items-center justify-start">
            <Link
              className="w-10 h-10 rounded-full"
              to={`/${post.account.fullName}`}
            >
              <img
                src={post.account.avatar}
                className="w-10 h-10 rounded-full object-cover "
                alt=""
              />
            </Link>
            <div className="h-full w-0.5 bg-[#333639] mt-1"></div>
          </div>
          <div className="flex-1 flex-col ">
            <div className="pb-3">
              <header className="leading-5 flex items-center gap-2 mb-0.5">
                <Link
                  to={`/${post.account.fullName}`}
                  className="hover:underline flex items-center font-bold"
                >
                  {post.account.fullName}
                  {post.account?.verified && (
                    <svg
                      className="text-[#1d9bf0] ml-0.5 h-[1.172rem] "
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill="currentColor"
                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                      ></path>
                    </svg>
                  )}
                </Link>
                <div className="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
                  <div>@{post.account.username}</div>
                  <div className="w-0.5 h-0.5 rounded-full bg-[color:var(--color-base-secondary)]" />
                  <div>17s</div>
                </div>
              </header>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
            <div className="flex flex-1 gap-x-1 pt-1 pb-4 text-[color:var(--color-base-secondary)] ">
              <span className="text-[15px] text-[color:var(--color-primary)]">
                {post.account.username}
              </span>
              <span> adlı kullanıcıya yanıt olarak</span>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <div className="border-b border-[color:var(--background-third)]">
            <div className="flex flex-col ">
              <div className="flex">
                <div className="mr-3 pt-3">
                  <img
                    src={currentAccount.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className=" pt-[4px] flex flex-col flex-1 justify-center ">
                  <div className="flex flex-col w-full  border-b border-[color:var(--background-third)]">
                    <div className="py-3 w-full text-xl h-full">
                      <textarea
                        ref={textareaRef}
                        onClick={() => {
                          setActive(true);
                        }}
                        id="auto-expanding-textarea"
                        onInput={checkTextLength}
                        className=" w-full min-h-[96px]   h-auto placeholder:text-[color:var(--color-base-secondary)] break-words flex-wrap  bg-[color:var(--background-primary)] outline-none text-[20px] text-[color:var(--color-base)] overflow-y-hidden  resize-none leading-6"
                        placeholder="Yanıtını gönder"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <TextInputBottom textLength={textLength} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyThePost;

ReplyThePost.propTypes = {
  post: PropTypes.object,
  close: PropTypes.any,
};
