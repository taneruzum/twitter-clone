import PropTypes from "prop-types";
import classNames from "classnames";

export default function LoginButtons({ className, children, ...props }) {
  return (
    <button
      className={classNames(
        "flex items-center justify-center rounded-full w-[300px] text-[15px] leading-5 outline-none font-bold  p-x-4 h-[40px] gap-1 ",
        {
          "bg-white text-[#0f1419] hover:bg-[#e6e6e6]  ":
            className === "primary",
          "bg-[#1d9bf0] text-[#e7e9ea]   mb-[8px] hover:bg-[#1a8cd8] ":
            className === "secondary",
          "bg-transparent text-[#1d9bf0]   border border-[#536471]   mb-[8px] hover:bg-[#1d9bf01a]":
            className === "third",

          [className]: true,
        }
      )}
    >
      {children}
    </button>
  );
}

LoginButtons.propTypes = {
  className: PropTypes.string,
  props: PropTypes.object,
  children: PropTypes.node,
};
