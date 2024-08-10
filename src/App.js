import { Routes, Route } from "react-router-dom"
import Header from "./layout/header"
import Home from "./pages/home"
import Products from "./pages/products"
import { CartContext } from "./components/sections/cartDrawer"
import { useEffect, useState } from "react"
import CartDrawer from "./components/sections/cartDrawer"
import Popup from "./components/ui/popup"
import { PopupContext } from "./components/ui/popup"

function App() {
  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem("cart")))
  const[cartTotal, setCartTotal] = useState(
    window.localStorage.getItem("cartTotal") ? window.localStorage.getItem("cartTotal")
    : 0
  )
  const [cartDrawerToggle, setCartDrawerToggle] = useState(false)
  const [popupToggle, setPopupToggle] = useState(false)
  const [popupChildren, setPopupChildren] = useState(null)
  const [popupHeading, setPopupHeading] = useState("")

  const cartTotalCalculation = async (itms) => {
    if (itms) {
      await Promise.all(itms.map((i) => {
        console.log(parseFloat(i.subtotal))
        setCartTotal(parseFloat(cartTotal) + parseFloat(i.subtotal))
      }))
    }
  }

  // useEffect(() => {
  //   window.localStorage.setItem("cart", JSON.stringify(cartItems))
  //   window.localStorage.setItem("cartTotal", cartTotal, 0)
  // },[])

  useEffect(() => {
    if (cartItems) {
      window.localStorage.setItem("cart", JSON.stringify(cartItems))
    } else {
      window.localStorage.setItem("cart", JSON.stringify([]))
    }
    window.localStorage.setItem("cartTotal", cartTotal)
  }, [cartItems])

  return (
    <PopupContext.Provider
      value={{
        toggle: popupToggle,
        children: popupChildren,
        heading: popupHeading,

        setToggle: setPopupToggle,
        setChildren: setPopupChildren,
        setHeading: setPopupHeading,
      }}
    >
      <CartContext.Provider
        value={{
          items: cartItems ?? [],
          cartTotal: cartTotal ?? parseFloat(0),
          cartDrawerToggle,
          popupToggle,

          setItems: setCartItems,
          setCartTotal,
          setCartDrawerToggle,
          setPopupToggle,
        }}
      >
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <CartDrawer />
        <Popup />
      </CartContext.Provider>
    </PopupContext.Provider>
  );
}

export default App;
