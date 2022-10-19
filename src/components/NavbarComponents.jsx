/** @format */

import React from "react";

function NavbarComponents() {
	const [open, setOpen] = React.useState(false);
	function openNav() {
		setOpen((prevState) => !prevState);
	}
	return (
		<div>
			<header>
				<div className='logo'>
					<h1>Ogankpa Emmanuel</h1>
				</div>
				<span class='material-symbols-outlined open--menu' onClick={openNav}>
					{open ? "close" : "menu_open"}
				</span>
				<div className={open ? "mobile" : "menu"}>
					<a href='#'>
						<h3>Home</h3>
					</a>
					<a href='#'>
						<h3>About</h3>
					</a>
					<a href='#'>
						<h3>Stack</h3>
					</a>
					<a href='#'>
						<h3>Contact</h3>
					</a>
				</div>
			</header>
		</div>
	);
}

export default NavbarComponents;
