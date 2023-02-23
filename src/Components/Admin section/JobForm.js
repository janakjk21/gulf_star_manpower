import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const JobForm = () => {
	const [jobTitle, setJobTitle] = useState('');
	const [location, setLocation] = useState('');
	const [company, setCompany] = useState('');
	const [category, setCategory] = useState('');
	const [salary, setSalary] = useState('');
	const [closingDate, setClosingDate] = useState('');
	const [details, setDetails] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// handle form submission
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId='formJobTitle'>
				<Form.Label>Job Title</Form.Label>
				<Form.Control
					type='text'
					value={jobTitle}
					onChange={(e) => setJobTitle(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formLocation'>
				<Form.Label>Location</Form.Label>
				<Form.Control
					type='text'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formCompany'>
				<Form.Label>Company</Form.Label>
				<Form.Control
					type='text'
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formCategory'>
				<Form.Label>Category</Form.Label>
				<Form.Control
					type='text'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formSalary'>
				<Form.Label>Salary</Form.Label>
				<Form.Control
					type='text'
					value={salary}
					onChange={(e) => setSalary(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formClosingDate'>
				<Form.Label>Closing Date</Form.Label>
				<Form.Control
					type='date'
					value={closingDate}
					onChange={(e) => setClosingDate(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formDetails'>
				<Form.Label>Details</Form.Label>
				<Form.Control
					as='textarea'
					rows={3}
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
			</Form.Group>

			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default JobForm;
