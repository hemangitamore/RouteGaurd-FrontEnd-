import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import AdminLogin from '../components/AdminLogin';
import AdminDashBoard from './AdminDashBoard';
import VehiclesDashBoard from './VehiclesDashBoard';

import TripDashBoard from './TripDashBoard';
import TripForm from './TripForm';

const Home = () => {
    return (
        <>
            <Hero />
   
           
         
           
            <Portfolio />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

