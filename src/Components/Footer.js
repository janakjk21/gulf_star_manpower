import React from 'react';
import './footer.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer id='footer'>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6'>
							<div className='footer-info'>
								<h3>Gulf Star Overseas</h3>
								<p>
									Samakhushi 10 <br />
									Kathmandu 44600
									<br />
									<br />
									<strong>Phone:</strong> +977 9801070016
									<br />
									<strong>Email:</strong> gulfstaroverseas@gmail.com
									<br />
								</p>
								<div className='social-links mt-3'>
									<Link href='#' className='twitter'>
										<FaFacebook />
									</Link>
									<Link href='#' className='facebook'>
										<FaYoutube />
									</Link>
									<Link href='#' className='instagram'>
										<ImTwitter></ImTwitter>{' '}
									</Link>

									<Link href='#' className='linkedin'>
										<FaLinkedin></FaLinkedin>{' '}
									</Link>
								</div>
							</div>
						</div>

						<div className='col-lg-2 col-md-6 footer-links'>
							<h4>Useful Links</h4>
							<ul>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<Link to='/'>Home</Link>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>{' '}
									<Link to='/aboutus' style={{ textDecoration: 'none' }}>
										{' '}
										ABOUT US
									</Link>{' '}
								</li>
								<li>
									<Link style={{ textDecoration: 'none' }} to='/documents'>
										Documents
									</Link>
								</li>
								<li>
									<Link to='/News' style={{ textDecoration: 'none' }}>
										{' '}
										News
									</Link>
								</li>
								<li>
									<Link style={{ textDecoration: 'none' }} to='/contactus'>
										contact Us
									</Link>
								</li>
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 footer-links'>
							<h4>Our Services</h4>
							<ul>
								<li>
									<i className='bx bx-chevron-right'></i> <Link href='#'></Link>
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>
									Training and Orientation
								</li>
								<li>
									<i className='bx bx-chevron-right'></i>
									Documentation
								</li>
								<li>
									<i className='bx bx-chevron-right'></i> Overseas Recruitment
								</li>
								<li>
									<i className='bx bx-chevron-right'></i> Deployment
								</li>
							</ul>
						</div>

						<div className='col-lg-4 col-md-6 footer-newsletter'>
							<h4>Our Slogans</h4>
							<p>your career partner</p>
							<form action='' method='post'>
								<input type='email' name='email' />
								<input type='submit' value='Submit' />
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='copyright'>
					&copy; Copyright{' '}
					<strong>
						<span>Janak_sapkota</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className='credits'>
					Designed by <Link href='linkedin'>Janak_sapkota</Link>
				</div>
			</div>
		</footer>
	);
}
