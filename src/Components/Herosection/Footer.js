import React from 'react';

export default function Footer() {
	return (
		<div>
			<footer className='footer pt-lg-5 pt-4 bg-dark text-light'>
				<div className='container mb-4 py-4 pb-lg-5'>
					<div className='row gy-4'>
						<div className='col-lg-3 col-md-6 col-sm-4'>
							<div className='mb-4 pb-sm-3'>
								<a className='d-inline-block' href='city-guide-home-v1.html'>
									<img src='img/logo/logo-light.svg' width={116} alt='Logo' />
								</a>
							</div>
							<ul className='nav nav-light flex-column'>
								<li className='nav-item mb-2'>
									<a
										className='nav-link p-0 fw-normal text-light text-nowrap'
										href='mailto:example@gmail.com'>
										<i className='fi-mail mt-n1 me-1 align-middle text-primary' />
										example@gmail.com
									</a>
								</li>
								<li className='nav-item mb-2'>
									<a
										className='nav-link p-0 fw-normal text-light text-nowrap'
										href='tel:4065550120'>
										<i className='fi-device-mobile mt-n1 me-1 align-middle text-primary' />
										(406) 555-0120
									</a>
								</li>
							</ul>
						</div>
						{/* Links*/}
						<div className='col-lg-2 col-md-3 col-sm-4'>
							<h3 className='fs-base text-light'>Quick links</h3>
							<ul className='list-unstyled fs-sm'>
								<li>
									<a className='nav-link-light' href='#'>
										Top cities
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										Accommodation
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										Cafes &amp; restaurants
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										Events
									</a>
								</li>
							</ul>
						</div>
						{/* Links*/}
						<div className='col-lg-2 col-md-3 col-sm-4'>
							<h3 className='fs-base text-light'>Profile</h3>
							<ul className='list-unstyled fs-sm'>
								<li>
									<a className='nav-link-light' href='#'>
										My account
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										Favorites
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										My listings
									</a>
								</li>
								<li>
									<a className='nav-link-light' href='#'>
										Add listing
									</a>
								</li>
							</ul>
						</div>
						{/* Subscription form*/}
						<div className='col-lg-4 offset-lg-1'>
							<h3 className='h4 text-light'>Subscribe to our newsletter</h3>
							<p className='fs-sm mb-4 opacity-60'>
								Don’t miss any relevant vacancies!
							</p>
							<form
								className='form-group form-group-light rounded-pill'
								style={{ maxWidth: '500px' }}>
								<div className='input-group input-group-sm'>
									<span className='input-group-text text-muted'>
										<i className='fi-mail' />
									</span>
									<input
										className='form-control'
										type='email'
										placeholder='Your email'
									/>
								</div>
								<button
									className='btn btn-primary btn-sm rounded-pill'
									type='button'>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='py-4 border-top border-light'>
					<div className='container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2'>
						{/* Copyright*/}
						<p className='order-lg-1 order-2 fs-sm mb-2 mb-lg-0'>
							<span className='text-light opacity-60'>
								© All rights reserved. Made by{' '}
							</span>
							<a
								className='nav-link-light fw-bold'
								href='https://createx.studio/'
								target='_blank'
								rel='noopener'>
								Createx Studio
							</a>
						</p>
						<div className='d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4'>
							{/* Links*/}
							<div className='d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4'>
								<a className='nav-link-light px-2 mx-1' href='#'>
									About
								</a>
								<a className='nav-link-light px-2 mx-1' href='#'>
									Blog
								</a>
								<a className='nav-link-light px-2 mx-1' href='#'>
									Support
								</a>
								<a className='nav-link-light px-2 mx-1' href='#'>
									Contacts
								</a>
							</div>
							<div className='d-flex align-items-center'>
								{/* Language switcher*/}
								<div className='dropdown'>
									<a
										className='nav-link nav-link-light dropdown-toggle fs-sm align-items-center p-0 fw-normal'
										href='#'
										id='langSwitcher'
										data-bs-toggle='dropdown'
										role='button'
										aria-expanded='false'>
										<i className='fi-globe mt-n1 me-2 align-middle' />
										Eng
									</a>
									<ul
										className='dropdown-menu dropdown-menu-dark my-1'
										aria-labelledby='langSwitcher'>
										<li>
											<a className='dropdown-item text-nowrap py-1' href='#'>
												<img
													className='me-2'
													src='img/flags/de.png'
													width={20}
													alt='Deutsch'
												/>
												Deutsch
											</a>
										</li>
										<li>
											<a className='dropdown-item text-nowrap py-1' href='#'>
												<img
													className='me-2'
													src='img/flags/fr.png'
													width={20}
													alt='Français'
												/>
												Français
											</a>
										</li>
										<li>
											<a className='dropdown-item text-nowrap py-1' href='#'>
												<img
													className='me-2'
													src='img/flags/es.png'
													width={20}
													alt='Español'
												/>
												Español
											</a>
										</li>
									</ul>
								</div>
								{/* Socials*/}
								<div className='ms-4 ps-lg-2 text-nowrap'>
									<a
										className='btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2'
										href='#'>
										<i className='fi-facebook' />
									</a>
									<a
										className='btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2'
										href='#'>
										<i className='fi-twitter' />
									</a>
									<a
										className='btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2'
										href='#'>
										<i className='fi-telegram' />
									</a>
									<a
										className='btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2'
										href='#'>
										<i className='fi-messenger' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
