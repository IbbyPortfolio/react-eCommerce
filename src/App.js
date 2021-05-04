import React from 'react';
import Header from './componenets/Header';
import './default.scss';
import Homepage from './pages/Homepage';

const App = (props) => {
   return (
      <div className='App'>
         <Header />
         <div className='main'>
            <Homepage />
         </div>
      </div>
   );
};

export default App;
