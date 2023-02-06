import React from 'react';
import { makeStyles } from '@material-ui/core';
import img from '../Assets/DINESH PAUDEL CHHETRI MBC CARD.jpg';
import Them from './Them';
import Testimonial from './Testimonial';
import './style.css';
import './responsive.css';
import aboutus_img from '../Assets/1-min-min_2.JPG';
import employe_1 from '../Assets/img/sections/client/customer-care.png';
import Employe from './Allemployes';
import Why_us from './WhyUs';
export default function AboutPage() {
	return (
		<div class='about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space'>
			{/* <Them title='About' title1='Us'></Them> */}
			<div style={{ marginTop: '200px' }}></div>
			<Headercomponent></Headercomponent>
			<Lastcomponent />
			<Employe></Employe>
			{/* <Testimonial /> */}
			<Why_us></Why_us>
		</div>
	);
}

const Headercomponent = () => {
	return (
		<section className='about-section-area section-bottom-space'>
			<div className='container custom-container-01'>
				<div className='row align-items-center'>
					<div className='col-lg-6 col-md-12'>
						<div className='about-content'>
							<h3 className='content-title'></h3>
							<h3 className='content-title'>About us</h3>
							<p className='paragraph'>
								Eduplan student consultancy is one of the renowned international
								education consultancy firms which assisting overseas students
							</p>
							<p className='paragraph'>
								The head office of Eduplan is located in India which helps all
								Indian students to get admission into top-ranked universities
								from the United Kingdom, USA, Australia, Canada,Germany and
								Sweden. At the same time, we have a very strong relationship
								with our partner Malaysian, Cyprus and Chinese Universities.
							</p>
							<div className='icon-box-with-text-wrap'>
								<ul className='ul icon-box-with-text style-01'>
									<li className='single-icon-box-with-text'>
										<div className='icon-wrap color-01'>
											<img src='assets/img/icon/icon-and-text/key.svg' alt='' />
										</div>
										<div className='content'>
											<p className='text'>
												Get life-time free access with one time payment in our
												courses plan. Easy &amp; simple!
											</p>
										</div>
									</li>
									<li className='single-icon-box-with-text style-02'>
										<div className='icon-wrap color-02'>
											<img
												src='assets/img/icon/icon-and-text/board.svg'
												alt=''
											/>
										</div>
										<div className='content'>
											<p className='text'>
												We find the expert tuotor with huge teaching experience
											</p>
										</div>
									</li>
									<li className='single-icon-box-with-text style-03'>
										<div className='icon-wrap color-03'>
											<img
												src='assets/img/icon/icon-and-text/monitor.svg'
												alt=''
											/>
										</div>
										<div className='content'>
											<p className='text'>
												We present worldclass courses with practical learning
												tasks that make students more confident.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<div className='btn-wrap'>
								<a href='#' className='btn-common btn-new'>
									Get Free Consultation
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-6 col-md-12'>
						<div className='thumbnail '>
							<div className='right-frame'>
								<img src={aboutus_img} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const SecondItem = () => {
	return <div>janak</div>;
};

const Lastcomponent = () => {
	return (
		<div>
			{' '}
			<section className='counter-area-wrapper'>
				<div className='counter-section-area'>
					<div className='container custom-container-01'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='counter-section-inner style-01'>
									<div className='single-counterup'>
										<div className='image-wrap'>
											<img src={employe_1} alt='' />
										</div>
										<div className='content-wrap'>
											<div className='odo-area'>
												<h3
													className='odometer odo-title'
													data-odometer-final={458712}>
													222
												</h3>
											</div>
											<div className='content'>
												<h6 className='subtitle'>More then students</h6>
											</div>
										</div>
									</div>
									<div className='single-counterup'>
										<div className='image-wrap'>
											<img src={employe_1} alt='' />
										</div>
										<div className='content-wrap'>
											<div className='odo-area'>
												<h3
													className='odometer odo-title'
													data-odometer-final={211}>
													1111
												</h3>
											</div>
											<div className='content'>
												<h6 className='subtitle'>Total consultants</h6>
											</div>
										</div>
									</div>
									<div className='single-counterup'>
										<div className='image-wrap'>
											<img src={employe_1} alt='' />
										</div>
										<div className='content-wrap'>
											<div className='odo-area'>
												<h3
													className='odometer odo-title'
													data-odometer-final={425}>
													44
												</h3>
											</div>
											<div className='content'>
												<h6 className='subtitle'>Total courses</h6>
											</div>
										</div>
									</div>
									<div className='single-counterup'>
										<div className='image-wrap'>
											<img src={employe_1} alt='' />{' '}
										</div>
										<div className='content-wrap'>
											<div className='odo-area'>
												<h3
													className='odometer odo-title'
													data-odometer-final={32}>
													5
												</h3>
											</div>
											<div className='content'>
												<h6 className='subtitle'>Countries</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
