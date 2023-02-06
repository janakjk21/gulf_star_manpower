import React from "react";
import img3 from "../Assets/Apple iPhone 8 Plus 3024x4032_012374 (1).jpg";
import "./director.css";
export default function Director() {
	return (
		<div className='main' id='about'>
			<div className='main__container'>
				<div className='main__img--container'>
					<div className='main__img--card'>
						<img src={img3} />
					</div>
				</div>
				<div className='main__content'>
					<h1>What do I do?</h1>
					<h2>I help businesses Create web apps</h2>
					<p>Schedule a call to learn more about my services</p>
					<button className='main__btn'>
						<a href='./contacthtm/contact.html'>Schedule Call</a>
					</button>
				</div>
			</div>
		</div>
	);
}
