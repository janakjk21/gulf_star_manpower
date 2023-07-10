import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img from '../../Assets/Blogs/single.jpg';
import Author from '../../Assets/Team/dinesh paudel chettri.jpg';

export default function Blogsingle() {
	const data = {
		title: '10 Tips for Successful Remote Work',
		author: {
			name: 'John Doe',
			email: 'john.doe@example.com',
		},
		date: '2022-01-01',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit arcu et ante interdum aliquet. In hac habitasse platea dictumst. Nulla rhoncus mi eu sapien sagittis eleifend. Etiam lobortis, dui vitae consectetur malesuada, libero sapien laoreet eros, nec aliquet nisi lorem id justo. Praesent non dapibus nulla, vitae lobortis nunc. Fusce tincidunt euismod purus, sit amet imperdiet leo placerat at. Donec rutrum vehicula dolor, id luctus enim efficitur ac. Sed tincidunt mauris sapien, eu bibendum ex ultrices nec. Nulla eget elit ultrices, suscipit justo in, luctus lorem. Vestibulum gravida odio sapien, ac mollis massa interdum eu. Ut consequat consectetur nunc eget bibendum. Nulla ac laoreet tellus.',
	};
	return (
		<div>
			<Blogpost data={data}></Blogpost>
		</div>
	);
}

const Blogpost = ({ data }) => {
	console.log(data);
	return (
		<main className='page-wrapper'>
			<div className='container mt-5 mb-md-4 py-5'>
				{/* Breadcrumb*/}
				<nav className='mb-3 pt-md-3' aria-label='breadcrumb'>
					<ol className='breadcrumb'></ol>
				</nav>
				{/* Post title + meta*/}
				<a
					className='nav-link d-inline-block fw-normal text-uppercase px-0 mb-2'
					href='/'>
					{/* Tips &amp; Advice */}
				</a>
				<h1 className='h2 mb-4'>{data.title}</h1>
				<div className='mb-4 pb-1'>
					<ul className='list-unstyled d-flex flex-wrap mb-0 text-nowrap'>
						<li className='me-3'>
							{/* <i className='fi-calendar-alt me-2 mt-n1 opacity-60' /> */}
							{data.date}
						</li>
						<li className='me-3 border-end' />
						<li className='me-3'>4 min read</li>
						<li className='me-3 border-end' />
					</ul>
				</div>
				{/* Post content*/}
				<div className='mb-4 pb-md-3'>
					<img className='rounded-3' src={img} alt='Post ' />
				</div>
				<div className='row'>
					<div className='col-lg-2 col-md-1 mb-md-0 mb-4 mt-md-n5'>
						{/* Sharing*/}
						<div className='sticky-top py-md-5 mt-md-5'>
							<div className='d-flex flex-md-column align-items-center my-2 mt-md-4 pt-md-5'>
								<div className='d-md-none fw-bold text-nowrap me-2 pe-1'>
									Share:
								</div>
								<a
									className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle mb-md-2 me-md-0 me-2'
									href='/'
									data-bs-toggle='tooltip'
									title='Share with Facebook'>
									<FaFacebook></FaFacebook>
									{/* <i className='fi-facebook' /> */}
								</a>
								<a
									className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle mb-md-2 me-md-0 me-2'
									href='/'
									data-bs-toggle='tooltip'
									title='Share with Twitter'>
									<FaTwitter></FaTwitter>
								</a>
								<a
									className='btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle mb-md-2 me-md-0 me-2'
									href='/'
									data-bs-toggle='tooltip'
									title='Share with LinkedIn'>
									<FaLinkedin></FaLinkedin>
									{/* // <i className='fi-linkedin' /> */}
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-8 col-md-10'>
						{/* Author*/}
						<div className='mb-4 pb-md-3'>
							<a
								className='d-flex align-items-center text-body text-decoration-none'
								href='/'>
								<img
									className='rounded-circle'
									src={Author}
									width={80}
									alt='Kristin Watson'
								/>
								<div className='ps-3'>
									<h2 className='h6 mb-1'>{data.author.name}</h2>
									<span className='fs-sm'>Gulf Star overseas</span>
								</div>
							</a>
						</div>
						{/* Post content*/}
						{/* <h6></h6> */}
						<p>{data.content}</p>

						<footer className='fs-base'>— Annette Black</footer>

						<p>
							Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam
							magna congue. Amet vel non aliquet habitasse. Egestas erat odio
							et, eleifend turpis etiam blandit interdum. Nec augue
							ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan,
							in&nbsp;bibendum. A&nbsp;eget et, eget quisque egestas
							netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper.
							Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam
							lacinia quis amet. Porttitor consequat, sollicitudin vivamus
							pharetra nibh faucibus neque, viverra. Praesent amet sed lacus
							vitae.
						</p>
						<p>
							Velit parturient tellus tellus, congue pulvinar tellus viverra.
							In&nbsp;cum massa mattis&nbsp;ac. Amet vitae massa
							ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis donec
							eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam
							scelerisque.
						</p>
						{/* Post tags*/}
						<div className='d-flex align-items-center my-md-5 my-4 py-md-4 py-3 border-top'>
							<div className='fw-bold text-nowrap mb-2 me-2 pe-1'>Tags:</div>
							<div className='d-flex flex-wrap'>
								<a
									className='btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'
									href='/'>
									Manpower
								</a>
								<a
									className='btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2'
									href='/'>
									Work culture
								</a>
								<a
									className='btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal mb-2'
									href='/'>
									Business
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
