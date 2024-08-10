import { useState } from "react"
import MagnifyingGlass from "../../icons/magnifyingGlass"

const TextInput = (props) => {
    const {
        className,
        defaultValue="",
        placeholder="",
        icon=null,
        name,
        onChange,
    } = props
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e) => {
        onChange(e)
        setValue(e.target.value)
    }

    return (
        <div className="relative w-[100%] max-h-[40px]">
            <input
                className={`
                    ${className}
                    indent-[35px]
                    bg-zinc-100
                    rounded-[10px]
                    h-[100%]
                    indent-[30px]
                    outline-0
                    border-0
                `}
                name={name}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
            {icon && (
                <div className="absolute inset-y-0 top-2 flex items-center ml-[10px]">
                    <MagnifyingGlass className="w-[20px] h-[20px]" />
                </div>
            )}
        </div>
    )
}

export default TextInput