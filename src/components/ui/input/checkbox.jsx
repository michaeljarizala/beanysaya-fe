import { useState } from "react"
import MagnifyingGlass from "../../icons/magnifyingGlass"

const RadioInput = (props) => {
    const {
        className,
        id="radioInput",
        selected=false,
        label="Radio",
        checked,
        name,
    } = props
    const [check, setCheck] = useState(selected)

    const handleChange = (e) => {
        setCheck(e.target.checked)
    }

    return (
        <div className="flex gap-3 items-center">
            <input
                id={id}
                name={name}
                className={``}
                type="radio"
                checked={check}
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioInput