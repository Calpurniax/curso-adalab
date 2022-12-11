import Logo from "./Logo"
import Menu from "./Menu"
import '../styles/components/Header.scss'

const Header = ({ logo, openInNewTab, handleNewTab }) => {
    return (
        <header className='header'>
            <Logo
                logo={logo}></Logo>
            <Menu
                openInNewTab={openInNewTab}
                handleNewTab={handleNewTab}></Menu>
        </header>
    )
}
export default Header
