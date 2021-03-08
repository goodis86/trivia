//import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import axios from 'axios';
//import iconv from 'iconv-lite';

// defining an interceptor for all axios get requests to decode special characters as well!

// axios.interceptors.response.use(response => {
//   let ctype = response.headers["content-type"];
//   if (ctype.includes("charset=ISO-8859-1")) {
//       response.data = iconv.decode(response.data, 'ISO-8859-1');
//   }
//   console.log(response)
//   return response;
// })

// axios.defaults.headers.get['Accept'] = 'application/json';
// axios.defaults.responseEncoding = 'utf8';


ReactDOM.render(
 
    <App/>,

  document.getElementById('root')
);

