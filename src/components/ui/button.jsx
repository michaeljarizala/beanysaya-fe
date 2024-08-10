import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const { className, label="Click Me", link="", onClick } = props;
    const navigate = useNavigate()

    const handleClick = (e) => {
        if (link.includes('https://')) {
            window.location.href = link
        } else {
            navigate(link)
        }
    }

    return (
        <button
            className={`
                ${className}
                border-0 outline-0 shadow-lg bg-zinc-900 text-zinc-50 text-center rounded-[8px] p-3
                transition-all duration-500 hover:bg-gradient-to-l from-zinc-900 via-zinc-500 to-zinc-900
                bg-pos-0 hover:bg-pos-100 bg-size-200
            `}
            onClick={(e) => !onClick ? handleClick(e) : onClick(e)}
        >
            {label}
        </button>
    )
}

export default Button