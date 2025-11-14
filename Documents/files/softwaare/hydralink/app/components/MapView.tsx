// ============================================
// FILE: components/MapView.tsx
"use client";

import type { DrainagePoint } from "@/types";

interface MapViewProps {
	points: DrainagePoint[];
	onPointClick: (point: DrainagePoint) => void;
}

export default function MapView({ points, onPointClick }: MapViewProps) {
	const colors = {
		good: "bg-green-500",
		fair: "bg-yellow-500",
		poor: "bg-orange-500",
		critical: "bg-red-500",
	};

	const positions = [
		{ top: "25%", left: "30%" },
		{ top: "35%", right: "25%" },
		{ top: "55%", left: "20%" },
		{ top: "70%", right: "30%" },
	];

	return (
		<div className="relative w-full h-full bg-slate-900">
			{/* Simulated map background */}
			<div className="absolute inset-0 opacity-30">
				<svg className="w-full h-full" viewBox="0 0 400 600">
					<line
						x1="50"
						y1="0"
						x2="150"
						y2="600"
						stroke="#374151"
						strokeWidth="2"
					/>
					<line
						x1="200"
						y1="0"
						x2="300"
						y2="600"
						stroke="#374151"
						strokeWidth="2"
					/>
					<line
						x1="0"
						y1="200"
						x2="400"
						y2="250"
						stroke="#374151"
						strokeWidth="2"
					/>
					<line
						x1="0"
						y1="400"
						x2="400"
						y2="380"
						stroke="#374151"
						strokeWidth="2"
					/>
				</svg>
			</div>

			{/* Drainage points */}
			{points.map((point, index) => (
				<button
					key={point.id}
					onClick={() => onPointClick(point)}
					className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
					style={positions[index]}>
					<div
						className={`w-5 h-5 ${
							colors[point.status]
						} rounded-full border-4 border-slate-900 shadow-lg animate-pulse`}
					/>
					<div
						className={`absolute w-12 h-12 ${
							colors[point.status]
						} rounded-full opacity-20 -top-3.5 -left-3.5 group-hover:opacity-40 transition-opacity`}
					/>
				</button>
			))}

			{/* Location labels */}
			<div className="absolute top-[23%] left-[30%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Lekki-Epe Expressway
			</div>
			<div className="absolute top-[33%] right-[15%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Ickworty Way
			</div>
		</div>
	);
}
