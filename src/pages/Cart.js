import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Cart from "../features/user/Cart";
import NavbarGuest from "../features/user/components/NavbarGuest";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd]">
			<NavbarGuest />
			<Cart />
		</div>
	);
}

export default ExternalPage;
