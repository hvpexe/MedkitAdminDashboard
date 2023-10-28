import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Download from "../features/user/Download";
import NavbarGuest from "../features/user/components/NavbarGuest";

function ExternalPage() {
	return (
		<div className="bg-[#ecfffd] min-h-screen">
			<NavbarGuest />
			<Download />
		</div>
	);
}

export default ExternalPage;
