import React from 'react';
import { Row, Col } from 'react-bootstrap';

// import { Card, Button } from 'react-bootstrap';
export default function Contactingpeople() {
	return (
		<Row>
			<Col md={4}>
				<Contactcard
					name='John Doe'
					email='johndoe@example.com'
					subject='janak'
					message='wait for me'
				/>
			</Col>
			<Col md={4}>
				<Contactcard
					name='John Doe'
					email='johndoe@example.com'
					subject='janak'
					message='wait for me'
				/>
			</Col>
			<Col md={4}>
				<Contactcard
					name='John Doe'
					email='johndoe@example.com'
					subject='janak'
					message='wait for me'
				/>
			</Col>
		</Row>
	);
}

const Contactcard = ({ name, email, subject, message }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>{subject}</h5>
				<p className='card-text'>{message}</p>
				<div className='card-footer'>
					<p className='card-text'>
						<strong>Name:</strong> {name}
					</p>
					<p className='card-text'>
						<strong>Email:</strong> {email}
					</p>
				</div>
			</div>
		</div>
	);
};
