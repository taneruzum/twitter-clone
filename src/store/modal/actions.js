import store from "~/store";
import { _setModal, _removeModal } from "~/store/modal";

export const setModal = (name, data ) => //data=false vardı sildim

  store.dispatch(_setModal({ name, data }))
  ;
  
export const removeModal = () => store.dispatch(_removeModal());
