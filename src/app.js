import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";


// Component Composition
const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
    
      },
      {
        path:"/contact",
        element:<Contact/>,
    
      },
      {
        path:"/restaurantmenu/:resId",
        element : <RestaurantMenu />
      }
    ],
    errorElement : <Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);







