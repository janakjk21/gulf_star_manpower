import React, { useState } from 'react';

import { db } from '../../fire';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import '../../Herosection/theme.min.css';

export default function CreateNews() {
	const [newsTitle, setnewsTitle] = useState();
	const [news, setnews] = useState();
	const [file, setfile] = useState();

	const createnews = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(collection(db, 'createnews'), {
				news: news,
				newsTitle: newsTitle,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}

		const storage = getStorage();
		const storageRef = ref(storage, 'createjobs1');

		// 'file' comes from the Blob or File API
		uploadBytes(storageRef, file).then((snapshot) => {
			console.log('Uploaded a blob or file!');
		});
	};
	return (
		<div class='container'>
			<form>
				<div>
					<div class='col-md-6'>
						<div class='form-group'>
							<div class='form-label mb-3'>
								<label for='first'>News Title</label>
							</div>
							<input
								type='text'
								class='form-control'
								placeholder=''
								id='first'
								value={newsTitle}
								onChange={(e) => setnewsTitle(e.target.value)}
							/>
						</div>
					</div>

					<div class='col-md-6'>
						<div class='form-group'>
							<div class='form-label mb-3'>
								<label for='last'>News</label>
							</div>
							<textarea
								class='form-control'
								placeholder=''
								value={news}
								id='last'
								style={{ height: '200px' }}
								onChange={(e) => setnews(e.target.value)}></textarea>
						</div>
					</div>

					<div class='col-md-6'>
						<div class='form-group'>
							<div class='form-label mb-3'>
								<label for='last'>Image</label>
							</div>
							<input
								type='file'
								class='form-control-file'
								placeholder=''
								value={File}
								id='last'
								onChange={(e) => setfile(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<button
					type='submit'
					class='btn btn-primary mt-3'
					onClick={(e) => createnews(e)}>
					Submit
				</button>
			</form>
		</div>
	);
}
