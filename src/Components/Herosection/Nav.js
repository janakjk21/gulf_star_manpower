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
							<Dropdown.Item href='//action-1'>
								<Link to='/aboutus' className='dropdown-item'>
									About us
								</Link>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<Link className='dropdown-item' to='/aboutnepal'>
									About Nepal
								</Link>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<Link className='dropdown-item' to='/recruimentproces'>
									Recruitment process
								</Link>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<Link className='dropdown-item' href='/demand'>
									Demand samples
								</Link>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<Link className='dropdown-item' to='/documents'>
									Official Documents
								</Link>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<a
									className='nav-link'
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Services
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
							</Dropdown.Item>
							<Dropdown.Item href='//action-1'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Apply Online
								</a>
							</Dropdown.Item>

							<Dropdown.Item href='//action-2'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									News
								</a>
							</Dropdown.Item>
							<Dropdown.Item href='//action-3'>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<div className='collapse navbar-collapse order-lg-2' id='navbarNav'>
						<ul
							className='navbar-nav navbar-nav-scroll'
							style={{ maxHeight: '35rem' }}>
							{/* Demos switcher*/}
							<li className='nav-item dropdown me-lg-2'>
								<Link
									className='nav-link dropdown align-items-center pe-lg-4'
									to='/'
									data-bs-toggle='dropdown'
									role='button'
									aria-expanded='false'>
									Home
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
									<span
										className='d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end'
										style={{ width: '1px', height: '30px' }}
									/>
								</Link>
							</li>
							{/* Menu items*/}
							<li className='nav-item dropdown active'>
								<Link
									className='nav-link '
									to='/about'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									About us
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<Link to='/aboutus' className='dropdown-item'>
											About us
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' to='/aboutnepal'>
											About Nepal
										</Link>
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
									Recruitment
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
								<ul className='dropdown-menu'>
									<li>
										<Link className='dropdown-item' to='/recruimentproces'>
											Recruitment process
										</Link>
									</li>

									<li>
										<Link
											className='dropdown-item'
											href='city-guide-single-info.html'>
											Recruitment Category
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' href='/demand'>
											Demand samples
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' to='/documents'>
											Official Documents
										</Link>
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
									Services
									<IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Apply Online
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link '
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									News
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
