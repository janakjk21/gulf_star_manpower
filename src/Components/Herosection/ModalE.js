import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../fire';
export default function ModalE() {
	const [show, setShow] = useState(false);
	const [advertisement, setAdvertisement] = useState([]);
	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	useEffect(() => {
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

		firstArticle();
		setTimeout(() => {
			setShow(true);
		}, 2000);
	}, []);

	return (
		<>
			{/* <Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button> */}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Jobs </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{advertisement.map((item) => {
						return <img src={item.imgUrl} alt='ads for the job posting'></img>;
					})}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
