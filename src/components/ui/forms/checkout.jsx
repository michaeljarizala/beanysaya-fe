import { useContext, useState, useEffect } from "react"
import TextInput from "../input/text"
import { CartContext } from "../../sections/cartDrawer"
import { PopupContext } from "../popup"
import Button from "../button"
import CoffeeBeanIcon from "../../icons/coffeeBean"
import axios from "axios"

const CheckoutForm = (props) => {
    const { heading, className } = props
    const cartConsumer = useContext(CartContext)
    const popupConsumer = useContext(PopupContext)
    const [formState, setFormState] = useState({})
    const [placeOrder, setPlaceOrder] = useState(false)

    const onChange = (e) => {
        console.log(e.target.value)
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleOrder = () => {
        setFormState((prev) => ({ ...prev, total: cartConsumer.cartTotal }))
        setPlaceOrder(true)
    }

    const submitOrder = async () => {
        await setFormState((prev) => ({ ...prev, total: cartConsumer.cartTotal }))
        await axios.post("http://localhost:3001/api/products", formState)
        .then((res) => {
            setPlaceOrder(false)
            if (res.data && res.data.success) {
                popupConsumer.setToggle(!popupConsumer.toggle)
            }
        })
    }

    useEffect(() => {
        if (placeOrder) {
            submitOrder()
        }
    }, [placeOrder])

    

    return (
        <div className={`
            flex
            flex-col
            gap-3
            ${className}
        `}>
            <div className="flex justify-center items-center gap-3 mb-5">
                <div className='flex justify-center gap-1 items-center text-2xl font-bold'>
                    <CoffeeBeanIcon />
                    <span>Beanysaya</span>
                </div>
                <div className="flex justify-center gap-1 items-center text-2xl text-orange-400 italic">XpressCheckout</div>
            </div>
            <div className="flex justify-between overflow-y-scroll">
                <div className="flex flex-[40%] flex-col px-5 mt-5 gap-5">
                    <div className="text-emerald-600 font-black">CART SUMMARY</div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold">Total</div>
                        <div className="font-bold">{cartConsumer.cartTotal}</div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {cartConsumer.items && cartConsumer.items.map((item) => (
                            <div key={item.id} className="flex gap-5">
                                <div className="">
                                    <img className="w-[50px] h-[50px] rounded-[10px]" src={item.featuredImage} alt={item.title} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-md font-medium">
                                        {item.title}
                                    </div>
                                    <div className="flex gap-10 text-sm text-zinc-500 items-center">
                                        <div>
                                            {item.price}
                                        </div>
                                        <div>
                                            {item.quantity}x
                                        </div>
                                        {/* <div>
                                            <Trash onClick={() => handleItemDelete(item)} className="w-[20px] h-[20px]" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-[60%] flex-col justify-start">
                    <div className="flex flex-col gap-5 p-5">
                        <div className="text-zinc-500">Contact & Delivery Information</div>
                        <div className="flex flex-col gap-5">
                            <TextInput
                                className="
                                    w-[100%]
                                    h-[50px]
                                    indent-3
                                    bg-zinc-200
                                "
                                name="fullName"
                                placeholder="Full name"
                                onChange={(e) => onChange(e)}
                            />
                            <TextInput
                                className="
                                    w-[100%]
                                    h-[50px]
                                    indent-3
                                    bg-zinc-200
                                "
                                name="deliveryAddress"
                                placeholder="Delivery address"
                                onChange={(e) => onChange(e)}
                            />
                            <TextInput
                                className="
                                    w-[100%]
                                    h-[50px]
                                    indent-3
                                    bg-zinc-200
                                "
                                name="mobileNumber"
                                placeholder="Mobile number"
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="text-zinc-500">Payment Information</div>
                        <div className="flex flex-col gap-5">
                            <TextInput
                                className="
                                    w-[100%]
                                    h-[50px]
                                    indent-3
                                    bg-zinc-200
                                "
                                name="cardNumber"
                                placeholder="Card Number"
                                onChange={(e) => onChange(e)}
                            />
                            <div className="flex gap-3">
                                <TextInput
                                    className="
                                        w-[100%]
                                        h-[50px]
                                        indent-3
                                        bg-zinc-200
                                    "
                                    name="cardExpiration"
                                    placeholder="Expiration"
                                    onChange={(e) => onChange(e)}
                                />
                                <TextInput
                                    className="
                                        w-[100%]
                                        h-[50px]
                                        indent-3
                                        bg-zinc-200
                                    "
                                    name="cvv"
                                    placeholder="CVV"
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                            <Button className="font-bold text-zinc-200 w-[100%]" label="PLACE ORDER" onClick={(e) => handleOrder(e)} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="flex flex-col gap-5 items-end px-3">
                    <Button className="font-bold text-zinc-200 w-[200px]" label="PLACE ORDER" />
                </div>
            </div> */}
        </div>
    )
}

export default CheckoutForm