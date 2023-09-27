import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { numberFormat } from "~/utils/formats";

import { Popover } from "@headlessui/react";

export default function Topic({ item }) {
  return (
    <Link to="/" className="py-3 px-4 hover:bg-white/[0.03] w-full relative">
      <div className="text-[13px] text-[color:var(--color-base-secondary)] leading-4">{item.title} </div>
      <div className="text-[15px]  leading-5 font-bold mt-0.5">
        {item.topic.type === "tag" && "#"}
        {item.topic.value}
      </div>
      {item.postCount && (
        <div className="text-[13px] text-[color:var(--color-base-secondary)] mt-1 leading-4">
          {numberFormat(item.postCount)} posts
        </div>
      )}
      {/* <button
        className="w-[34.75px] h-[34.75px] text-[#71767b] rounded-full absolute top-1 right-2 flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setShowPop(!showPop);
        }}
      >
        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
        </svg>
      </button> */}
      <Popover className=" absolute top-1 right-2">
        <Popover.Button className="w-[34.75px] h-[34.75px] rounded-full outline-none  flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors">
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>

        <Popover.Panel className="absolute w-[384px] top-1 right-2 grid bg-[color:var(--background-primary)] shadow-box max-w-[calc(384px)] overflow-hidden rounded-xl z-[1]">
          <button
            type="button"
            className="hover:bg-white/[0.05] transition-colors text-left flex items-center justify-start gap-3 p-3  text-[15px] leading-5 font-bold"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <g>
                <path
                  fill="currentColor"
                  d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                ></path>
              </g>
            </svg>
            <p>İlgimi çekmiyor</p>
          </button>
          <button
            type="button"
            className="hover:bg-white/[0.05] transition-colors text-left flex items-center justify-start gap-3 p-3  text-[15px] leading-5 font-bold"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <g>
                <path
                  fill="currentColor"
                  d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                ></path>
              </g>
            </svg>
            <p>Bu gündem başlığı zararlı veya spam içeriyor</p>
          </button>
        </Popover.Panel>
      </Popover>
    </Link>
  );
}

Topic.propTypes = {
  item: PropTypes.object,
};
