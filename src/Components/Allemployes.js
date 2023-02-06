import { Avatar, Typography } from '@material-ui/core';

// import employe_1 from '../Assets/krishnapandey.jpg';
import employe_1 from '../Assets/img/team-details/01.jpg';

import { FaYoutube } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { makeStyles } from '@material-ui/core/styles';
SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

const useStyles = makeStyles((theme) => ({
	large: {
		width: '100%',
		height: '250px',
		borderRadius: '10px',
	},
	Typography: {
		textAlign: 'center',
		fontSize: '55px',
		fontWeight: '900',
		fontFamily: 'Roboto, sans-serif',
		color: '#0B0861',
	},

	Typography1: {
		textAlign: 'left',
		fontFamily: 'Roboto, sans-serif',
		fontSize: '16px',
	},
	div_css: {
		marginTop: '40px',

		background:
			'rgba(0, 0, 0, 0.25) 0px 54px 55px,rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
		boxShadow: '0 13px 15px rgba(0, 0, 0, 0.3)',
		marginBottom: '20px',
		maxWidth: '300px',
		width: '300px',
		borderRadius: '10px',
		Overflow: 'hidden',
	},

	[theme.breakpoints.down('sm')]: {
		Typography1: {
			fontFamily: 'Roboto, sans-serif',
			fontSize: '17px',
			margin: '0 0 0 0',
		},
		card_container: {
			alignItems: 'center',
		},
		Typography: {
			fontSize: '40px',
		},
		div_css: {
			marginTop: '40px',
			marginLeft: '7%',
			height: '250px',
		},
	},
}));

export default function Allemployes(theme) {
	const classes = useStyles();

	return (
		<>
			<Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '#0B0861',
					marginBottom: '30px',
				}}>
				{' '}
				<span style={{ color: '#000000' }}> Our </span>
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
					<Single_employe />
				</SwiperSlide>
				<SwiperSlide>
					<Single_employe />
				</SwiperSlide>
				<SwiperSlide>
					<Single_employe />
				</SwiperSlide>
				<SwiperSlide>
					<Single_employe />
				</SwiperSlide>
				<SwiperSlide>
					<Single_employe />
				</SwiperSlide>
			</Swiper>
		</>
	);
}

const Single_employe = () => {
	return (
		<div className='slick-item'>
			<div className='single-team-item style-01'>
				<div className='thumbnail'>
					<img src={employe_1} alt='amity university' />
					<ul className='ul social-media-list style-01'>
						<li className='single-social-item'>
							<a href='#'>
								<ImTwitter></ImTwitter>
							</a>
						</li>
						<li className='single-social-item'>
							<a href='#'>
								<FaLinkedin></FaLinkedin>{' '}
							</a>
						</li>
						<li className='single-social-item'>
							<a href='#'>
								<FaFacebook></FaFacebook>{' '}
							</a>
						</li>
					</ul>
				</div>
				<div className='content'>
					<h4 className='title'>
						<a href='#'>Jenny Wilson</a>
					</h4>
					<p className='designation'>Senior Consultants, Eduplan</p>
				</div>
			</div>
		</div>
	);
};
