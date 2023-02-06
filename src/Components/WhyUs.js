import React from 'react';
import './whyus.css';
import img1 from '../Assets/icons/honesty.png';
import img2 from '../Assets/icons/international-consumer.png';
import img3 from '../Assets/icons/quality.png';
import img4 from '../Assets/icons/suitcase-black-shape.png';
import img5 from '../Assets/icons/project-management.png';
import Them from './Them';
import { Typography } from '@material-ui/core';

export default function WhyUs() {
	return (
		<div>
			{/* <Them title=' Why' title1='Us'></Them> */}
			<Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '#000000',
					marginBottom: '30px',
				}}>
				{' '}
				<span style={{ color: '#000000' }}> Why </span>
				Us
			</Typography>
			<div className='root2'>
				<section>
					<div className='container py-5'>
						<div classNameName='row'>
							<div className='col-md-12'>
								<div className='main-timeline'>
									<div className='timeline'>
										<div className='timeline-content'>
											<div className='circle'>
												<span className='homebox'>
													<img src={img1} className='img' alt='img1' />
												</span>
											</div>
											<div className='content'>
												<span className='year'>8 YEAR TRACK RECORD</span>
												<p className='description'>
													With over a decades passed since we started business,
													GULF STAR has developed a prominent and respected
													position in the foreign recruitment market in Nepal.
													During this time we have built a considerable number
													of candidate database and en excellent source of
													talent for you.
												</p>
												<div className='icon'>
													<span></span>
												</div>
											</div>
										</div>
									</div>
									<div className='timeline'>
										<div className='timeline-content'>
											<div className='circle'>
												<span className='homebox'>
													<img src={img2} className='img' alt='img2' />
												</span>
											</div>
											<div className='content'>
												<span className='year'>QUALITY CANDIDATES</span>
												<p className='description'>
													It's what every recruiter wants. It's our focus at
													GULF STAR. Because our candidate service is so
													attentive and rigorous, we attract the best people and
													get a lot of referral business, creating a
													high-quality talent pool for recruiters. We keep in
													touch with our candidates too, meaning you see
													potential employees that are better-prepared and more
													proactive.
												</p>
												<div className='icon'>
													<span></span>
												</div>
											</div>
										</div>
									</div>
									<div className='timeline'>
										<div className='timeline-content'>
											<div className='circle'>
												<span className='homebox'>
													<img src={img3} className='img' alt='img1' />{' '}
												</span>
											</div>
											<div className='content'>
												<span className='year'>GOOD REPRESENTATION</span>
												<p className='description'>
													We take very seriously the fact that were representing
													you when we talk to candidates, when we advertise and
													market. We take time to learn about your organization
													so that were able to do this as professionally as
													possible. Its an approach thats won GULF STAR a
													reputation for className, honesty, integrity and
													expertise.
												</p>
												<div className='icon'>
													<span></span>
												</div>
											</div>
										</div>
									</div>
									<div className='timeline'>
										<div className='timeline-content'>
											<div className='circle'>
												<span className='homebox'>
													<img src={img4} className='img' alt='img1' />{' '}
												</span>
											</div>
											<div className='content'>
												<span className='year'>LOW STAFF TURNOVER:</span>
												<p className='description'>
													Because we reward and develop our own people well,
													they stay with us for twice as long as the industry
													average. This means you get a better, more sustainable
													relationship with us and your staffs dont have to get
													to know new team members all the time. Around
													one-third of our employees are incentivized, which
													further cements their long-term commitment to us.
												</p>
												<div className='icon'>
													<span></span>
												</div>
											</div>
										</div>
									</div>
									<div className='timeline'>
										<div className='timeline-content'>
											<div className='circle'>
												<span className='homebox'>
													<img src={img5} className='img' alt='img1' />{' '}
												</span>
											</div>
											<div className='content'>
												<span className='year'>STRONG ONLINE PRESENCE</span>
												<p className='description'>
													www.gulfstaroverseas.com is a prominent website
													attracting many job seekers a month and hence,
													delivering a great deal of our business. We extend our
													online presence with advertisements on major online
													job boards, and other social media platforms too.
												</p>
												<div className='icon'>
													<span></span>
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
		</div>
	);
}
