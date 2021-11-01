import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Sevices/Services';

// import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;