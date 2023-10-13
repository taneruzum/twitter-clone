import AppearanceModal from "~/modals/appearance";
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
];

export default modals;
