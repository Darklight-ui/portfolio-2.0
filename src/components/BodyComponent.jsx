/** @format */

import React from "react";
import AboutComponent from "./AboutComponent";
import StackComponent from "./StackComponent";

function BodyComponent() {
	return (
		<div className='bodyComponent'>
			<AboutComponent
				about="I am a bright minded person, with a lot of ambitions and dreams, I will not say I am multi-talented but with my little skills, I am will to change the world with it. I'm a frontend developer with more than two years experience, a graphics designer, and an aspiring backend developer."
				experience='Fronted Developer'
				experience2='Graphics & Logo Designer'
				experience3='Company Branding'
				experience4=''
				cv='DOWNLOAD MY CV'
			/>
			<StackComponent />
		</div>
	);
}

export default BodyComponent;
