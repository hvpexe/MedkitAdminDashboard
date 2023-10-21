import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import About from "../features/user/About";
import NavbarGuest from "../features/user/components/NavbarGuest";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd] h-screen">
			<NavbarGuest />
			<About />
		</div>
	);
}

export default ExternalPage;
