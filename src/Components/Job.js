import React from "react";
import "./Jobs.css";
import img1 from "../Assets/New folder/advice-on-how-to-become-a-medical-social-worker.jpg";
import img2 from "../Assets/New folder/Computer-Stock-Edited.jpg-pwrt3.jpg";
import img3 from "../Assets/New folder/engineering-construction.jpg";
import img4 from "../Assets/New folder/hotel-and-resturant-worker (1).jpg";
import img5 from "../Assets/New folder/workshop-techniciam.jpg";
import img6 from "../Assets/New folder/security.jpg";
import { Typography, makeStyles } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
	Typography: {
		textAlign: "center",
		fontSize: "55px",
		fontWeight: "900",
		fontFamily: "Roboto, sans-serif",
		color: "#0B0861",
		marginBottom: "30px",
	},
	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "40px",
		},
	},
}));
export default function Job() {
	const classes = useStyles();
	AOS.init();
	return (
		<section id='portfolio' className='portfolio'>
			<div className='container' data-aos='fade-up'>
				<div className='section-title'>
					<Typography className={classes.Typography}>
						{" "}
						<span style={{ color: "#D8232D" }}> Job</span>
						Categories
					</Typography>
				</div>

				<div
					className='row portfolio-container'
					data-aos='fade-up'
					data-aos-delay='300'>
					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img src={img1} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4>GENERAL MANAGEMENT</h4>
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-1.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='App 1'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
						<div className='portfolio-wrap'>
							<img src={img2} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4>IT / HARDWARE / SOFTWARE</h4>
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-2.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Web 3'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img src={img3} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4>CONSTRUCTION INDUSTRY</h4>
								<div className='portfolio-links'>
									<a
										href={img2}
										data-gall='portfolioGallery'
										className='venobox'
										title='App 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-card'>
						<div className='portfolio-wrap'>
							<img src={img4} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4>RESTAURANT / FAST FOOD</h4>
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-4.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Card 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-web'>
						<div className='portfolio-wrap'>
							<img src={img5} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4> ELECTRICAL INDUSTRY</h4>
								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-5.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='Web 2'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 col-md-6 portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<img src={img6} className='img-fluid' alt='' />
							<div className='portfolio-info'>
								<h4>SECURITY SERVICES</h4>

								<div className='portfolio-links'>
									<a
										href='assets/img/portfolio/portfolio-6.jpg'
										data-gall='portfolioGallery'
										className='venobox'
										title='App 3'>
										<i className='bx bx-plus'></i>
									</a>
									<a href='portfolio-details.html' title='More Details'>
										<i className='bx bx-link'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
