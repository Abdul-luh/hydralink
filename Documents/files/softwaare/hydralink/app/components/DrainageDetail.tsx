// ============================================
// FILE: components/DrainageDetail.tsx
"use client";

import { Clock, Navigation, Droplets, Activity } from "lucide-react";
import type { DrainagePoint } from "@/types/index";

interface DrainageDetailProps {
	point: DrainagePoint;
	onClose: () => void;
}

export default function DrainageDetail({
	point,
	onClose,
}: DrainageDetailProps) {
	const getStatusColor = (status: string) => {
		const colors = {
			good: "text-green-400",
			fair: "text-yellow-400",
			poor: "text-orange-400",
			critical: "text-red-400",
		};
		return colors[status as keyof typeof colors];
	};

	const getHealthColor = (index: number) => {
		if (index >= 70) return "from-green-500 to-emerald-400";
		if (index >= 50) return "from-yellow-500 to-orange-400";
		return "from-orange-500 to-red-500";
	};

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end">
			<div className="w-full bg-slate-900 rounded-t-3xl p-6 animate-slide-up">
				<div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-6" />

				<div className="flex items-start justify-between mb-6">
					<div>
						<h2 className="text-xl font-bold text-white mb-1">{point.name}</h2>
						<div className="flex items-center gap-3 text-sm text-slate-400">
							<span className="flex items-center gap-1">
								<Clock className="w-4 h-4" />
								{point.lastUpdated}
							</span>
							<span className="flex items-center gap-1">
								<Navigation className="w-4 h-4" />
								{point.distance} km away
							</span>
						</div>
					</div>
					<button onClick={onClose} className="text-slate-400 hover:text-white">
						<svg
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div className="space-y-4">
					{/* Health Index */}
					<div className="bg-slate-800/50 rounded-2xl p-4">
						<div className="flex items-center justify-between mb-3">
							<span className="text-slate-400 text-sm">Health Index</span>
							<span
								className={`text-2xl font-bold ${getStatusColor(
									point.status
								)}`}>
								{point.healthIndex}
							</span>
						</div>
						<div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
							<div
								className={`h-full bg-gradient-to-r ${getHealthColor(
									point.healthIndex
								)} transition-all duration-500`}
								style={{ width: `${point.healthIndex}%` }}
							/>
						</div>
						<div className="flex justify-between text-xs text-slate-500 mt-2">
							<span>POOR</span>
							<span>FAIR</span>
							<span>GOOD</span>
							<span>EXCELLENT</span>
						</div>
					</div>

					{/* Metrics */}
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-slate-800/50 rounded-xl p-4">
							<div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
								<Droplets className="w-4 h-4" />
								Water Level
							</div>
							<div className="text-2xl font-bold text-white">
								{point.waterLevel}%
							</div>
						</div>

						<div className="bg-slate-800/50 rounded-xl p-4">
							<div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
								<Activity className="w-4 h-4" />
								Flow Rate
							</div>
							<div className="text-2xl font-bold text-blue-400">
								{point.flowRate} <span className="text-sm">L/s</span>
							</div>
						</div>
					</div>

					<button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all">
						Report Issue
					</button>
				</div>
			</div>
		</div>
	);
}
