import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/login');
	};
	return (
		<div className='navbar'>
			<div className='navContainer'>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<span className='logo'>Booking</span>
				</Link>
				{user ? (
					<div className='navItems'>
						{user.username}
						<button onClick={handleLogout} className='navButton'>
							Logout
						</button>
					</div>
				) : (
					<div className='navItems'>
						<button className='navButton'>Register</button>
						<button className='navButton'>Login</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
