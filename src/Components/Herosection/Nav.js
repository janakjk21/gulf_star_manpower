import React from 'react';
import './theme.min.css';
import componey_logo from '../../Assets/logo3 FINAL.jpg';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
export default function Nav() {
	return (
		<div>
			<header
				className='navbar navbar-expand-lg navbar-light fixed-top'
				data-scroll-header>
				<div className='container'>
					<a
						className='navbar-brand me-3 me-xl-4'
						href='city-guide-home-v1.html'>
						<img
							className='d-block'
							src={componey_logo}
							width={250}
							alt='Finder'
						/>
					</a>
					<Dropdown>
						<Dropdown.Toggle
							id='dropdown-basic'
							className='navbar-toggler ms-auto'>
							<button
								className='navbar-toggler ms-auto'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='/navbarNav'
								aria-controls='navbarNav'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon' />
							</button>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='//action-1'>Action</Dropdown.Item>
							<Dropdown.Item href='//action-2'>Another action</Dropdown.Item>
							<Dropdown.Item href='//action-3'>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<div className='collapse navbar-collapse order-lg-2' id='navbarNav'>
						<ul
							className='navbar-nav navbar-nav-scroll'
							style={{ maxHeight: '35rem' }}>
							{/* Demos switcher*/}
							<li className='nav-item dropdown me-lg-2'>
								<a
									className='nav-link dropdown align-items-center pe-lg-4'
									href='/'
									data-bs-toggle='dropdown'
									role='button'
									aria-expanded='false'>
									Demos
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
									<span
										className='d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end'
										style={{ width: '1px', height: '30px' }}
									/>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a
											className='dropdown-item'
											href='real-estate-home-v1.html'>
											<i className='fi-building fs-base opacity-50 me-2' />
											Real Estate Demo
										</a>
									</li>
									<li className='dropdown-divider' />
									<li>
										<a className='dropdown-item' href='car-finder-home.html'>
											<i className='fi-car fs-base opacity-50 me-2' />
											Car Finder Demo
										</a>
									</li>
									<li className='dropdown-divider' />
									<li>
										<a className='dropdown-item' href='job-board-home-v1.html'>
											<i className='fi-briefcase fs-base opacity-50 me-2' />
											Job Board Demo
										</a>
									</li>
									<li className='dropdown-divider' />
									<li>
										<a className='dropdown-item' href='city-guide-home-v1.html'>
											<i className='fi-map-pin fs-base opacity-50 me-2' />
											City Guide Demo
										</a>
									</li>
									<li className='dropdown-divider' />
									<li>
										<a className='dropdown-item' href='index.html'>
											<i className='fi-home fs-base opacity-50 me-2' />
											Main Page
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='components/typography.html'>
											<i className='fi-list fs-base opacity-50 me-2' />
											Components
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='docs/dev-setup.html'>
											<i className='fi-file fs-base opacity-50 me-2' />
											Documentation
										</a>
									</li>
								</ul>
							</li>
							{/* Menu items*/}
							<li className='nav-item dropdown active'>
								<Link
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Home
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='city-guide-home-v1.html'>
											Homepage v.1
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='city-guide-home-v2.html'>
											Homepage v.2
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Catalog
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='city-guide-catalog.html'>
											Grid with Filters
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='city-guide-single.html'>
											Single Place - Gallery
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-single-info.html'>
											Single Place - Info
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-single-reviews.html'>
											Single Place - Reviews
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link'
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Account
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-account-info.html'>
											Personal Info
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-account-favorites.html'>
											Favorites
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-account-reviews.html'>
											Reviews
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-account-notifications.html'>
											Notifications
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='signin-light.html'>
											Sign In
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='signup-light.html'>
											Sign Up
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Vendor
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-add-business.html'>
											Add Business
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-business-promotion.html'>
											Business Promotion
										</a>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-vendor-businesses.html'>
											My Businesses
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Pages
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='city-guide-about.html'>
											About
										</a>
									</li>
									<li className='dropdown'>
										<a
											className='dropdown-item dropdown-toggle'
											href='/'
											role='button'
											data-bs-toggle='dropdown'
											aria-expanded='false'>
											Blog
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a
													className='dropdown-item'
													href='city-guide-blog.html'>
													Blog Grid
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='city-guide-blog-single.html'>
													Single Post
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a
											className='dropdown-item'
											href='city-guide-contacts.html'>
											Contacts
										</a>
									</li>
									<li className='dropdown'>
										<a
											className='dropdown-item dropdown-toggle'
											href='/'
											role='button'
											data-bs-toggle='dropdown'
											aria-expanded='false'>
											Help Center
										</a>
										<ul className='dropdown-menu'>
											<li>
												<a
													className='dropdown-item'
													href='city-guide-help-center.html'>
													Help Topics
												</a>
											</li>
											<li>
												<a
													className='dropdown-item'
													href='city-guide-help-center-single-topic.html'>
													Single Topic
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a className='dropdown-item' href='city-guide-404.html'>
											404 Not Found
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item d-lg-none'>
								<a
									className='nav-link'
									href='/signin-modal'
									data-bs-toggle='modal'>
									<i className='fi-user me-2' />
									Sign in
								</a>
							</li>
						</ul>
					</div>
					<a
						className='btn btn-primary btn-sm rounded-pill ms-2 order-lg-3 collapse navbar-collapse '
						href='city-guide-add-business.html'>
						<span className='d-none d-sm-inline'>+9848767600</span>
					</a>
					<a
						className='btn btn-primary btn-sm rounded-pill ms-2 order-lg-3 collapse navbar-collapse'
						href='city-guide-add-business.html'>
						<span className='d-none d-sm-inline'>+9848767600</span>
					</a>
				</div>
			</header>
		</div>
	);
}
