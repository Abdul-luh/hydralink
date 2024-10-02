import Header from "./Header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-start justify-items-center  min-h-screen w-screen pb-20 gap-6 font-[family-name:var(--font-geist-sans)]">
			<Header />
			{children}
		</div>
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		// 	<Navbar />
		// </div>
	);
}
