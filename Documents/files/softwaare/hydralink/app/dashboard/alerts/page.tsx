// ============================================
// FILE: app/dashboard/alerts/page.tsx
"use client";

import { AlertCircle, Navigation } from "lucide-react";
import { notifications } from "@/lib/data";

export default function AlertsPage() {
	return (
		<div className="h-full bg-slate-900 overflow-y-auto">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-white mb-2">Alerts</h1>
				<p className="text-slate-400 mb-6">Drainage issues near you</p>

				<div className="space-y-3">
					{notifications.map((notif) => (
						<div
							key={notif.id}
							className={`bg-slate-800/50 rounded-2xl p-4 border-l-4 ${
								notif.severity === "high"
									? "border-red-500"
									: "border-yellow-500"
							}`}>
							<div className="flex items-start gap-3">
								<div
									className={`p-2 rounded-lg ${
										notif.severity === "high"
											? "bg-red-500/20"
											: "bg-yellow-500/20"
									}`}>
									<AlertCircle
										className={`w-5 h-5 ${
											notif.severity === "high"
												? "text-red-400"
												: "text-yellow-400"
										}`}
									/>
								</div>
								<div className="flex-1">
									<div className="flex items-center justify-between mb-1">
										<h3 className="font-semibold text-white">
											{notif.location}
										</h3>
										<span className="text-xs text-slate-400">{notif.time}</span>
									</div>
									<p className="text-sm text-slate-300 mb-2">{notif.message}</p>
									<div className="flex items-center gap-4 text-xs text-slate-400">
										<span className="flex items-center gap-1">
											<Navigation className="w-3 h-3" />
											{notif.distance} km away
										</span>
										<button className="text-blue-400 hover:text-blue-300">
											View on map
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-5 border border-blue-500/20">
					<h3 className="font-semibold text-white mb-2">💰 Earn Rewards</h3>
					<p className="text-sm text-slate-300">
						Clear drainage blockages in your area and earn money! Each cleared
						issue earns you ₦500-2000 based on severity.
					</p>
				</div>
			</div>
		</div>
	);
}
