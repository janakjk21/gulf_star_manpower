import React from 'react';
import '../Herosection/theme.min.css';
import blogimg from '../../Assets/Blogs/01.jpg';
import bigblog from '../../Assets/01.jpg';
import { useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../fire';
import { Link } from 'react-router-dom';
// import Author from '../../Assets/Team/01 (1).jpg';
export default function BlogGrid() {
	const [article, setArticle] = useState([]);
	const [deletealert, setdeletealert] = useState(false);
	const [advertisement, setAdvertisement] = useState([]);
	const getjobs = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'createnews'));
		querySnapshot.forEach((doc) => {
			console.log(doc.id);
			let docid = doc.id;
			let appObj = { docid, ...doc.data() };
			newarr.push(appObj);
		});
		setArticle(newarr);
	};
	useEffect(() => {
		getjobs();
		firstArticle();
	}, []);

	const firstArticle = async () => {
		let newarr = [];
		const querySnapshot = await getDocs(collection(db, 'jobAdvertisement'));
		querySnapshot.forEach((doc) => {
			console.log(doc.id);
			let docid = doc.id;
			let appObj = { docid, ...doc.data() };
			newarr.push(appObj);
		});
		setAdvertisement(newarr);
	};

	console.log(advertisement[0], 'this is advertisement');
	return (
		<main className='page-wrapper'>
			<div className='container pt-5 pb-lg-4 my-5'>
				{/* Breadcrumb*/}
				<nav className='mb-3 pb-md-1 pt-md-3' aria-label='Breadcrumb'>
					<ol className='breadcrumb breadcrumb-light m-0'>
						<li className='breadcrumb-item'>
							<a href='car-finder-home.html'>Home</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							News &amp; reviews
						</li>
					</ol>
				</nav>
				{/* Page title*/}
				<h1 className='text-dark mb-4'>News &amp; reviews</h1>
				{/* Sorting, filters and search*/}
				<div className='d-lg-flex pt-1 pb-4 mb-3'>
					<div className='d-flex mb-3 mb-lg-0 pe-lg-2'></div>
					<div className='position-relative flex-grow-1'>
						<input
							className='form-control form-control-light'
							type='text'
							placeholder='Search articles by keywords...'
						/>
						<i className='fi-search position-absolute top-50 end-0 translate-middle-y text-dark opacity-70 me-3' />
					</div>
				</div>
				{/* Featured article*/}
				<article className='row pb-2 pb-md-1 mb-4 mb-md-5'>
					<div className='col-md-7 col-lg-8 mb-lg-0 mb-3 mb-md-0'>
						<a
							className='d-block position-relative'
							href='car-finder-blog-single.html'>
							<span className='badge bg-info position-absolute top-0 end-0 m-3 fs-sm'>
								New
							</span>
							<img className='rounded-3' src={bigblog} alt='Post ' />
						</a>
					</div>
					<div className='col-md-5 col-lg-4'>
						<a className='fs-sm text-uppercase text-decoration-none' href='/'>
							Tips &amp; Advice
						</a>
						<h2 className='h5 text-dark pt-1'>
							<a className='nav-link' href='car-finder-blog-single.html'>
								10 Best Electric Bikes from Automotive Manufacturers for a Long
								Trip
							</a>
						</h2>
						<p className='d-md-none d-xl-block text-dark opacity-70 mb-4'>
							Nulla felis neque ultrices ut&nbsp;aliquam. Pellentesque
							id&nbsp;semper iaculis scelerisque etiam egestas interdum
							proin&nbsp;sit. Ornare venenatis, ullamcorper amet arcu ipsum
							ut&nbsp;morbi enim. Senectus quam egestas facilisi enim diam
							posuere ultricies interdum&nbsp;sed. Amet, risus eros cursus
							vitae, sit?
						</p>
						<a
							className='d-flex align-items-center text-decoration-none'
							href='/'>
							<div className='ps-2'>
								<h6 className='fs-base text-dark lh-base mb-1'>
									Dinesh Chettri
								</h6>
							</div>
						</a>
					</div>
				</article>

				{/* Latest articles (3 columns)*/}
				<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-3 gx-md-4 gy-md-5 gy-4 mb-lg-5 mb-4'>
					{article.length > 0 ? (
						article.map((item) => {
							return (
								<>
									{' '}
									<SingleAricle item={item}></SingleAricle>
								</>
							);
						})
					) : (
						<div> no news</div>
					)}
				</div>
				{/* Pagination*/}
			</div>
		</main>
	);
}

const SingleAricle = ({ item }) => {
	console.log(item, 'item');
	return (
		<>
			<article className='col pb-2 pb-md-1'>
				<Link
					className='d-block position-relative mb-3'
					to={`bloggrind/${item.docid}`}>
					<img className='d-block rounded-3' src={item.imgUrl} alt='Post ' />
				</Link>
				<a className='fs-xs text-uppercase text-decoration-none' href='/'>
					Reviews
				</a>
				<h3 className='fs-base text-dark pt-1'>
					<a className='nav-link' href='car-finder-blog-single.html'>
						{item.blogPost.title}
					</a>
				</h3>
				<a className='d-flex align-items-center text-decoration-none' href='/'>
					<div className='ps-2'>
						<h6 className='fs-sm text-dark lh-base mb-1'>
							{item.blogPost.author.name}
						</h6>
					</div>
				</a>
			</article>
		</>
	);
};
