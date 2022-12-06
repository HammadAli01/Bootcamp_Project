import './navbar.scss';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Navbar = () => {
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/login');
	};
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search...' />
					<SearchOutlinedIcon />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageOutlinedIcon className='icon' />
						English
					</div>
					{/* <div className='item'>
						<DarkModeOutlinedIcon
							className='icon'
							onClick={() => dispatch({ type: 'TOGGLE' })}
						/>
					</div> */}

					<div className='item'>
						<img
							src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
							className='avatar'
						/>
					</div>
					<div
						className='item'
						onClick={handleLogout}
						style={{ cursor: 'pointer' }}
					>
						Logout
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
