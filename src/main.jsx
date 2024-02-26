import React from 'react';
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pratica from './pages/Pratica.jsx';
import Academico from './pages/Academico.jsx';
import Pessoal from './pages/Pessoal.jsx';
import Home from './pages/Home.jsx';
import './main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/pratica",
        element: <Pratica />
      },
      {
        path: "/academico",
        element: <Academico />
      },
      {
        path: "/pessoal",
        element: <Pessoal />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
