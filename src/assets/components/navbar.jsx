
import '../css/navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../Larson.svg'
function Navbar() {
    return (
        <div className="navbar z-50">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className="w-24 h-auto" src={Logo} alt="Logo Portfolio" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="item">
                        <Link to='/' className='text-xl sm:text-sm lg:text-xl font-light'>Inicio</Link>    
                    </li>
                    <li className='item'>
                        <Link to='/contact' className='text-xl sm:text-sm lg:text-xl font-light'>Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar