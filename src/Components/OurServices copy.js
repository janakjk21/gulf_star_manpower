import React from "react";
import "./ourServers.css";
import { FcBriefcase } from "react-icons/fc";
export default function OurServices() {
	return (
		<div>
			<section className='amazing_feature'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center heading-main'>
							<h2 className='heading'>OUR FEATURES</h2>
							<div className='separator'>
								<i className='fa fa-home below-line-about-icon'></i>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<FcBriefcase className='far' size={20} />
								</div>
								<h3>Made with Love</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<i className='fa fa-magic'></i>
								</div>
								<h3>Powerful</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<i className='fas fa-location-arrow'></i>
								</div>
								<h3>Send Messages</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<i className='far fa-money-bill-alt'></i>
								</div>
								<h3>Save Money</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<i className='fa fa-cog'></i>
								</div>
								<h3>Customizable</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 col-xs-12'>
							<div className='single_feature'>
								<div className='feature_icon'>
									<i className='fa fa-database'></i>
								</div>
								<h3>Data Report</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
