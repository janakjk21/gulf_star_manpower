import React, { Suspense, useEffect } from 'react';
import Aos from 'aos';
// import './theme.min.css';
import img1 from '../../Assets/hero-img-removebg.webp';
import { lazy } from 'react'; // Import the 'lazy' function
import { Helmet } from 'react-helmet';
const Loginitem = lazy(() => import('./Loginitem'));
const Fasterwayto = lazy(() => import('./Fasterwayto'));

const Clients = lazy(() => import('../Clients'));
const Footer = lazy(() => import('../Footer'));
const Job = lazy(() => import('../Job'));
const Apply = lazy(() => import('../Apply'));
const ModalE = lazy(() => import('./ModalE'));
const Nav = lazy(() => import('./Nav'));

export default function Hero3() {
	useEffect(() => {
		const img = new Image();
		img.src = img1;

		// Optional: Add a listener for the 'load' event to know when the image has finished loading
		img.addEventListener('load', () => {
			// Image has been loaded
			console.log('Image loaded');
		});

		// Optional: Add a listener for the 'error' event to handle any loading errors
		img.addEventListener('error', () => {
			// Error occurred while loading the image
			console.log('Error loading image');
		});

		// Cleanup function to remove event listeners (optional)
		return () => {
			img.removeEventListener('load', () => {});
			img.removeEventListener('error', () => {});
		};
	}, []);

	Aos.init();
	return (
		<>
			<Helmet>
				<title>Gulf Star Overseas</title>

				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='keywords'
					content='best manpower in nepal, manpower recruitment, jobs in the middle east, nepali job seekers, gulfstaroverseas'
				/>
				<meta
					name='description'
					content='Gulf Star Overseas is the best manpower recruitment agency in Nepal. We offer recruitment services for jobs in the Middle East, Europe, and other countries. We are dedicated to providing our clients with the best possible service and helping them find the perfect job for their needs.'
				/>
			</Helmet>
			<section className=' align-items-center'>
				<main className='page-wrapper ' style={{ marginTop: '60px' }}>
					<section className='container py-5 mt-5  '>
						<div className='row align-items-center mt-md-2'>
							<div className='col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0'>
								<img
									data-aos='zoom-in-up'
									className='img-fluid custom-responsive-image'
									src={img1}
									width={746}
									alt='Hero'
									style={{ maxWidth: '100vw', height: 'auto' }}
								/>
							</div>
							<div className='col-lg-5 order-lg-1 pe-lg-0 '>
								<h1
									className='display-5 mb-4 me-lg-n5 text-lg-start text-center mb-4'
									style={{ color: '#181818' }}>
									Gulf Star
									<span className='dropdown d-inline-block'>
										<a
											className=' text-decoration-none'
											href='/'
											aria-expanded='false'
											style={{ color: '#EE4A62' }}>
											Overseas
										</a>
									</span>
								</h1>
								<p
									className='text-lg-start text-center mb-4 mb-lg-5 fs-lg'
									style={{ color: '#181818' }}>
									Rely on a trusted manpower agency with a proven track record
									of delivering top-notch employees from Nepal to Gulf,
									Malaysia, and other parts of the world
								</p>
								{/* Search form*/}
								<div className='me-lg-n5'>
									<form className='form-group d-block d-md-flex position-relative rounded-md-pill me-lg-n5'>
										<div className='input-group input-group-lg border-end-md'>
											<span className='input-group-text text-muted rounded-pill ps-3'>
												{/* <i className='fi-search' /> */}
											</span>
											<input
												className='form-control'
												type='text'
												placeholder='What are you looking for?'
											/>
										</div>
										<hr className='d-md-none my-2' />
										<div className='d-sm-flex'>
											<div
												className=' w-100 mb-sm-0 mb-3'
												data-bs-toggle='select'>
												<button
													className='btn btn-link btn-lg ps-2 ps-sm-3'
													type='button'>
													<i className='fi-list me-2' />
													<span className='dropdown-toggle-label'></span>
												</button>
												<input type='hidden' />
												<ul className='dropdown-menu'>
													<li>
														<a className='dropdown-item' href='/'>
															<i className='fi-cafe fs-lg opacity-60 me-2' />
															<span className='dropdown-item-label'>
																Food &amp; Drink
															</span>
														</a>
													</li>
												</ul>
											</div>
											<button
												className='btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3'
												type='button'
												style={{
													background:
														'linear-gradient(-90deg, #31b978 0%, #1ab69d)',
												}}>
												Search
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					{/* <Smallcomponent /> */}
				</main>
			</section>

			<Suspense fallback={<div>Loading...</div>}>
				<Loginitem />
				<Fasterwayto />
				<ModalE></ModalE>

				<Clients />
				<Job />

				<Apply />
				<Footer />
			</Suspense>
		</>
	);
}
