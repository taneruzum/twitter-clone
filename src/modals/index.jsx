import modals from "~/routes/modals";
import {useModal} from "~/store/modal/hooks";
import {removeModal} from "~/store/modal/actions";
import classNames from "classnames";
import PlanModal from "./planModal";

export default function Modal() {
	
	const modal = useModal()
	const currentModal = modals.find(m => m.name === modal.name)

	return (
		<div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-30">
			<div className={classNames("bg-[color:var(--background-primary)] w-[600px]  max-h-[90vh]  rounded-2xl",{
				"absolute top-16" : currentModal.element === PlanModal
			})}>
				{currentModal && <currentModal.element close={removeModal} post={modal.data}  />}
			</div>
		</div>
	)
}