import logo from '../assets/images/logo.png'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt="logo" className='nav-img'/>
        </nav>
    )
}