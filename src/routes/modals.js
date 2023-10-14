import AppearanceModal from "~/modals/appearance";
import PremiumModal from "~/modals/premium";
import ReplyThePost from "~/modals/replyThePost";
import StatsModal from "~/modals/stats";

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
    name: "statsmodal",
    element: StatsModal,
  }
];

export default modals;
