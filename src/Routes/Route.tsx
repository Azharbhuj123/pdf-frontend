import DashboardLayout from "@/Layout/DashboardLayout";
import GlobalLayout from "@/Layout/GlobalLayout";
import Contact from "@/Pages/Contact";
import DashboardHome from "@/Pages/Dashboard/DashboardHome";
import DashboardReview from "@/Pages/Dashboard/DashboardReview";
import EditStory from "@/Pages/Dashboard/EditStory";
import Chapters from "@/Pages/Dashboard/Home Routes/Chapters";
import Default from "@/Pages/Dashboard/Home Routes/Default";
import Family from "@/Pages/Dashboard/Home Routes/Family";
import Questions from "@/Pages/Dashboard/Home Routes/Questions";
import AudioBook from "@/Pages/Dashboard/Step Routes/AudioBook";
import BookCover from "@/Pages/Dashboard/Step Routes/BookCover";
import Checkout from "@/Pages/Dashboard/Step Routes/Checkout";
import Controls from "@/Pages/Dashboard/Step Routes/Controls";
import DefaultStep from "@/Pages/Dashboard/Step Routes/DefaultStep";
import Rewritten from "@/Pages/Dashboard/Step Routes/Rewritten";
import Shipping from "@/Pages/Dashboard/Step Routes/Shipping";
import Home from "@/Pages/Home";
import HowItWork from "@/Pages/HowItWork";
import News from "@/Pages/News";
import Products from "@/Pages/Products";
import { useRoutes } from "react-router";

const Route = () => {
  return useRoutes([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "how-it-works",
          element: <HowItWork />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "contact-us",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <DashboardHome />,
          children: [
            {
              index: true,
              element: <Default />,
            },
            {
              path: "chapters",
              element: <Chapters />,
            },
            {
              path: "questions",
              element: <Questions />,
            },
            {
              path: "family",
              element: <Family />,
            },
          ],
        },
        {
          path: "edit-story",
          element: <EditStory />,
        },
        {
          path: "review",
          element: <DashboardReview />,
          children: [
            {
              index: true,
              element: <DefaultStep />,
            },
            {
              path: "rewritten",
              element: <Rewritten />,
            },
            {
              path: "audio-book",
              element: <AudioBook />,
            },
            {
              path: "book-cover",
              element: <BookCover />,
            },
            {
              path: "controls",
              element: <Controls />,
            },
            {
              path: "shipping",
              element: <Shipping />,
            },
            {
              path: "checkout",
              element: <Checkout />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Route;
