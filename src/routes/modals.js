import AppearanceModal from "~/modals/appearance";
import PlanModal from "~/modals/planModal";
import PremiumModal from "~/modals/premium";
import ReplyThePost from "~/modals/replyThePost";

const modals = [
  {
    name: "appearance",
    element: AppearanceModal,
  },
  {
    name: "premium",
    element: PremiumModal,
  },
  {
    name: "replyThePost",
    element: ReplyThePost,
    
  },
  {
    name:"planModal",
    element: PlanModal
  }
];

export default modals;
