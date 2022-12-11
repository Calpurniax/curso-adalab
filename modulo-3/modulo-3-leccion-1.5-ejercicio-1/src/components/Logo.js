import '../styles/components/Logo.scss'
const Logo = ({ logo }) => {
    return (
        <figure className='header__logo'>
            <a href='https://adalab.es/'>
                <img src={logo} title='Adalab' alt='Logo de Adalab' />
            </a>
        </figure>
    )
};
export default Logo