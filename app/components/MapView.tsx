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
		{ top: "15%", right: "40%" },
		{ top: "45%", left: "60%" },
		{ top: "60%", right: "15%" },
		{ top: "80%", left: "50%" },
		{ top: "40%", right: "60%" },
		{ top: "20%", left: "70%" },
		{ top: "65%", left: "40%" },
		{ top: "50%", right: "50%" },
	];

	return (
		<div className="relative w-full h-screen bg-slate-900 overflow-hidden">
			{/* Simulated map background */}
			<div className="absolute inset-0">
				<svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
					{/* Background */}
					<rect width="1000" height="1000" fill="#0F172A" />

					{/* Main highways - thicker lines */}
					<line x1="100" y1="0" x2="300" y2="1000" stroke="#4B5563" strokeWidth="8" />
					<line x1="500" y1="0" x2="700" y2="1000" stroke="#4B5563" strokeWidth="8" />
					<line x1="900" y1="0" x2="850" y2="1000" stroke="#4B5563" strokeWidth="8" />
					<line x1="0" y1="300" x2="1000" y2="350" stroke="#4B5563" strokeWidth="8" />
					<line x1="0" y1="650" x2="1000" y2="600" stroke="#4B5563" strokeWidth="8" />

					{/* Primary roads */}
					<line x1="0" y1="150" x2="1000" y2="200" stroke="#6B7280" strokeWidth="5" />
					<line x1="0" y1="500" x2="1000" y2="520" stroke="#6B7280" strokeWidth="5" />
					<line x1="0" y1="800" x2="1000" y2="780" stroke="#6B7280" strokeWidth="5" />
					<line x1="200" y1="0" x2="250" y2="1000" stroke="#6B7280" strokeWidth="5" />
					<line x1="400" y1="0" x2="420" y2="1000" stroke="#6B7280" strokeWidth="5" />
					<line x1="600" y1="0" x2="580" y2="1000" stroke="#6B7280" strokeWidth="5" />
					<line x1="800" y1="0" x2="920" y2="1000" stroke="#6B7280" strokeWidth="5" />

					{/* Secondary roads - medium lines */}
					<line x1="0" y1="100" x2="600" y2="120" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="0" y1="250" x2="1000" y2="280" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="0" y1="400" x2="800" y2="420" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="0" y1="700" x2="1000" y2="680" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="0" y1="900" x2="1000" y2="920" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="150" y1="0" x2="180" y2="1000" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="350" y1="0" x2="370" y2="1000" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="450" y1="0" x2="480" y2="1000" stroke="#8B95A3" strokeWidth="2.5" />
					<line x1="750" y1="0" x2="780" y2="1000" stroke="#8B95A3" strokeWidth="2.5" />

					{/* Tertiary roads - thin lines for street grid */}
					<line x1="0" y1="50" x2="400" y2="60" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="175" x2="900" y2="190" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="320" x2="1000" y2="330" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="450" x2="1000" y2="460" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="550" x2="950" y2="560" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="750" x2="1000" y2="730" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="850" x2="1000" y2="860" stroke="#475569" strokeWidth="1.5" />
					<line x1="0" y1="950" x2="1000" y2="970" stroke="#475569" strokeWidth="1.5" />
					<line x1="125" y1="0" x2="140" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="275" y1="0" x2="290" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="325" y1="0" x2="340" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="375" y1="0" x2="390" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="550" y1="0" x2="560" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="650" y1="0" x2="670" y2="1000" stroke="#475569" strokeWidth="1.5" />
					<line x1="850" y1="0" x2="870" y2="1000" stroke="#475569" strokeWidth="1.5" />

					{/* Water features / Lagoons */}
					<ellipse cx="850" cy="750" rx="120" ry="150" fill="#1E40AF" opacity="0.3" />
					<path d="M 0 900 Q 200 850 400 900 T 800 880 T 1000 900" stroke="#1E40AF" strokeWidth="3" fill="none" opacity="0.6" />

					{/* District blocks */}
					<rect x="100" y="100" width="100" height="80" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="250" y="200" width="120" height="100" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="500" y="150" width="100" height="90" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="700" y="300" width="110" height="85" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="150" y="450" width="95" height="110" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="550" y="500" width="130" height="100" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="300" y="700" width="100" height="120" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
					<rect x="800" y="600" width="110" height="95" fill="none" stroke="#6B7280" strokeWidth="0.5" opacity="0.5" />
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
						className={`w-5 h-5 ${colors[point.status]
							} rounded-full border-4 border-slate-900 shadow-lg animate-pulse`}
					/>
					<div
						className={`absolute w-12 h-12 ${colors[point.status]
							} rounded-full opacity-20 -top-3.5 -left-3.5 group-hover:opacity-40 transition-opacity`}
					/>
					{/* Status label */}
					<div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-slate-900/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
						{point.status.charAt(0).toUpperCase() + point.status.slice(1)}
					</div>
				</button>
			))}			{/* Location labels - Epe Lagos Area */}
			<div className="absolute top-[23%] left-[30%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Epe Town
			</div>
			<div className="absolute top-[33%] right-[15%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Lekki-Epe Expressway
			</div>
			<div className="absolute top-[53%] left-[20%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Iwopin
			</div>
			<div className="absolute top-[68%] right-[28%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Odomtala
			</div>
			<div className="absolute top-[13%] right-[38%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Majidun
			</div>
			<div className="absolute top-[43%] left-[58%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Agbowa
			</div>
			<div className="absolute top-[58%] right-[13%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Abijo
			</div>
			<div className="absolute top-[78%] left-[48%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Oriwu
			</div>
			<div className="absolute top-[38%] right-[58%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Igbonla
			</div>
			<div className="absolute top-[18%] left-[68%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Akodo Ado
			</div>
			<div className="absolute top-[63%] left-[38%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Okun Imedu
			</div>
			<div className="absolute top-[48%] right-[48%] text-xs text-slate-400 whitespace-nowrap pointer-events-none">
				Epe Golf Estate
			</div>
		</div>
	);
}
