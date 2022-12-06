import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import userImg from './download.jpg';
const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className='top'>
					<div className='left'>
						<div className='editButton'>Edit</div>
						<h1 className='title'>Information</h1>
						<div className='item'>
							<img src={userImg} alt='User Image' className='itemImg' />
							<div className='details'>
								<h1 className='itemTitle'>Umer</h1>
								<div className='detailItem'>
									<span className='itemKey'>Email:</span>
									<span className='itemValue'>umer@gmail.com</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Phone:</span>
									<span className='itemValue'>0304-8375994</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Address:</span>
									<span className='itemValue'>
										House#24 St. 34 G-9/3. Islamabad
									</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Country:</span>
									<span className='itemValue'>Pakistan</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<Chart aspect={3 / 1} title='User Spending ( Last 6 Months)' />
					</div>
				</div>
				<div className='bottom'>
					<h1 className='title'>Last Transactions</h1>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Single;
