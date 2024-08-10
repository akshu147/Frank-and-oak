import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './assets/pages/Dashboard';
import Color from './assets/pages/Color';
import Profile from './assets/pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>
  },
  {
    path:"/Color",
    element:<Color/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
