import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Portfoliosection from "./Portfoliosection";
import Aboutsection  from "./Aboutsection";
import Contactus from "./Contactus";
import Footer from "./Footer";
import CopyWrite from "./Copywrite";
import Modals from "./Modalsection";


const App = () => {
    return (
        <div>
        <Navbar />
        <Header /> 
        <Portfoliosection /> 
        <Aboutsection />  
        <Contactus />
        <Footer />
        <CopyWrite />
        <Modals />
        </div>
    );
};

export default App;