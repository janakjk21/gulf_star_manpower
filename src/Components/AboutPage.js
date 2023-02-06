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
import employe_2 from '../Assets/img/team-details/01.jpg';
export default function AboutPage() {
	return (
		<div class='about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space'>
			{/* <Them title='About' title1='Us'></Them> */}
			<div style={{ marginTop: '200px' }}></div>
			<Headercomponent></Headercomponent>
			<SecondItem></SecondItem>
			<Lastcomponent />
		
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
	return (
		<div>
			<section className='our-team-area-wrapper section-top-space section-bottom-space'>
				<div className='our-team-inner'>
					<div className='container custom-container-01'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='section-title-wrapper text-center'>
									<h1 className='section-title'>Meet Experts</h1>
									<p className='description'>
										87% of people learning for professional development report
										career benefits
									</p>
								</div>
							</div>
						</div>
						<div className='row column-gap-50'>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Arlene McCoy
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='751e101b0f1c5b191402061a1b35100d14180519105b161a18'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Arlene McCoy
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Esther Howard
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='6a010f04100344060b1d1905042a0f120b071a060f44090507'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Esther Howard
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Robert Fox
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='69020c0713004705081e1a0607290c11080419050c470a0604'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Robert Fox
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Devon Lane
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='ef848a819586c1838e989c8081af8a978e829f838ac18c8082'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Devon Lane
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Wade Warren
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='0368666d796a2d6f6274706c6d43667b626e736f662d606c6e'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Wade Warren
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-lg-4'>
								<div className='single-team-item style-02'>
									<div className='thumbnail'>
										<img src={employe_2} alt='team image' />
									</div>
									<div className='content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Esther Howard
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='email'>
											<span className='icon-wrap'>
												<i className='fa-regular fa-envelope icon' />
											</span>
											<span className='text'>
												<a
													href='https://themeim.com/cdn-cgi/l/email-protection'
													className='__cf_email__'
													data-cfemail='94fff1faeefdbaf8f5e3e7fbfad4f1ecf5f9e4f8f1baf7fbf9'>
													[email&nbsp;protected]
												</a>
											</span>
										</p>
									</div>
									<div className='hover-content'>
										<h4 className='title'>
											<a href='#' tabIndex={-1}>
												Esther Howard
											</a>
										</h4>
										<p className='designation'>Consultants, Eduplan</p>
										<p className='paragraph'>
											I’m Esther Howard working as a senior consultant on
											Eduplan. Helped many student to keep touch their dream to
										</p>
										<ul className='ul social-media-list style-01 color-02'>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-instagram icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-facebook-f icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-youtube icon' />
												</a>
											</li>
											<li className='single-social-item'>
												<a href='#' tabIndex={-1}>
													<i className='fa-brands fa-linkedin-in icon' />
												</a>
											</li>
										</ul>
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
