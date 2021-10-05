import { Link } from 'react-router-dom';
import './header.css';
<header className="css"></header>
function Header() {
    return(
        <div>
            <div className='header'>
                <div>
                    <h2>The SKKRT Library System</h2>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div id='profileSection'>
                    <Link to='/books'>Books</Link>
                </div>


                <div>
                    <a href='/logout'>Logout</a>
                </div>
            </div>
        </div>
    )
}
export default Header;