import React from 'react';
import './Jobs.css';
import img1 from '../Assets/Jobs/security.jpg';
import img2 from '../Assets/Jobs/construciton.jpg';
import img3 from '../Assets/Jobs/home care.jpg';
import img4 from '../Assets/Jobs/hotels.jpeg';
import img5 from '../Assets/Jobs/clenaing.jpg';
import img6 from '../Assets/Jobs/m1.jpg';
import { Typography, makeStyles } from '@material-ui/core';

import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: 'center',
		fontSize: '55px',

		fontFamily: 'Roboto, sans-serif',
		color: '#181818',
		marginBottom: '30px',
	},
	[theme.breakpoints.down('sm')]: {
		Typography: {
			fontSize: '40px',
		},
	},
}));
export default function Job() {
	const classes = useStyles();
	AOS.init();
	return (
		<section
			id='portfolio'
			style={{ marginTop: '100px', marginBottom: '50px' }}
			className='portfolio'>
			<div className='container' data-aos='fade-up'>
				<div className='section-title'>
					<Typography className={classes.Typography}>
						<span style={{ color: '#1ab69d' }}> Job</span>
						Categories
					</Typography>
				</div>

				<div
					className='row portfolio-container'
					data-aos='fade-up'
					data-aos-delay='300'>
					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img
								src={img1}
								className='img-fluid'
								alt=''
								style={{ borderRadius: '10px' }}
							/>
							<div className='portfolio-info'>
								{/* <h5>SECURITY INDUSTRY</h5> */}
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-1.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='App 1'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
						<div className='portfolio-wrap'>
							<img
								src={img2}
								className='img-fluid'
								alt=''
								style={{ borderRadius: '10px' }}
							/>
							<div className='portfolio-info'>
								{/* <h5>CARE TAKER</h5> */}
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-2.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Web 3'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img
								src={img3}
								className='img-fluid'
								alt=''
								style={{ borderRadius: '10px' }}
							/>
							<div className='portfolio-info'>
								{/* <h5>CONSTRUCTION INDUSTRY</h5> */}
								<div className='portfolio-links'>
									<a
										href={img2}
										data-gall='portfolioGallery'
										className='venobox'
										title='App 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-card'>
						<div className='portfolio-wrap'>
							<img src={img4} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								{/* <h5>RESTAURANT / FAST FOOD</h5> */}
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-4.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Card 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
						<div className='portfolio-wrap'>
							<img
								src={img5}
								className='img-fluid'
								alt=''
								style={{ borderRadius: '10px' }}
							/>
							<div className='portfolio-info'>
								{/* <h5> CLEANING INDUSTRY</h5> */}
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-5.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Web 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img
								src={img6}
								className='img-fluid'
								alt=''
								style={{ borderRadius: '10px' }}
							/>
							<div className='portfolio-info'>
								{/* <h5>CONSTRUCTION SERVICES</h5> */}

								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-6.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='App 3'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
