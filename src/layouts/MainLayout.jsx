import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Home from '../components/Home';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
