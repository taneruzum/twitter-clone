import PropTypes from "prop-types";

export default function StickyHeader({ title, children }) {
  return (
    <header className="sticky top-0 z-10 bg-[color:var(--background-primary-alpha)]  backdrop-blur-md">
      <h3 className="flex items-center h-[3.313rem] px-4 text-xl font-bold ">
        {title}
      </h3>
      {children} {/* sana özel , takip edilenler kısmı top tarafında */}
    </header>
  );
}
StickyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
