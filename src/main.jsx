import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layouts/Root';
import ErrorPage from './Pages/ErrorPage';
import Home from './Components/HomePage/Home';
import Iframe from './Components/Iframe/Iframe';
import AddMovies from './Pages/AddMovies';
import AdminProfile from './Pages/AdminProfile';
import UpdateMovies from './Pages/UpdateMovies';
import MoviesCard from './Pages/MoviesCard';
import Customize from './Pages/Customize';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          const res = await fetch('http://localhost:4000/movies');
          if (!res.ok) throw new Error("Failed to load movies");
          return res.json();
        }
      },
      {
        path: '/iframe',
        element: <Iframe />
      },
      {
        path: '/dashboard',
        element: <AdminProfile />,
        loader: async () => {
          const res = await fetch('http://localhost:4000/movies');
          if (!res.ok) throw new Error("Failed to load movies");
          return res.json();
        }
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/addMovies',
        element: <AddMovies />
      },
      {
        path: '/updateMovies/:id',
        element: <UpdateMovies />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:4000/movie/${params.id}`);
          if (!res.ok) throw new Error("Movie not found");
          return res.json();
        }
      },
      {
        path: '/moviesCard',
        element: <MoviesCard />
      },
      {
        path: '/customize',
        element: <Customize />
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
