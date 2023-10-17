


import PropTypes from "prop-types";

export default function PlanModal({close}) {
  return (
    <div>
        <button onClick={close}>
            plan date
        </button>

    </div>
  )
}
PlanModal.propTypes={
    close: PropTypes.any,

}




