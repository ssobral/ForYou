import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import V1 from './pages/V1.jsx';
import V2 from './pages/V2.jsx';
import Quiz1 from './pages/Quiz1.jsx';
import Quiz2 from './pages/Quiz2.jsx';
import Quiz3 from './pages/Quiz3.jsx';
import Memory from './pages/Memory.jsx';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/v1', element: <V1 /> },
        { path: '/v2', element: <V2 /> },
        { path: '/Quiz1', element: <Quiz1 /> },
        { path: '/Quiz2', element: <Quiz2 /> },
        { path: '/Quiz3', element: <Quiz3 /> },
        { path: '/memoria', element: <Memory /> }
      ],
    },
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
