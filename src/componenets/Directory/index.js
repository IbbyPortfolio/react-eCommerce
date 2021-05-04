import React from 'react';
import ShopMen from '../../assets/shopMens.jpg';
import ShopWomen from '../../assets/shopWomen.jpg';
import './styles.scss';

const Directory = () => {
   return (
      <div className='directory'>
         <div className='wrap'>
            <div
               className='item'
               style={{ backgroundImage: `url(${ShopWomen})` }}
            >
               <a>Shop Women</a>
            </div>
            <div style={{ backgroundImage: `url(${ShopMen})` }}>
               <a>Shop Men</a>
            </div>
         </div>
      </div>
   );
};

export default Directory;
