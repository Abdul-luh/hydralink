"use client";
import { CiSearch } from "react-icons/ci";
import CartBtn from "./CartBtn";
import { ChangeEvent, useState } from "react";

export default function SearchArea() {
	const [search, setSearch] = useState("");

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		console.log(search);
	};
	return (
		<div className="flex justify-between gap-2 w-full p-2">
			<div className="text-[#008000] flex items-center bg-gray-300 rounded-full p-1">
				<CiSearch className="text-2xl font-bold" />
				<input
					type="text"
					placeholder="search"
					name="search"
					onChange={handleSearch}
					className="bg-transparent h-full rounded-full sm:text-2xl text-[#008000] outline-[#008000] py-1 px-2"
				/>
			</div>
			<CartBtn />
		</div>
	);
}
