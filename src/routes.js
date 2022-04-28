// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './Containers/Home';
// import Users from './Containers/Users';


// const Routes = () => {
//     return (
//         <Router>

//             <Route exact path="/">
//                 <Home />
//             </Route>
//             <Route path="/usuarios">
//                 <Users />
//             </Route>

//         </Router>
//     )
// }

// export default Routes;

import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Containers/Home';
import Users from './Containers/Users';

const rootElement = document.getElementById('root');
render(
        <Router>
        <Routes>
        <Route path="./" element={Home}/>
        <Route path="./Users" element={Users}/>
        </Routes>
        </Router>, 

)

export default rootElement