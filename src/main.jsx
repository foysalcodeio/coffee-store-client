import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AuthProvider from "./provider/AuthProvider";
import Users from "./components/Users";
import Main from "./layout/Main";
import UpdateUser from "./components/UpdateUser";
import AllComponent from "./components/AllComponent";
import CoffeeDetails from "./components/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      // Root path should be defined only once
      
      {
        path: "/",
        element: <AllComponent></AllComponent>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/home",
        element: <AllComponent></AllComponent>,
      },
      
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch(`http://localhost:5000/user`)
      },
      {
        path: "/user/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);

