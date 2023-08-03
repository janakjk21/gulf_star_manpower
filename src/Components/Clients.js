import Image_1 from '../Assets/Componey logos/logo 12 (2).jpg';
import Image_2 from '../Assets/Componey logos/logo 2.jpg';
import Image_3 from '../Assets/Componey logos/logo 12.jpg';
import Image_4 from '../Assets/Componey logos/logo 4.jpg';
import Image_5 from '../Assets/Componey logos/logo 5.jpg';
import Image_6 from '../Assets/Componey logos/logo 7.jpg';
import Image_7 from '../Assets/Componey logos/logo 6.jpg';
import Image_8 from '../Assets/Componey logos/logo 8.jpg';

import Image_9 from '../Assets/Componey logos/logo 9.jpg';
import Image_10 from '../Assets/Componey logos/logo 14.jpg';

import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import './style.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

export default function Clients(theme) {
	return (
		<section
			className='container pb-4 pb-md-5 mb-2 mb-md-3'
			style={{
				backgroundColor: '#FFF7EF',
				borderRadius: '30px',
				marginTop: '40px',
			}}>
			<Swiper
				data-aos='zoom-in-up'
				loop={true}
				centeredSlides={true}
				autoplay={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
				className='mySwiper'>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_1} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_2} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_3} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_4} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_5} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_6} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_7} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_8} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_9} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_10} alt='amity university' loading='lazy' />
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
