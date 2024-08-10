import { createContext, useContext } from "react"
import Button from "../ui/button"
import TextInput from "../ui/input/text";
import Trash from "../icons/trash";
import XIcon from "../icons/x";
import { PopupContext } from "../ui/popup";
import CheckoutForm from "../ui/forms/checkout";

export const CartContext = createContext({
    items: [],
    cartTotal: 0,
    cartDrawerToggle: false,
    checkoutToggle: false,

    setItems: () => {},
    setCartTotal: () => {},
    setCartDrawerToggle: () => {},
    setPopupToggle: () => {},
});

const Section = (props) => {
    const {} = props
    const cartConsumer = useContext(CartContext)
    const popupConsumer = useContext(PopupContext)

    const handleItemDelete = (item) => {
        let updatedCart = cartConsumer.items.filter((i) => i.id !== item.id)
        let updatedCartTotal = cartConsumer.cartTotal -= item.subtotal
        cartConsumer.setItems(updatedCart)
        cartConsumer.setCartTotal(updatedCartTotal)
    }

    const handleClose = () => {
        cartConsumer.setCartDrawerToggle(!cartConsumer.cartDrawerToggle)
    }

    const handleCheckout = () => {
        cartConsumer.setCartDrawerToggle(!cartConsumer.cartDrawerToggle)
        popupConsumer.setToggle(!popupConsumer.toggle)
        popupConsumer.setHeading("BEANYSAYA CHECKOUT")
        popupConsumer.setChildren(
            <div className="flex flex-col justify-center">
                <CheckoutForm heading="BEANYSAYA CHECKOUT" />
            </div>
        )
    }

    return (
        <div
            className={`
                fixed
                flex
                flex-col
                h-[100%]
                min-w-[400px]
                shadow-2xl
                top-0
                right-0
                z-[999]
                bg-zinc-50
                p-8
                duration-500
                ${cartConsumer.cartDrawerToggle ? 'transition-transform -translate-x-[0px]' : 'transition-transform translate-x-[1000px]'}
        `}>
            <div className="flex w-[100%] justify-end items-center">
                <div className="cursor-pointer border-zinc-900 border-2 rounded-[100px]" onClick={() => handleClose()}>
                    <XIcon />
                </div>
            </div>
            {cartConsumer.items && cartConsumer.items.length > 0 ? (
                <>
                    <div className="text-xl font-bold text-zinc-900">Your Order</div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="text-xl">Total</div>
                        <div className="text-xl font-bold">{cartConsumer.cartTotal ? cartConsumer.cartTotal : 0}</div>
                    </div>
                    <div className="w-[100%] mt-5">
                        <Button className="w-[100%]" label="CHECKOUT" onClick={() => handleCheckout()} />
                    </div>
                    <hr className="bg-zinc-300 my-5 h-[2px]" />
                    <div className="flex flex-col gap-5">
                        <div className="font-bold">
                            PRODUCTS
                        </div>
                        <div className="flex flex-col gap-10">
                            {cartConsumer.items && cartConsumer.items.length > 0 && cartConsumer.items.map((item) => (
                                <div key={item.id} className="flex gap-5">
                                    <div className="">
                                        <img className="w-[50px] h-[50px] rounded-[10px]" src={item.featuredImage} alt={item.title} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-lg font-medium">
                                            {item.title}
                                        </div>
                                        <div className="flex gap-10 text-zinc-500 items-center">
                                            <div>
                                                {item.price}
                                            </div>
                                            <div>
                                                {item.quantity}x
                                            </div>
                                            <div>
                                                <Trash onClick={() => handleItemDelete(item)} className="w-[20px] h-[20px]" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            <TextInput  />
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center mt-10">
                    <div>Your cart is empty.</div>
                </div>
            )}
        </div>
    )
}

export default Section