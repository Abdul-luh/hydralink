import React from "react";
import Navbar from "./Navbar";
import Location from "../atoms/Location";

export default function Header() {
	return (
		<header className="w-full">
			<Navbar />
			<Location />
		</header>
	);
}
