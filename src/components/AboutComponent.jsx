/** @format */

import React from "react";
import file from "./file/cv.pdf";

function AboutComponent(props) {
	return (
		<div className='aboutComponent'>
			<h1>About</h1>
			<div className='aboutComponent--grid'>
				<div className='about--me'>{props.about}</div>
				<div className='about--experience'>
					<ul>
						<li>{props.experience}</li>
						<li>{props.experience2}</li>
						<li>{props.experience3}</li>
					</ul>
				</div>
				<div className='about--cv'>
					<a href={file} download='Downloading My CV'>
						{props.cv}
					</a>
					<span class='material-symbols-outlined download--icon'>
						file_download
					</span>
				</div>
			</div>
		</div>
	);
}

export default AboutComponent;
