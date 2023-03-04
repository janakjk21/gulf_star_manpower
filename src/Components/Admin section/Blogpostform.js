import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BlogPostForm() {
	const [blogPost, setBlogPost] = useState({
		title: '',
		author: {
			name: '',
			email: '',
		},
		date: '',
		content: '',
	});

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if (name === 'name' || name === 'email') {
			setBlogPost({
				...blogPost,
				author: {
					...blogPost.author,
					[name]: value,
				},
			});
		} else {
			setBlogPost({
				...blogPost,
				[name]: value,
			});
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(blogPost);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId='title'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type='text'
					name='title'
					value={blogPost.title}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId='authorName'>
				<Form.Label>Author Name</Form.Label>
				<Form.Control
					type='text'
					name='name'
					value={blogPost.author.name}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId='authorEmail'>
				<Form.Label>Author Email</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={blogPost.author.email}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId='date'>
				<Form.Label>Date</Form.Label>
				<Form.Control
					type='date'
					name='date'
					value={blogPost.date}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group controlId='content'>
				<Form.Label>Content</Form.Label>
				<Form.Control
					as='textarea'
					rows={5}
					name='content'
					value={blogPost.content}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default BlogPostForm;
