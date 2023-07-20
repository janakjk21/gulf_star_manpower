import React, { useEffect } from 'react';
import './theme.min.css';
import img1 from '../../Assets/hero-img-removebg.png';
import Loginitem from './Loginitem';
// import img2 from '../../Assets/1-min-min_2.JPG';
// import Director from './Director';
// import Message from '../Message ';
import Fasterwayto from './Fasterwayto';
import Testimonial from './Testimonial';
import Clients from '../Clients';
import Footer from '../Footer';
// import Contactus from '../contactus/Contactus';
import Job from '../Job';
import Apply from '../Apply';
// import Blogs from '../Blog/Blogs';
import ModalE from './ModalE';
import Nav from './Nav';
import Aos from 'aos';
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
			<React.Suspense fallback={<div>Loading...</div>}>
				<section id='hero' className='d-flex align-items-center'>
					{' '}
					<main className='page-wrapper ' style={{ marginTop: '60px' }}>
						<Nav></Nav>
						<section className='container py-5 mt-5 mb-lg-3 '>
							<div className='row align-items-center mt-md-2'>
								<div className='col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0'>
									<img
										data-aos='zoom-in-up'
										className='d-block mx-auto'
										src={img1}
										width={746}
										alt='Hero'
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
															'-webkit-linear-gradient(right, #31b978 0%, #1ab69d 100%) !important',
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
			</React.Suspense>

			<Loginitem />
			<Fasterwayto />
			<ModalE></ModalE>
			{/* <Message /> */}
			<Clients />
			<Job />
			{/* <Testimonial /> */}
			{/* <Blogs /> */}
			<Apply />
			<Footer />
		</>
	);
}

// const Smallcomponent = () => {
// 	return (
// 		<section className='container pb-5 mb-md-3 mt-n2 mt-sm-0'>
// 			<h2 className='h3 text-center text-sm-start mb-sm-4'>Top companies</h2>
// 			<div className='tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush'>
// 				<div className='tns-carousel-inner'>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img className='swap-to' src={img2} width={196} alt='Microsoft' />
// 							<img
// 								className='swap-from'
// 								src={img2}
// 								width={196}
// 								alt='Microsoft'
// 							/>
// 						</a>
// 					</div>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img
// 								className='swap-to'
// 								src='img/job-board/company/indeed.svg'
// 								width={196}
// 								alt='Indeed'
// 							/>
// 							<img
// 								className='swap-from'
// 								src='img/job-board/company/indeed-g.svg'
// 								width={196}
// 								alt='Indeed'
// 							/>
// 						</a>
// 					</div>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img
// 								className='swap-to'
// 								src='img/job-board/company/cocacola.svg'
// 								width={196}
// 								alt='Coca Cola'
// 							/>
// 							<img
// 								className='swap-from'
// 								src='img/job-board/company/cocacola-g.svg'
// 								width={196}
// 								alt='Coca Cola'
// 							/>
// 						</a>
// 					</div>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img
// 								className='swap-to'
// 								src='img/job-board/company/slack.svg'
// 								width={196}
// 								alt='Slack'
// 							/>
// 							<img
// 								className='swap-from'
// 								src='img/job-board/company/slack-g.svg'
// 								width={196}
// 								alt='Slack'
// 							/>
// 						</a>
// 					</div>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img
// 								className='swap-to'
// 								src='img/job-board/company/walmart.svg'
// 								width={196}
// 								alt='Walmart'
// 							/>
// 							<img
// 								className='swap-from'
// 								src='img/job-board/company/walmart-g.svg'
// 								width={196}
// 								alt='Walmart'
// 							/>
// 						</a>
// 					</div>
// 					<div className='pb-1'>
// 						<a className='swap-image' href='job-board-employer-single.html'>
// 							<img
// 								className='swap-to'
// 								src='img/job-board/company/google.svg'
// 								width={196}
// 								alt='Google'
// 							/>
// 							<img
// 								className='swap-from'
// 								src='img/job-board/company/google-g.svg'
// 								width={196}
// 								alt='Google'
// 							/>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
