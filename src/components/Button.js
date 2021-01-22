import React from 'react';
import '../App.css';


const button1 = (props) => {
    
    
    // buttonHandler = (props) => {
    //     console.log('method runs');
    //     // comparison of our answer and correct answer
    //     // somehow we have to update our counters and 
    //   }
     
        return (
            <button 
            className='Button'
            // onClick={this.buttonHandler}>
            onClick={props.click}>
                {'answer'}
            </button>
        );
    }


export default button1;



