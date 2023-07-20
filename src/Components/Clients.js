import { Typography } from '@material-ui/core';
import Image_1 from '../Assets/Componey logos/New folder/al_seedawi-removebg-preview.png';
import Image_2 from '../Assets/Componey logos/New folder/arab_home-removebg-preview.png';
import Image_3 from '../Assets/Componey logos/New folder/arabin_gulf-removebg-preview.png';
import Image_4 from '../Assets/Componey logos/New folder/az_satu-removebg-preview.png';
import Image_5 from '../Assets/Componey logos/New folder/bara_trading-removebg-preview.png';
import Image_6 from '../Assets/Componey logos/New folder/Darwaja_kuwait_-removebg-preview.png';
import Image_7 from '../Assets/Componey logos/New folder/dolphine-removebg-preview.png';
import Image_8 from '../Assets/Componey logos/New folder/falcon_eye-removebg-preview.png';

import Image_9 from '../Assets/Componey logos/New folder/platinum-removebg-preview.png';
import Image_10 from '../Assets/Componey logos/New folder/serbawangi-removebg-preview.png';

import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Aos from 'aos';
// import './style.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

export default function Clients(theme) {
	Aos.init();
	return (
		<section
			className='container pb-4 pb-md-5 mb-2 mb-md-3'
			style={{
				backgroundColor: '#FFF7EF',
				borderRadius: '30px',
				marginTop: '40px',
			}}>
			{/* <Typography
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '900',
					fontFamily: 'Roboto, sans-serif',
					color: '#219ebc',
					marginBottom: '30px',
					paddingBottom: '40px',
				}}>
				<span style={{ color: '#181818' }}> Our </span>
				Clients
			</Typography> */}
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
							<img src={Image_1} alt='amity university' />
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
						<img src={Image_3} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_4} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_5} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_6} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_7} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_8} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_9} alt='amity university' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class='brand-item'>
						<img src={Image_10} alt='amity university' />
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
