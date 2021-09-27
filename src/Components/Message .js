import React from "react";
import "./HeroSection.css";

// import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import img from "../Assets/116897155_3231190696966499_8526624389548439125_n.jpg";
import AOS from "aos";

function Message({
	lightBg,
	topLine,
	lightText,

	alt,
	imgStart,
}) {
	AOS.init();
	return (
		<>
			<div
				className={
					lightBg ? "home__hero-section" : "home__hero-section darkBg"
				}>
				<div className='container'>
					<div
						className='row home__hero-row'
						data-aos='fade-up'
						data-aos-delay='300'
						style={{
							display: "flex",
							flexDirection: imgStart === "start" ? "row-reverse" : "row",
						}}>
						<div className='col'>
							<div className='home__hero-text-wrapper'>
								<div className='top-line'>{topLine}</div>
								<h1
									className={lightText ? "heading" : "heading dark"}
									data-aos='fade-up'>
									Message from Board of Directors
								</h1>
								<p
									className={"home__hero-subtitle dark"}
									data-aos='fade-up'
									data-aos-delay='300'>
									The Gulf Star Overseas Pvt. Ltd. feels happy to bring out this
									booklet for the use of our clients around the world to source
									manpower from Nepal. Today writing this message gives me
									immense pleasure. With hard work dedication, sense of selfless
									services and high spirits team..
								</p>

								<Button
									style={{
										color: "#fff",
										background: "linear-gradient(to bottom, #D8232D, #D8232D)",
										borderRadius: "2em",
										padding: ".6em 1.5em",
										fontFamily: "Roboto, sans-serif",
										marginTop: "20px",
									}}
									variant='contained'>
									About us
								</Button>
							</div>
						</div>
						<div className='col'>
							<div className='home__hero-img-wrapper' data-aos='fade-up'>
								<img src={img} alt={alt} className='home__hero-img' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Message;
