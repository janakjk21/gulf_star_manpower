import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../Assets/icons/employee.png';
import icon2 from '../../Assets/icons/employee (1).png';
import icon3 from '../../Assets/icons/lock.png';
import icon4 from '../../Assets/icons/suitcase-black-shape.png';
import './jk.css';
export default function Loginitem() {
	return (
		<div>
			<section id='hero' className='d-flex align-items-center'>
				<div
					className='container'
					data-aos='fade-up'
					data-aos-delay='300'
					style={{ borderRadius: '52px' }}>
					<div className='row icon-boxes'>
						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div className='icon-box'>
								<div className='icon'>
									<img src={icon1} style={{ height: '75px' }} alt='icon1'></img>
								</div>
								<h4 className='title'>
									<Link to='jobseekerlogin'>Job Seeker Login</Link>
								</h4>
								<p className='description'>
									To monitor your status, browse for jobs, set up alerts, and
									apply for available employment opportunities, create or login
									to your job seeker account.
								</p>
							</div>
						</div>
						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div className='icon-box'>
								<div className='icon'>
									<img src={icon2} style={{ height: '75px' }} alt='icon2'></img>
								</div>
								<h4 className='title'>
									<Link to='jobseekerlogin'>Reference Login</Link>
								</h4>
								<p className='description'>
									To monitor your candidates' status, search for jobs, set up
									alerts, and apply for available employment openings, register
									or login.
								</p>
							</div>
						</div>

						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div className='icon-box'>
								<div className='icon'>
									<img src={icon3} style={{ height: '75px' }} alt='icon'></img>
								</div>
								<h4 className='title'>
									<a href='facebook.com'>
										<Link to='/login'>Staff Login</Link>
									</a>
								</h4>
								<p className='description'>
									To access your account as Staff, please log in.
								</p>
							</div>
						</div>

						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div className='icon-box'>
								<div className='icon'>
									<img src={icon4} style={{ height: '75px' }} alt='icon'></img>
								</div>
								<h4 className='title'>
									<Link to='/contactus'>Contact us</Link>
								</h4>
								<p className='description'>
									Please log in and contact us if you have any questions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
