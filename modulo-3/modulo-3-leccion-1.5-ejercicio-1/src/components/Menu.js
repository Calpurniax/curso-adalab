import Link from "./Link";
import '../styles/components/Menu.scss'

const Menu = ({ openInNewTab, handleNewTab }) => {
    return (
        <nav>
            <ul className='nav__links'>
                <Link
                    url={'https://adalab.es/blog/'}
                    text='Blog'
                    openInNewTab={openInNewTab}
                    handleNewTab={handleNewTab} />
                <Link
                    url={'https://adalab.es/contacto/'}
                    text='Contacto'
                    openInNewTab={openInNewTab}
                    handleNewTab={handleNewTab} />

            </ul>
        </nav >
    )
};
export default Menu