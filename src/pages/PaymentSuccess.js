import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarGuest from "../features/user/components/NavbarGuest";
import PaymentSuccess from "../features/user/PaymentSuccess";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd] h-screen">
			<NavbarGuest />
			<PaymentSuccess />
		</div>
	);
}

export default ExternalPage;
