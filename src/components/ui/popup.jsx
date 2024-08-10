import { createContext, useContext } from "react"
import XIcon from "../icons/x";

export const PopupContext = createContext({
    toggle: false,
    children: null,
    heading: "",

    setToggle: () => {},
    setChildren: () => {},
    setHeading: () => {},
});

const Popup = (props) => {
    const { heading } = props
    const popupConsumer = useContext(PopupContext)

    const handleClose = () => {
        popupConsumer.setToggle(!popupConsumer.toggle)
    }

    return (
        <div className={`
            flex-col
            absolute
            fixed
            top-0
            bg-zinc-900
            bg-opacity-50
            w-[100%]
            h-[100%]
            z-[99999]
            items-center
            justify-center
            ${popupConsumer.toggle ? 'flex' : 'hidden'}
        `}>
            <div className="
                shadow-xl
                rounded-[30px]
                bg-zinc-50
                py-[15px]
                w-[320px]
                md:w-[900px]
            ">
                <div className="
                    flex justify-end
                    mt-4 mr-5
                ">
                    <div
                        className="
                            flex justify-end
                            cursor-pointer border-zinc-900 border-2 rounded-[100px]
                        "
                        onClick={() => handleClose()}
                    >
                        <XIcon />
                    </div>
                </div>
                { popupConsumer.children }
            </div>
        </div>
    )
}

export default Popup