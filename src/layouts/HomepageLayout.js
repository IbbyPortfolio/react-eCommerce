import React from 'react';
import Header from './../componenets/Header';
import Footer from './../componenets/Footer';

const HomepageLayout = (props) => {
   return (
      <div className='fullHeight'>
         <Header {...props} />
         {props.children}
         <Footer />
      </div>
   );
};

export default HomepageLayout;
