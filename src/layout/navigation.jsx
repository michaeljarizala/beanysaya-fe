import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <ul className="flex gap-[55px] items-center p-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </>
    )
}

export default Navigation