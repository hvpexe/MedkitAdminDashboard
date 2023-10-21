import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Product from "../features/user/Product";
import NavbarGuest from "../features/user/components/NavbarGuest";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd] h-screen">
			<NavbarGuest />
			<Product />
		</div>
	);
}

export default ExternalPage;
