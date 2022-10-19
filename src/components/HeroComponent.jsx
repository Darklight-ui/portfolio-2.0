/** @format */

import React from "react";

function HeroComponent() {
	return (
		<div className='heroComponent'>
			<div className='hero--intro'>
				<h1>Hi, I am Emmanuel Ogankpa,</h1>
				<p>Welcome to my Official Portfolio.</p>
			</div>
			<div className='hero--image'>
				<img src={require("./images/IMG_0055.jpeg")} alt='image' />
				<span>Emmanuel Ogankpa</span>
			</div>
		</div>
	);
}

export default HeroComponent;
