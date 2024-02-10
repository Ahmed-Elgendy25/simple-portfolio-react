import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

// Routing

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
