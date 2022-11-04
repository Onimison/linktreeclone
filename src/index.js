import React from 'react';
import ReactDOM from 'react-dom';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import App from './App';
import Contact from './components/Contact/contact';
import ErrorPage from './errorpage';
import './index.css';





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)