import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Components/HomePage/Home';
import Iframe from './Components/Iframe/Iframe';
import AddMovies from './Pages/AddMovies';
import AdminProfile from './Pages/AdminProfile';
import UpdateMovies from './Pages/UpdateMovies';
import MoviesCard from './Pages/MoviesCard';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/movies')
      },
      {
        path: '/iframe',
        element: <Iframe></Iframe>
      },
      {
        path: '/profile',
        element: <AdminProfile></AdminProfile>
      },
      {
        path: '/addMovies',
        element: <AddMovies></AddMovies>
      },
      {
        path: '/updateMovies',
        element: <UpdateMovies></UpdateMovies>
      },
      {
        path: '/moviesCard',
        element: <MoviesCard></MoviesCard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
