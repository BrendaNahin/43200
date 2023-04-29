import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header >
            <h1 className= "titulo"> OMG SOY FRIKI</h1>
            <nav>
                <ul>
                    <li>FunkoPops</li>
                    <li>HomeDeco</li>
                    <li>Indumentaria</li>
                    <li>Comics</li>
                </ul>
            </nav>
            <CartWidget />

        </header>
    )
}

export default NavBar
