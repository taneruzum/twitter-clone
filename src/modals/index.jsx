import modals from "~/routes/modals";
import { useModal } from "~/store/modal/hooks";
import { removeModal } from "~/store/modal/actions";
import classNames from "classnames";
import { useEffect } from "react";

export default function Modal({ onClose }) {


	const modal = useModal()
	const currentModal = modals.find(m => m.name === modal.name)
	console.log(modal, currentModal);

	function handleBackgroundClick(e) {
		// Tıklanan alan modalın arkasındaysa modalı kapat
		if (e.target === e.currentTarget) {
			removeModal();
		}
	}


	return (
		<div onClick={handleBackgroundClick} className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-30">
			<div className={classNames("bg-[color:var(--background-primary)] w-[600px]  max-h-[90vh] z-40 rounded-2xl", {
				"absolute top-16": currentModal.name === 'planModal'
			})}>
				{currentModal && <currentModal.element close={removeModal} post={modal.data} />}
			</div>
		</div>
	)
}