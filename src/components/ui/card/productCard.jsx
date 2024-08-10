import { useContext } from "react"
import Button from "../button"
import { CartContext } from "../../sections/cartDrawer"

const ProductCard = (props) => {
    const {
        className,
        key,
        product,
    } = props
    const cartConsumer = useContext(CartContext)

    const handleAddToCart = async (d) => {
        let currentCart = cartConsumer.items
        let matchFound = false
        let matchedCartItem = null
        let filteredCart = []
        let cartItems = cartConsumer.items
        
        await Promise.all(currentCart.map((item) => {
            if (item.id === d.id) {
                matchFound = true
                matchedCartItem = item
                filteredCart = cartConsumer.items.filter((i) => i.id !== d.id)
            }
        }))

        
        if (matchFound) {
            cartConsumer.setItems(filteredCart)
            let quantity = matchedCartItem.quantity += 1
            let itemSubtotal = matchedCartItem.price * quantity

            matchedCartItem['subtotal'] = itemSubtotal

            cartConsumer.setItems((prev) => ([...prev, matchedCartItem]))
            cartItems = filteredCart
            cartItems.push(matchedCartItem)
        } else {
            let subtotal = 1 * d.price
            d['quantity'] = 1
            d['subtotal'] = subtotal
            if (currentCart.length > 0) {
                cartConsumer.setItems((prev) => ([...prev, d]))
                cartItems.push(d)
            } else {
                cartConsumer.setItems([d])
                cartItems = [d]
            }
        }

        let cartTotal = 0;
        await Promise.all(cartItems.map((i) => {
            cartTotal += i.subtotal
        }))
        cartConsumer.setItems(cartItems)
        cartConsumer.setCartTotal(cartTotal)

        if (!cartConsumer.cartDrawerToggle) {
            cartConsumer.setCartDrawerToggle(!cartConsumer.cartDrawerToggle)
        }
    }

    return (
        <div key={key} className={`flex flex-col mb-[35px] justify-between ${className}`}>
            <div className="">
                <img src={product.featuredImage} alt={product.title} className="rounded-[50px]" />
            </div>
            <div className="flex flex-col px-2 mt-3">
                <div className="text-2xl font-bold md:text-xl">{product.title}</div>
                <div className="text-lg text-zinc-500">{product.caption}</div>
            </div>
            <div className="flex flex-col px-2 mt-5">
                <div className="text-xl">{product.price}</div>
            </div>
            <div className="mt-8 w-[100%]">
                <Button label="ADD TO CART" className={"w-[100%]"} onClick={() => {
                    handleAddToCart(product)
                }} />
            </div>
        </div>
    )
}

export default ProductCard