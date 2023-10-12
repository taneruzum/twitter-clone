import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import ProfilePage from "~/pages/profile";
import MessagePage from "~/pages/message";
import ListPage from "~/pages/list";
import BookmarksPage from "~/pages/bookmarks";
import LoginPage from "~/pages/loginpage";

// import PremiumPage from "~/modals/premium"
// import PremiumPage from "~/modals/premium"


const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/message",
        element: <MessagePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/marks",
        element: <BookmarksPage />,
      },
      // {
      //     path: "/verified",
      //     element: <PremiumPage />
      // },
      {
        path: "/:fullName",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default routes;
