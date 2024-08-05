import React from "react";
import ShoppingCart from "./components/shoppingCard&products/shoppingCard";  
import NavBar  from "./components/shoppingCard&products/navbar";




function App() {
  return (
    <>
    <NavBar/>
    <main className="container"><ShoppingCart/>
    </main>
    </>
    
    
  );
}

export default App;
