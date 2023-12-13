
import AppearanceModal from "~/modals/appearance";
import PlanModal from "~/modals/planModal";
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
    name: "planModal",
    element: PlanModal,
  },
  {
    name: "statsmodal",
    element: StatsModal,
  },
];

export default modals;
