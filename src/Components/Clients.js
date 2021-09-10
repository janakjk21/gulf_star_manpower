import { Avatar, Typography } from "@material-ui/core";
import Image_1 from "../Assets/compressjpeg/1 abm.jpg";
import Image_2 from "../Assets/compressjpeg/2 al baz.jpg";
import Image_3 from "../Assets/compressjpeg/3 al haider.jpg";
import Image_4 from "../Assets/compressjpeg/4 Hond tat.jpg";

import React from "react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { makeStyles } from "@material-ui/core/styles";
SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper from "react-id-swiper";

const useStyles = makeStyles((theme) => ({
	large: {
		width: "100%",
		height: "250px",
		borderRadius: "10px",
	},
	Typography: {
		textAlign: "center",
		fontSize: "55px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#0B0861",
	},

	Typography1: {
		textAlign: "left",
		fontFamily: "Roboto, sans-serif",
		fontSize: "16px",
	},
	div_css: {
		marginTop: "40px",

		background:
			"rgba(0, 0, 0, 0.25) 0px 54px 55px,rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
		boxShadow: "0 13px 15px rgba(0, 0, 0, 0.3)",
		marginBottom: "20px",
		maxWidth: "300px",
		width: "300px",
		borderRadius: "10px",
		Overflow: "hidden",
	},

	[theme.breakpoints.down("sm")]: {
		Typography1: {
			fontFamily: "Roboto, sans-serif",
			fontSize: "17px",
			margin: "0 0 0 0",
		},
		card_container: {
			alignItems: "center",
		},
		Typography: {
			fontSize: "40px",
		},
		div_css: {
			marginTop: "40px",
			marginLeft: "7%",
			height: "250px",
		},
	},
}));

export default function Clients(theme) {
	const classes = useStyles();

	return (
		<>
			<Typography
				style={{
					textAlign: "center",
					fontSize: "55px",
					fontWeight: "900",
					fontFamily: "Roboto, sans-serif",
					color: "#0B0861",
					marginBottom: "30px",
				}}>
				{" "}
				<span style={{ color: "#D8232D" }}> Our </span>
				Clients
			</Typography>
			<Swiper
				loop={true}
				spaceBetween={20}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
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
					<div className={classes.div_css}>
						<Avatar
							alt='Remy Sharp'
							variant='square'
							src={Image_1}
							className={classes.large}></Avatar>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={classes.div_css}>
						<Avatar
							alt='Remy Sharp'
							variant='square'
							src={Image_2}
							className={classes.large}></Avatar>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={classes.div_css}>
						<Avatar
							alt='Remy Sharp'
							variant='square'
							src={Image_3}
							className={classes.large}></Avatar>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={classes.div_css}>
						<Avatar
							alt='Remy Sharp'
							variant='square'
							src={Image_4}
							className={classes.large}></Avatar>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
