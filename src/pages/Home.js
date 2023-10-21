import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Home from "../features/user/Home";
import NavbarGuest from "../features/user/components/NavbarGuest";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd] h-screen">
			<NavbarGuest />
			<Home />
		</div>
	);
}

export default ExternalPage;
