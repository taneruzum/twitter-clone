import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "~/components/button";
import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import { users } from "~/mock/users";
import { posts } from "~/mock/posts";

import { numberFormat } from "~/utils/formats";
import MyPosts from "./posts";
import Answers from "./answers";
import Highlights from "./highlights";
import Media from "./media";
import Likes from "./likes";

export default function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { fullName } = useParams();
  const user = users.find((user) => user.account.fullName === fullName);
  const post = posts.filter((post) => post.account.username === user.account.username);

 


  if (!user) {
    return <div>Kullanıcı yok</div>;
  }

  return (
    <>
      <div className="px-4 gap-x-7 flex items-center justify-start h-[3.313rem] sticky top-0 z-20 bg-[color:var(--background-primary-alpha)]  backdrop-blur-md">
        <div className="p-2 hover:bg-[color:var(--background-secondary)] rounded-full cursor-pointer -ml-2">
          <svg viewBox="0 0 24 24" className="h-[1.25rem]">
            <g>
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-start justify-center ">
          <div className="  flex gap-x-1 items-center justify-start   ">
            <span className="text-[1.25rem] font-bold text-[color:var(--color-base)] ">
              {user.account.fullName}
            </span>
            {user.account?.verified && (
              <svg
                viewBox="0 0 22 22"
                aria-label="Onaylanmış hesap"
                className="h-[1.25rem] text-[color:var(--color-primary)]"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </g>
              </svg>
            )}
          </div>
          <span className="text-[0.813rem] text-[color:var(--color-base-secondary)]">
            {numberFormat(post.length)} gönderi
          </span>
        </div>
      </div>
      <div className="w-full h-[199.46px] bg-gray-800"></div>
      <div className="w-full h-auto pt-3 px-4 mb-4">
        <div className="w-full flex justify-end items-start relative h-[4.291rem] ">
          <div className="h-[9.1rem] w-[9.1rem] rounded-full bg-cover object-cover absolute -top-[15%] -translate-y-1/2  left-0 border-4 border-[#000] mb-3">
            <img
              className="object-cover rounded-full w-full h-full"
              src={user.account.avatar}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <div className="h-[2.15rem] w-[2.15rem] rounded-full border border-[#536471] text-[#eff3f4] flex items-center justify-center hover:bg-[#eff3f41a] cursor-pointer">
              <svg className="h-[1.25rem]" viewBox="0 0 24 24">
                <g>
                  <path
                    fill="currentColor"
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="h-[2.15rem] w-[2.15rem] rounded-full border border-[#536471] text-[#eff3f4] flex items-center justify-center hover:bg-[#eff3f41a] cursor-pointer">
              <svg viewBox="0 0 24 24" className="h-[1.25rem]">
                <g>
                  <path
                    fill="currentColor"
                    d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
                  ></path>
                </g>
              </svg>
            </div>
            <Button size="normal" variant="white">
              Takip et
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center mt-1 mb-3">
          <div className=" flex gap-x-1 items-center justify-start">
            <span className="shrink-1 text-[1.25rem] font-bold text-[color:var(--color-base)] ">
              {user.account.fullName}
            </span>
            {user.account?.verified && (
              <svg
                viewBox="0 0 22 22"
                aria-label="Onaylanmış hesap"
                className="h-[1.25rem] text-[color:var(--color-primary)]"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </g>
              </svg>
            )}
          </div>

          <span className="text-[0.938rem] text-[color:var(--color-base-secondary)]">
            @{user.account.username}
          </span>
        </div>
        <div className="mb-5 break-words ">
          <span className="flex flex-col items-start justify-center">
            <span className="text-[color:var(--color-base)] break-words">
              {user.presentation?.description}
            </span>
            <div className="flex gap-x-1 items-center justify-start">
              <img
                className="h-[1.125rem]"
                alt="➖"
                draggable="false"
                src="https://abs-0.twimg.com/emoji/v2/svg/2796.svg"
                title="Koyu eksi işareti"
              />{" "}
              <Link
                to={"/"}
                className="text-[#1d9bf0] hover:underline text-[0.938rem]"
              >
                {" "}
                {user.presentation?.link}
              </Link>
            </div>
          </span>
        </div>
        <div className="mb-3 flex gap-x-3 text-[0.838rem] break-words text-[color:var(--color-base-secondary)] flex-wrap font-verdana ">
          <div className="flex items-center gap-x-1 ">
            <svg viewBox="0 0 24 24" className="h-[1.172rem]">
              <g>
                <path
                  fill="currentColor"
                  d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"
                ></path>
              </g>
            </svg>
            {user.presentation?.forWhat}
          </div>
          <div className="flex items-center gap-x-1">
            <svg className="h-[1.172rem]" viewBox="0 0 24 24">
              <g>
                <path
                  fill="currentColor"
                  d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
                ></path>
              </g>
            </svg>
            {user.presentation?.location}
          </div>
          <div className="flex items-center gap-x-1">
            <svg
              viewBox="0 0 24 24"
              className="h-[1.172rem]"
            >
              <g>
                <path fill="currentColor" d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
              </g>
            </svg>
            <Link
              to={"/"}
              className="text-[#1d9bf0] hover:underline text-[0.938rem]"
            >
              {" "}
              {user.presentation?.link}
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <svg viewBox="0 0 24 24" className="h-[1.172rem]">
              <g>
                <path
                  fill="currentColor"
                  d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"
                ></path>
              </g>
            </svg>
            {user.presentation?.dateOfJoin} tarihinde katıldı
          </div>
        </div>
        <div className="flex gap-x-5 items-center justify-start">
          <div className="flex items-center gap-x-1">
            <span className="text-[14px] text-[color:var(--color-base)] font-bold">{numberFormat(user.following)}</span>
            <span className="text-[14px] text-[color:var(--color-base-secondary)] ">Takip edilen</span>
          </div>
          <div className="flex items-center gap-x-1">
            <span className="text-[14px] text-[color:var(--color-base)] font-bold">{numberFormat(user.followers)}</span>
            <span className="text-[14px] text-[color:var(--color-base-secondary)] ">Takipçi</span>
          </div>
        </div>

      </div>
      <Tab activeTab="posts">
        <StickyHeader>
          <Tab.Items>
            <Tab.Item id="posts">Gönderiler</Tab.Item>
            <Tab.Item id="answers">Yanıtlar</Tab.Item>
            <Tab.Item id="highlights">Öne Çıkanlar</Tab.Item>
            <Tab.Item id="media">Medya</Tab.Item>
            <Tab.Item id="likes">Beğeni</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="posts">
          <MyPosts post={post} />
        </Tab.Content>
        <Tab.Content id="answers">
          <Answers />
        </Tab.Content>
        <Tab.Content id="highlights">
          <Highlights />
        </Tab.Content>
        <Tab.Content id="media">
          <Media />
        </Tab.Content>
        <Tab.Content id="likes">
          <Likes />
        </Tab.Content>

      </Tab>
    </>
  );
}

