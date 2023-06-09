import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../src/components/Error/Error";
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contract from './components/Contract/Contract'
import Friends from './components/Fridends/Friends';
import FriendDetail from './components/FriendDetails/FriendDetail';
const router=createBrowserRouter([
  {
    path:'',
    element: <div><Home/></div>,
    children:[
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contract',
        element:<Contract/>
      },
      {
        path:'friend/:friendId',
        element:<FriendDetail/>
      },
      {
        path:'friends',
        element:<Friends/>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
   

  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
