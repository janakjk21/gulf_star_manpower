import { Avatar, Box, Typography } from '@material-ui/core';
import Image_1 from '../Assets/compressjpeg/PENTAGON ENGINEERING TRADING AND CONTRACTING.jpg';
import Image_2 from '../Assets/compressjpeg/2 al baz.jpg';
import Image_3 from '../Assets/compressjpeg/MATNA FLEX.jpg';
import Image_4 from '../Assets/compressjpeg/PEOPLE OUTSOURCE TRADING AND CONTRACTING.jpg';
import Image_5 from '../Assets/compressjpeg/7 quadrant.jpg';
import Image_6 from '../Assets/compressjpeg/8 srr.jpg';
import Image_7 from '../Assets/compressjpeg/season engineering group.jpg';
import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './style.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

export default function Clients(theme) {
	return (
		<Box
			style={{
				backgroundColor: '#FFFFFF',
				marginTop: '6vh',
				marginBottom: '5vh',
				height: '60vh',
			}}>
			<Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '#0B0861',
					marginBottom: '30px',
					paddingBottom: '40px',
				}}>
				{' '}
				<span style={{ color: '#000000' }}> Our </span>
				Clients
			</Typography>
			<Swiper
				loop={true}
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
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				className='mySwiper'>
				<SwiperSlide>
					<div class='single-institute-item'>
						<div class='logo-wrap'>
							<img src={Image_2} alt='amity university' />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='single-institute-item'>
						<div class='logo-wrap'>
							<img src={Image_2} alt='amity university' />
						</div>
					</div>
					{/* <div class='brand-item'>
						<img src={Image_2} alt='amity university' />
					</div> */}
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_2} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_2} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_2} alt='amity university' />
					</div>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
}
