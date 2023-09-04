import React from "react";
import ReactDom from "react-dom/client";
import Headercomponent from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Aboutus from "./Components/about";
import Error from "./Components/error";
import Contactus from "./Components/contact";
import Helpus from "./Components/help";
import Restrauntmenu from "./Components/RestrauntMenu";
import Menu from "./Components/menu";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Profile from "./Components/profile";

const Applayout = () => {
  return (
    <>
      <Headercomponent />
      <Outlet/>
      <Footer />
    </>
  );
};

const Iamcreatingrouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <Aboutus />,
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile/>,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/contactus",
        element: <Contactus />,
        errorElement: <Error />,
      },
      {
        path: "/helpus",
        element: <Helpus />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <Restrauntmenu />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Iamcreatingrouter} />); 
