import { Typography } from '@material-ui/core';

// import employe_1 from '../Assets/krishnapandey.jpg';
import employe_1 from '../Assets/img/team-details/01.jpg';

import { ImTwitter } from 'react-icons/im';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

export default function Allemployes(theme) {
	return (
		<>
			<Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '/0B0861',
					marginBottom: '30px',
				}}>
				{' '}
				<span style={{ color: '/000000' }}> Our </span>
				Clients
			</Typography>
			<Swiper
				loop={true}
				spaceBetween={20}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				className='mySwiper'>
				<SwiperSlide>
					<SingleEmploye />
				</SwiperSlide>
				<SwiperSlide>
					<SingleEmploye />
				</SwiperSlide>
				<SwiperSlide>
					<SingleEmploye />
				</SwiperSlide>
				<SwiperSlide>
					<SingleEmploye />
				</SwiperSlide>
				<SwiperSlide>
					<SingleEmploye />
				</SwiperSlide>
			</Swiper>
		</>
	);
}

const SingleEmploye = () => {
	return (
		<div className='slick-item'>
			<div className='single-team-item style-01'>
				<div className='thumbnail'>
					<img src={employe_1} alt='amity university' />
					<ul className='ul social-media-list style-01'>
						<li className='single-social-item'>
							<a href='/'>
								<ImTwitter></ImTwitter>
							</a>
						</li>
						<li className='single-social-item'>
							<a href='/'>
								<FaLinkedin></FaLinkedin>{' '}
							</a>
						</li>
						<li className='single-social-item'>
							<a href='/'>
								<FaFacebook></FaFacebook>{' '}
							</a>
						</li>
					</ul>
				</div>
				<div className='content'>
					<h4 className='title'>
						<a href='/'>Jenny Wilson</a>
					</h4>
					<p className='designation'>Senior Consultants, Eduplan</p>
				</div>
			</div>
		</div>
	);
};
