import React from 'react';
import Footer from '../componenets/Footer';
import Header from './../componenets/Header';

const MainLayout = (props) => {
   return (
      <div>
         <Header />
         <div className='main'>{props.children}</div>
         <Footer />
      </div>
   );
};

export default MainLayout;
