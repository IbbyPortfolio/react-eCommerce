import React from 'react';
import './default.scss';

import Header from './componenets/Header';
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
