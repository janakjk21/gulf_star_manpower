import React from "react";
import "./Team.css";
import img1 from "../Assets/234001337_4418747838170708_2346686369661221711_n.jpg";
import img2 from "../Assets/116897155_3231190696966499_8526624389548439125_n.jpg";
import img3 from "../Assets/116897155_3231190696966499_8526624389548439125_n.jpg";
import img4 from "../Assets/Apple iPhone 8 Plus 3024x4032_012374 (1).jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Them from "./Them";

export default function TEAM() {
	AOS.init();
	return (
		<div>
			<Them title='Our' title1='Team'></Them>
			<div className='root1'>
				<section id='team'>
					<div className='container' data-aos='fade-up'>
						<div className='row'>
							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='100'>
									<div className='pic'>
										<img src={img1} alt='' />
									</div>
									<h4>Krishna Pandey</h4>
									<span>Chief Executive Officer</span>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='200'>
									<div className='pic'>
										<img src={img2} alt='' />{" "}
									</div>
									<h4>Dinesh Chhetri</h4>
									<span>Product Manager</span>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='300'>
									<div className='pic'>
										<img src={img3} alt='' />{" "}
									</div>
									<h4>William Anderson</h4>
									<span>CTO</span>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='400'>
									<div className='pic'>
										<img src={img4} alt='' />
									</div>
									<h4>Janak sapkota</h4>
									<span>Accountant</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
