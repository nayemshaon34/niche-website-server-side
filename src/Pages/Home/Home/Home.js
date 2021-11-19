import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Menubar from '../Menubar/Menubar';
import Reviews from '../Reviews/Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import ViewItems from '../ViewItems/ViewItems';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <ViewItems></ViewItems>
            <Subscribe></Subscribe>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;