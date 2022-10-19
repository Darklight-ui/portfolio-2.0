/** @format */

import React from "react";

function StackComponent() {
	return (
		<div className='stackComponent'>
			<h1>My Stack</h1>
			<div className='stack-grid'>
				<div className='html--stack'>
					<img
						src={require("./images/R.png")}
						alt=''
						className='html--img'
						width='100px'
					/>
					<h3>HTML 5</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='css--stack'>
					<img
						src={require("./images/css-3-logo-clipart.jpg")}
						alt=''
						className='css--img'
						width='100px'
					/>
					<h3>CSS 3</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='js--stack'>
					<img
						src={require("./images/OIP.jpg")}
						alt=''
						className='js--img'
						width='100px'
					/>
					<h3>JAVSCRIPT</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='react--stack'>
					<img
						src={require("./images/685-6854970_react-logo-png-png-download-logo-png-reactjs.png")}
						alt=''
						className='react--img'
						width='100px'
					/>
					<h3>REACT JS</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='node--stack'>
					<img
						src={require("./images/node-logo-png-6.jpg")}
						alt=''
						className='node--img'
						width='100px'
					/>
					<h3>NODE JS</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='wp--stack'>
					<img
						src={require("./images/wordpress-logo11.png")}
						alt=''
						className='wp--img'
						width='100px'
					/>
					<h3>WORD PRESS</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='github--stack'>
					<img
						src={require("./images/github-logo.png")}
						alt=''
						className='wp--img'
						width='100px'
					/>
					<h3>GitHub</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
				<div className='ps--stack'>
					<img
						src={require("./images/R.jpg")}
						alt=''
						className='wp--img'
						width='100px'
					/>
					<h3>PHOTOSHOP</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						pariatur minima asperiores eligendi eum repellendus harum quaerat
						incidunt exercitationem quos.
					</p>
				</div>
			</div>
		</div>
	);
}

export default StackComponent;
