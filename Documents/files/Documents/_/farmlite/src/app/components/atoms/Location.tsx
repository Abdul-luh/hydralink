import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

export default function Location() {
	return (
		<div className="flex justify-between w-full p-2">
			<div className="flex items-center gap-6">
				<MdLocationOn color="#008000" />
				<p>21, Iju Road, Agege, Lagos</p>
			</div>
			<Link href="/" className="text-[#008000]">
				Signin
			</Link>
		</div>
	);
}
