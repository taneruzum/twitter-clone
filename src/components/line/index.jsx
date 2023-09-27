import classNames from "classnames";
import PropTypes from "prop-types";
export default function Line({ size }) {
  return (
    <div
      className={classNames(`my-[1px] h-[1px] bg-[color:var(--background-third)] mx-auto`, {
        "w-[50%]": size === 50,
        "w-[90%]": size === 90,
        "w-full": size === 100,
      })}
    ></div>
  );
}

Line.propTypes = {
  size: PropTypes.number,
};
