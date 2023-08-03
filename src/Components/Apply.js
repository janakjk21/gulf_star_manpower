import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import Iframe from 'react-iframe';
import { doc } from 'firebase/firestore';
import { db } from './fire';
import { collection, setDoc } from 'firebase/firestore';
import { FaFax } from 'react-icons/fa/';
import Aos from 'aos';
const IframeWrapper = React.lazy(() => import('./IframeWrapper'));
export default function Apply() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();

	console.log(name, email, message);
	// const GetData = async (event) => {
	// 	event.preventDefault();
	// 	const docRef = doc(db, "users325", "4M5nwp1rV6O6gM2aTUEH");
	// 	const docSnap = await getDoc(docRef);

	// 	if (docSnap.exists()) {
	// 		console.log("Document data:", docSnap.data());
	// 	} else {
	// 		// doc.data() will be undefined in this case
	// 		console.log("No such document!");
	// 	}
	// };
	const createData = async (event) => {
		event.preventDefault();

		try {
			const docRef = collection(db, 'message');
			await setDoc(doc(docRef, 'janak'), {
				name: name,
				email: email,
				subject: subject,
				message: message,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
	Aos.init();
	return (
		<div>
			<Typography
				data-aos='zoom-in-up'
				style={{
					textAlign: 'center',
					fontSize: '55px',
					fontWeight: '500',
					fontFamily: 'Roboto, sans-serif',
					color: '#181818',
					marginBottom: '30px',
				}}>
				{' '}
				<span style={{ color: '#1ab69d' }}> Get </span>
				Your Free Consultation
			</Typography>
			<section id='contact'>
				<IframeWrapper />

				<div className='container mt-5' data-aos='zoom-in-up'>
					{' '}
					<div className='row justify-content-center'>
						<div className='col-lg-3 col-md-4'>
							<div className='info'>
								<div>
									<i className='bi bi-geo-alt'></i>
									<p>
										Samakhushi 10,
										<br />
										Kathmandu 44600, Nepal{' '}
									</p>
								</div>
								<div>
									<i className='bi bi-envelope'></i>
									<p>
										<FiMail />
										gulfstaroverseas@gmail.com{' '}
									</p>
								</div>
								<div>
									<p>
										{' '}
										<FiPhoneCall></FiPhoneCall>977-014970002
									</p>
								</div>
								<div>
									<p>
										{' '}
										<FaFax></FaFax>977-014970003
									</p>
								</div>
							</div>
							<div className='social-links'></div>
							<div className='info' style={{ marginTop: '50px' }}>
								<div>
									<i className='bi bi-geo-alt'></i>
									<p style={{ color: '#27B889' }}>
										Malaysia office
										<br />
										APPLIED Value Management
									</p>
									<p> C-02-01,First Floor ,Garden Shopee </p>
								</div>
								<div>
									<i className='bi bi-envelope'></i>
									<p>
										<FiMail />
										appliedvalue@yahoo.com
									</p>
								</div>
								<div>
									<p> </p>
								</div>
								<div>
									<p>
										{' '}
										<FaFax></FaFax>+603-8011 0990
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-5 col-md-8'>
							<div className='form'>
								{' '}
								<form
									action='forms/contact.php'
									method='post'
									className='php-email-form'>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											className='form-control'
											id='name'
											placeholder='Your Name'
											required
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className='form-group mt-3'>
										<input
											type='email'
											className='form-control'
											name='email'
											id='email'
											placeholder='Your Email'
											required
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className='form-group mt-3'>
										<input
											type='text'
											className='form-control'
											name='subject'
											id='subject'
											placeholder='Subject'
											required
											onChange={(e) => setSubject(e.target.value)}
										/>
									</div>
									<div className='form-group mt-3'>
										<textarea
											className='form-control'
											name='message'
											rows='5'
											placeholder='Message'
											required
											onChange={(e) => setMessage(e.target.value)}></textarea>
									</div>
									<div className='my-3'>
										<div className='loading'>Loading</div>
										<div className='error-message'></div>
										<div className='sent-message'>
											Your message has been sent. Thank you!
										</div>
									</div>
									<div className='text-center'>
										<Button
											style={{
												background:
													'linear-gradient(to bottom, #181818, #181818)',
												marginBottom: '20px',
												color: '#fff',
											}}
											onClick={(event) => createData(event)}>
											Send Message
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
