import MenuBtn from "../atoms/MenuBtn";

export default function Navbar() {
	return (
		<div className="flex justify-start items-center max-w-l  px-4 py-2  border-[#008000] border-b text-2xl">
			<MenuBtn />
			<div className="w-full ">
				<p className="text-[#008000] text-center">
					{" "}
					pyr<span className="text-[black]">a</span>myd
				</p>
			</div>
		</div>
	);
}
