import React from "react";
import { Routes, Route } from "react-router-dom";
import Authpage from './Pages/authpage';
import Frontpage from './Pages/frontpage';
// import Productpage from './Pages/productpage'
import Productpage from './Pages/productpage.js';
import Cartpage from './Pages/cartpage';

const App = () => {
  return (
    <>
     <Routes>
        <Route path='/product' exact element={<Productpage/>}></Route>
      </Routes>

      <Routes>
        <Route path="/login" exact element={<Authpage />} />

      </Routes>
      <Routes>
        <Route path="/" exact element={<Frontpage />} />
      </Routes>
      <Routes>
        <Route path="/cart" exact element={<Cartpage />} />
      </Routes>
     

    </>

  )

}

export default App;
