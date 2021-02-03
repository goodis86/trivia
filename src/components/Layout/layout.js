import React from 'react';

import './layout.css';
import Hoc from '../../HOC/hoc';


const layout  = (props) => (
  <Hoc>
  <div>
       
    </div>
    <main className='content'>
        {props.children}
    </main>
    </Hoc>
);

export default layout;