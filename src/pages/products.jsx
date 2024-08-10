import { useState, useEffect } from "react"
import ItemGrid from "../components/sections/itemGrid"
import ProductCard from "../components/ui/card/productCard"
import Wrapper from "../layout/wrapper"
import TextInput from "../components/ui/input/text"
import axios from "axios"

const I = () => {
    const [products, setProducts] = useState([])

    const loadProducts = async () => {
        let req = await axios.get("http://localhost:3001/api/products")
        req.data && req.data.success && setProducts(req.data.data)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <Wrapper>
            <div className="page__products flex gap-10 h-[100%]">
                {/* <div className="flex flex-[25%] flex-col h-[100vh]">
                    <TextInput
                        className="w-[100%] h-[45px]"
                        placeholder="Search"
                    />
                    <div className="flex flex-col gap-3 mt-10">
                        <div className="text-lg font-medium">ROASTING</div>
                        <div className="flex flex-col gap-3">
                            <RadioInput id="radioInput1" name="roastingFilter" label="Medium" selected={true} />
                            <RadioInput id="radioInput2" name="roastingFilter" label="Dark" />
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-[75%]">
                    <ItemGrid>
                        {products && products.length > 0 && products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ItemGrid>
                </div>
            </div>
        </Wrapper>
    )
}

export default I