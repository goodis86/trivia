import React from 'react';

import './layout.css';
// import Hoc from '../../HOC/hoc';


const layout  = (props) => (
 
    <main className='content'>
        {props.children}
    </main>
   
);

export default layout;