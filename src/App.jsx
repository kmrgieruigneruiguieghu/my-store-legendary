import React from "react";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom"; 

const router = createBrowserRouter([ 
  { 
    path: "/", 
    element: <Home /> 
  }, 
  { 
    path: "registration", 
    element: <Registration /> 
  },
  { 
    path: "login", 
    element: <Login /> 
  }, 
  { 
    path: "cart", 
    element: <Cart /> 
  }, 
  ]) 

const App = () => { 
  return ( 
    <RouterProvider router={router}/> 
  ) 
} 

export default App