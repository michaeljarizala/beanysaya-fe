import { useContext } from "react"
import Navigation from './navigation'
import Wrapper from './wrapper'
import ShoppingBacIcon from "../components/icons/shoppingBag"
import CoffeeBeanIcon from '../components/icons/coffeeBean'
import { CartContext } from "../components/sections/cartDrawer"

const Header = () => {
    const cartConsumer = useContext(CartContext)

    const handleClickShoppingBag = () => {
        cartConsumer.setCartDrawerToggle(!cartConsumer.cartDrawerToggle)
    }

    return (
        <Wrapper>
            <div className='flex flex-col justify-center h-[120px]'>
                <div className='flex gap-[100px] items-center'>
                    <div className='flex gap-1 items-center flex-[20%] text-2xl font-bold'>
                        <CoffeeBeanIcon />
                        <span>Beanysaya</span>
                    </div>
                    <div className='flex flex-[80%] justify-start bg-yellow w-[100%]'>
                        <div className='hidden md:block'>
                            <Navigation />
                        </div>
                        <div className='flex items-center w-[100%] justify-end bg-red'>
                            <div
                                onClick={handleClickShoppingBag}
                            >
                                <ShoppingBacIcon className="size-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header