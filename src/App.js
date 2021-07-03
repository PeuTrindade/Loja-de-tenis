import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Button from "./components/Button";

function App(props){
    return(
       <>
       <header>
       <Navbar/>
       </header>
       <main>
       <Filter/>
       <Button/>
       </main>
       </>
    )
}
export default App;