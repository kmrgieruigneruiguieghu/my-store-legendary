import React from "react";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Favourites from "./pages/Favourites";
import Copyright from "./pages/Copyright";
import Glass from "./pages/Glass";
import Silicone from "./pages/Silicone";
import Leather from "./pages/Leather";
import Rights from "./pages/Rights";
import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom"; 
import { Telegram } from "@mui/icons-material";

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
  { 
    path: "contacts", 
    element: <Contacts /> 
  },  
  { 
    path: "favourites", 
    element: <Favourites /> 
  },  
  { 
    path: "copyright", 
    element: <Copyright /> 
  },   
  { 
    path: "glass", 
    element: <Glass /> 
  },
  { 
    path: "silicone", 
    element: <Silicone /> 
  },
  { 
    path: "leather", 
    element: <Leather /> 
  },
  { 
    path: "rights", 
    element: <Rights /> 
  },
  ]) 

const App = () => { 
  return ( 
    <RouterProvider router={router}/> 
  ) 
} 

export default App