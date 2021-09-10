import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import "./Ourvalues.css";
import icon1 from "../Assets/icons/honesty.png";
import icon2 from "../Assets/icons/quality.png";
import icon3 from "../Assets/icons/international-consumer.png";
import icon4 from "../Assets/icons/project-management.png";
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
		margin: "0 190px 0 190px",
	},
	[theme.breakpoints.down("sm")]: {
		Typography: {
			fontSize: "40px",
			margin: "0 0 0 0",
			marginTop: "800px",
		},
		root: {
			marginBottom: "900px",
			marginTop: "50px",
		},
	},
}));
export default function Ourvalues() {
	const classes = useStyles();
	AOS.init();

	return (
		<div className={classes.root}>
			<section
				id='hero'
				className='d-flex align-items-center'
				style={{ marginTop: "0px", height: "90vh", background: "none" }}>
				<div
					className='container position-relative'
					data-aos='fade-up'
					data-aos-delay='100'>
					<div className='section-title'>
						<Typography className={classes.Typography}>
							{" "}
							<span style={{ color: "#D8232D" }}> Our </span>
							Values
						</Typography>
					</div>
					<div className='row icon-boxes'>
						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div
								className='icon-box'
								style={{
									backgroundColor: "#FF9671",
									color: "#000",
									borderRadius: "30%",
								}}>
								<div className='icon'>
									<img
										src={icon1}
										style={{ height: "75px" }}
										alt='Image2'></img>
								</div>
								<h4 className='title'>
									<a href='facebook'>HONESTY</a>
								</h4>
								<p className='description'>
									We are completely transparent with clients and candidates
									alike. we never try to push you down a path thats not right
									for you.
								</p>
							</div>
						</div>
						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div
								className='icon-box'
								style={{
									backgroundColor: "#845EC2",
									color: "#000",
									borderRadius: "30%",
								}}>
								<div className='icon'>
									<img
										src={icon2}
										style={{ height: "75px" }}
										alt='Image2'></img>
								</div>
								<h4 className='title'>
									<a href='facebook'>QUALITY</a>
								</h4>
								<p className='description'>
									We have the contacts and the network to match the industry's
									hottest talent with the industry's most enviable companies.
								</p>
							</div>
						</div>

						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div
								className='icon-box'
								style={{
									backgroundColor: "#F9F871",
									color: "#000",
									borderRadius: "30%",
								}}>
								<div className='icon'>
									<img
										src={icon3}
										style={{ height: "75px" }}
										alt='Image2'></img>
								</div>
								<h4 className='title'>
									<a href='facebook'>PARTNERSHIP</a>
								</h4>
								<p className='description'>
									We do more than just find you a job or fill a brief, we
									actively advise you on the best way to achieve your career or
									business goals
								</p>
							</div>
						</div>

						<div
							className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<div
								className='icon-box'
								style={{
									backgroundColor: "#00934A",
									color: "#000",
									borderRadius: "30%",
								}}>
								<div className='icon'>
									<img
										src={icon4}
										style={{ height: "75px" }}
										alt='Image2'></img>
								</div>
								<h4 className='title'>
									<a href='facebook'>INNOVATION</a>
								</h4>
								<p className='description'>
									We are the first ones to jump into new technology if it means
									we can help uncover new opportunities for you
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
