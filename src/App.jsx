import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import HeroSection from './components/Section/HeroSection';
import Breadcrumbs from './components/Product/Breadcrumbs';
import BackToTopButton from './components/Other/BackToToButton';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        {/* <HeroSection /> */}
        {/* <Breadcrumbs /> */}
        <Outlet />
        <Footer />
        <BackToTopButton />
      </UserProvider>
    </>
  );
}

export default App;
