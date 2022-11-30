import { Link, Routes, Route } from 'react-router-dom';
const Header = () => {

    return (
        <header>
            <Routes>
                <Route
                    path='/repositories'
                    element={<div><strong>Zona no apta para manazas</strong></div>}
                />
            </Routes>

            <h1>madre mía</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/overview'>Overview</Link>
                    </li>
                    <li>
                        <Link to='/repositories'>Repositories</Link>
                    </li>
                    <li>
                        <Link to='/packages'>Packages</Link>
                    </li>
                    <li>
                        <Link to='/people'>People</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header