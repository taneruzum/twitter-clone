import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

export default function SidebarSection({ title, children, more }) {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
            <h5 className="py-3 px-4 flex items-center text-xl  font-extrabold leading-6">
                {title}
            </h5>
            <div className=" flex flex-col items-start justify-center ">
                {children}
            </div>
            {more && (
                <Link to={more} className="w-full rounded-b-2xl h-[52px] flex items-center px-4 text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03] "> Daha fazla göster</Link>
            )}

        </section>

    )
}
SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false,
}