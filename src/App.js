import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showcart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true);
  }
  const hideCartHandler = ()=>{
    setShowCart(false);
  }

  return (
    <>
      {showcart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
