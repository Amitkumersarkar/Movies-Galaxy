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
import AuthProvider from './Providers/AuthProvider';
import ViewMovies from './Pages/ViewMovies';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import NewsPortal from './Pages/NewsPortal';

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
          const res = await fetch('https://movies-galaxy-server.vercel.app/movies');
          if (!res.ok) throw new Error("Failed to load movies");
          return res.json();
        }
      },
      {
        path: '/all-movies',
        element: <ViewMovies></ViewMovies>,
        loader: async () => {
          const res = await fetch('https://movies-galaxy-server.vercel.app/movies');
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
        element: (<PrivateRoutes>
          <AdminProfile />
        </PrivateRoutes>),
        loader: async () => {
          const res = await fetch('https://movies-galaxy-server.vercel.app/movies');
          if (!res.ok) throw new Error("Failed to load movies");
          return res.json();
        }
      },
      {
        path: '/profile',
        element: (<PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>)
      },
      {
        path: '/addMovies',
        element: <AddMovies />
      },
      {
        path: '/updateMovies/:id',
        element: <UpdateMovies />,
        loader: async ({ params }) => {
          const res = await fetch(`https://movies-galaxy-server.vercel.app/movie/${params.id}`);
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
        element: <Customize />,

      }
      ,
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/news',
        element: <NewsPortal></NewsPortal>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
