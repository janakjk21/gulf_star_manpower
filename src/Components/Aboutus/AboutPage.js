import React from 'react';

import aboutus_img from '../../Assets/1-min-min_2.JPG';

import team1 from '../../Assets/Team/dinesh paudel chettri.jpg';
import team2 from '../../Assets/Team/krishnapandey.jpg';
import team3 from '../../Assets/Team/Gopal Khatri -.jpg';
import team4 from '../../Assets/Team/Laxami Gurung - Flight.jpg';
import team5 from '../../Assets/Team/dhan singh gharti -manager.jpg';
import team6 from '../../Assets/Team/Bikash pariyar -Pro.JPG';
import team7 from '../../Assets/Team/Nisha khatri -recption.JPG';
import team8 from '../../Assets/Team/Sabina bhandari -office assistance.JPG';
import team9 from '../../Assets/Team/Urmila thing-.JPG';

// import team from '../../Assets/Team/';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutPage() {
	return (
		<div class='about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space'>
			{/* <Them title='About' title1='Us'></Them> */}
			<div style={{ marginTop: '200px' }}></div>
			<Headercomponent></Headercomponent>
			<SecondItem></SecondItem>
			<Lastcomponent />
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
							<h3 className='content-title'>About us</h3>
							<p className='paragraph'>
								GulfStar Overseas Pvt. Ltd. is a leading human resource
								consultancy firm, providing unparalleled services to both
								clients and candidates. Our firm is registered under the
								Department of Labor, Government of Nepal with License Number
								1011/068/069, and we have been reinforced by extensive
								experience in the Gulf countries, such as UAE, KSA, Qatar,
								Kuwait, Bahrain, and Malaysia.
							</p>
							<p className='paragraph'>
								With a passion for successful recruitment, our team is dedicated
								to understanding and appreciating the unique requirements of
								both clients and candidates. We validate every candidate and
								every requirement through a rigorous documentation process,
								ensuring that we only work with quality candidates and
								requirements. Our staff is trained to efficiently handle all
								aspects of manpower mobilization, screening, and documentation,
								providing a comprehensive and personal recruitment service
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
							<div className='btn-wrap'></div>
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
									<h1 className='section-title'>Our Team</h1>
									<p className='description'></p>
								</div>
							</div>
						</div>
						<div className='row column-gap-50'>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Dinesh Paudel Chhetri'}
									post={'Managing Director '}
									imageurl={team1}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Krishna Pandey'}
									post={'Executing Director '}
									imageurl={team2}></Singleemploye>
							</div>
							{/* <div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Dinesh Chhetri'}
									post={'Managing Director '}
									imageurl={team3}></Singleemploye>
							</div> */}
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Laxmi Gurung '}
									post={'Flight Officer'}
									imageurl={team4}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Dhansing Gharti'}
									post={'Manager'}
									imageurl={team5}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Bikash Bahadur Pariyar'}
									post={'Marketing Officer '}
									imageurl={team6}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Urmila Thing'}
									post={'Admin Officer'}
									imageurl={team9}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Nirmala Khatri'}
									post={'Receptionist'}
									imageurl={team7}></Singleemploye>
							</div>
							<div className='col-md-6 col-lg-4'>
								<Singleemploye
									name={'Sabina Bhandari '}
									post={'Office Assistant '}
									imageurl={team8}></Singleemploye>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const Lastcomponent = () => {
	return <div> </div>;
};

const Singleemploye = ({ name, post, imageurl }) => {
	return (
		<div className='col' style={{ margin: '4px' }}>
			<div className='card border-0 shadow-sm'>
				<img className='card-img-top' src={imageurl} alt='Devon Lane' />
				<div className='card-body text-center'>
					<h3 className='h5 card-title mb-2'>{name}</h3>
					<span className='d-inline-block mb-3 fs-sm'>{post}</span>
					<div className='pt-1'>
						<a
							className='btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2'
							href='/'>
							<FaFacebook></FaFacebook>
						</a>
						<a
							className='btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2'
							href='/'>
							<FaLinkedin></FaLinkedin>{' '}
						</a>
						<a
							className='btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2'
							href='/'>
							<FaTwitter></FaTwitter>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
