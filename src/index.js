import React from 'react';
import ReactDOM from "react-dom/client";
import GlobalStyle from './globalStyle';
import Routes from './routes'

// ReactDOM.render(
//   <>
//        <Routes/>
//       <GlobalStyle/>
//   </>,
//    document.getElementById("root")
// );

const rootElement = document.getElementById('root');
const rooter = ReactDOM.createRoot(rootElement);
rooter.render(<Routes/>)
rooter.render(<GlobalStyle/>)
