// ============================================
// FILE: app/dashboard/page.tsx
"use client";

import { useState } from "react";
import { Droplets, Bell } from "lucide-react";
import MapView from "../components/MapView";
import DrainageDetail from "../components/DrainageDetail";
import { drainagePoints } from "@/lib/data";
import type { DrainagePoint } from "@/types/index";

export default function DashboardPage() {
	const [selectedPoint, setSelectedPoint] = useState<DrainagePoint | null>(
		null
	);

	return (
		<div className="h-full flex flex-col bg-slate-900">
			{/* Header */}
			<div className="p-4 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
							<Droplets className="w-5 h-5 text-white" />
						</div>
						<h1 className="text-xl font-bold text-white">HydraLink</h1>
					</div>
					<button className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors">
						<Bell className="w-6 h-6 text-slate-400" />
						<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
					</button>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-3 gap-2">
					<div className="bg-slate-800/50 rounded-lg p-3">
						<div className="text-xs text-slate-400 mb-1">Water Level</div>
						<div className="text-lg font-bold text-white">72%</div>
					</div>
					<div className="bg-slate-800/50 rounded-lg p-3">
						<div className="text-xs text-slate-400 mb-1">Flow Rate</div>
						<div className="text-lg font-bold text-blue-400">18 L/s</div>
					</div>
					<div className="bg-slate-800/50 rounded-lg p-3">
						<div className="text-xs text-slate-400 mb-1">Rainfall</div>
						<div className="text-lg font-bold text-cyan-400">80%</div>
					</div>
				</div>
			</div>

			{/* Map */}
			<div className="flex-1 relative">
				<MapView points={drainagePoints} onPointClick={setSelectedPoint} />
			</div>

			{/* Detail Modal */}
			{selectedPoint && (
				<DrainageDetail
					point={selectedPoint}
					onClose={() => setSelectedPoint(null)}
				/>
			)}
		</div>
	);
}
