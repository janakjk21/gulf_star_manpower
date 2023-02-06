import React from "react";
import "./Team.css";
import img1 from "../Assets/krishnapandey.jpg";
import img2 from "../Assets/New folder/employe1.jpg";
import img3 from "../Assets/116897155_3231190696966499_8526624389548439125_n.jpg";
import img4 from "../Assets/employe22.jpg";
import img5 from "../Assets/Apple iPhone 8 Plus 3024x4032_012374 (1).jpg";

import Them from "./Them";

export default function TEAM() {
	return (
		<div>
			<Them title='Our' title1='Team'></Them>
			<section id='team' className='team-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='site-heading text-center'>
								<h4>Meet our awesome and expert team members</h4>
							</div>
						</div>
					</div>
					<div className='row team-items'>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img1} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Krishna Pandey</h4>
										<p>Chief Executive Officer</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='lkjasd'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Krishna Pandey</h4>
									<span>Chief Executive Officer</span>
								</div>
							</div>
						</div>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img3} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Dinesh Chhettri</h4>
										<p>Managing Director</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='#fa'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Dinesh Chhettri</h4>
									<span>Managing Director</span>
								</div>
							</div>
						</div>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img5} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Janak Sapkota</h4>
										<p>It Officer</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='#das'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Janak Sapkota</h4>
									<span>It Officer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* // second set of employe */}
			<section id='team' classNameName='team-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='site-heading text-center'>
								<h4>Meet our awesome and expert team members</h4>
							</div>
						</div>
					</div>
					<div className='row team-items'>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img1} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Krishna Pandey</h4>
										<p>Chief Executive Officer</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='#da'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Krishna Pandey</h4>
									<span>Chief Executive Officer</span>
								</div>
							</div>
						</div>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img3} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Dinesh Chhettri</h4>
										<p>Managing Director</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='#sa'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Dinesh Chhettri</h4>
									<span>Managing Director</span>
								</div>
							</div>
						</div>
						<div className='col-md-4 single-item'>
							<div className='item'>
								<div className='thumb'>
									<img src={img3} alt='' className='img-fluid' />{" "}
									<div className='overlay'>
										<h4>Janak Sapkota</h4>
										<p>It Officer</p>
									</div>
								</div>
								<div className='info'>
									<span className='message'>
										<a href='#da'>
											<i className='fas fa-envelope-open'></i>
										</a>
									</span>
									<h4>Janak Sapkota</h4>
									<span>It Officer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
