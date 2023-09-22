import PropTypes from "prop-types";
export default function Line({width}){
    
    return(
        <div className={`w-[${width}%] h-[1px] bg-slate-700 mx-auto` }>
            

        </div>
    )
}

Line.propTypes = {
    width: PropTypes.number
  }