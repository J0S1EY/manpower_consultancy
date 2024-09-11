import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <LandingPage /> 
            <Intro />
            <Services />
            <Cta/>
            <Portfolio />
            <Clients />
            <Footer />
        </>

    )
}

export default Home;

