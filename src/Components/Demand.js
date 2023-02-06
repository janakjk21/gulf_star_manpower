import React from "react";
import img1 from "../Assets/Demand/page0001.jpg";
import img2 from "../Assets/Demand/page0002.jpg";
import img3 from "../Assets/Demand/page0003.jpg";
import img4 from "../Assets/Demand/page0004.jpg";
import img5 from "../Assets/Demand/page0005.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./documents.css";
import Them from "./Them";

export default function Demand() {
	AOS.init();
	return (
		<div>
			<Them title='Demand' title1='Sample'></Them>
			<div className='root2'>
				<section id='team'>
					<div className='container' data-aos='fade-up'>
						<div className='row'>
							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='400'>
									<div className='pic'>
										<Zoom>
											<img src={img3} alt='' className='img1' />
										</Zoom>{" "}
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='100'>
									<div className='pic'>
										<Zoom>
											<img src={img4} alt='' className='img1' />
										</Zoom>
									</div>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='200'>
									<div className='pic'>
										<Zoom>
											<img src={img1} alt='' />
										</Zoom>
									</div>
								</div>
							</div>

							<div className='col-lg-3 col-md-6'>
								<div className='member' data-aos='fade-up' data-aos-delay='300'>
									<div className='pic'>
										<Zoom>
											<img src={img2} alt='' className='img1' />
										</Zoom>{" "}
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6' style={{ marginTop: "150px" }}>
								<div className='member' data-aos='fade-up' data-aos-delay='300'>
									<div className='pic'>
										<Zoom>
											<img src={img5} alt='' className='img1' />
										</Zoom>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
