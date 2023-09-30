
import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';

export default function LoginButtons({ className, children, ...props }) {
    return (
        <button className={classNames("flex items-center justify-center rounded-full w-[300px] h-12 p-2 gap-1  ", {
            "bg-white text-[#0f1419] outline-none text-[18px] leading-6 font-bold hover:bg-[#e6e6e6] ": className === "primary",
            "bg-[#1d9bf0] text-[#e7e9ea] outline-none text-[18px] leading-6 font-bold mb-[10px] hover:bg-[#1a8cd8]": className === "secondary",
            "bg-transparent text-[#1d9bf0] outline-none  border border-[#536471] text-[18px] leading-6 font-bold mb-[10px] hover:bg-[#1d9bf01a]": className === "third",

            [className]: true
        })}>
            {children}
        </button>
    );
}

LoginButtons.propTypes = {
    className: PropTypes.string,
    props: PropTypes.object,
    children: PropTypes.node,
}

