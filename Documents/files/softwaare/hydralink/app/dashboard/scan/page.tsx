// ============================================
// FILE: app/dashboard/scan/page.tsx
"use client";

import { useState } from "react";
import { Camera, Scan } from "lucide-react";
import { wasteTypes } from "@/lib/data";
import type { WasteItem } from "@/types/index";

export default function ScanPage() {
	const [scannedItem, setScannedItem] = useState<WasteItem | null>(null);
	const [weight, setWeight] = useState("");
	const [showCamera, setShowCamera] = useState(false);

	const handleScan = () => {
		setShowCamera(true);
		// Simulate scanning
		setTimeout(() => {
			setScannedItem(wasteTypes[0]);
			setShowCamera(false);
		}, 2000);
	};

	const calculateEarnings = () => {
		if (!scannedItem || !weight) return 0;
		return (parseFloat(weight) * scannedItem.pricePerKg).toFixed(2);
	};

	return (
		<div className="h-full bg-slate-900 overflow-y-auto">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-white mb-2">Scan Waste</h1>
				<p className="text-slate-400 mb-6">
					Scan plastic waste to see its value
				</p>

				{/* Scanner */}
				<div className="mb-6">
					{showCamera ? (
						<div className="relative aspect-square bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse" />
							<div className="text-white text-center">
								<Camera className="w-16 h-16 mx-auto mb-2 animate-bounce" />
								<p>Scanning...</p>
							</div>
						</div>
					) : (
						<button
							onClick={handleScan}
							className="w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border-2 border-dashed border-slate-600 hover:border-blue-500 transition-all flex flex-col items-center justify-center group">
							<Scan className="w-16 h-16 text-slate-500 group-hover:text-blue-400 transition-colors mb-3" />
							<span className="text-slate-400 group-hover:text-white transition-colors">
								Tap to scan waste
							</span>
						</button>
					)}
				</div>

				{/* Scanned Result */}
				{scannedItem && (
					<div className="bg-slate-800/50 rounded-2xl p-5 mb-6 border border-green-500/30">
						<div className="flex items-start justify-between mb-4">
							<div>
								<h3 className="text-lg font-bold text-white mb-1">
									{scannedItem.type}
								</h3>
								<p className="text-sm text-slate-400">
									{scannedItem.description}
								</p>
							</div>
							<div className="text-right">
								<div className="text-2xl font-bold text-green-400">
									₦{scannedItem.pricePerKg}
								</div>
								<div className="text-xs text-slate-400">per kg</div>
							</div>
						</div>

						<div className="space-y-3">
							<div>
								<label className="block text-sm text-slate-400 mb-2">
									Enter weight (kg)
								</label>
								<input
									type="number"
									value={weight}
									onChange={(e) => setWeight(e.target.value)}
									placeholder="0.0"
									className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							{weight && (
								<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
									<div className="text-sm text-slate-400 mb-1">
										Estimated Earnings
									</div>
									<div className="text-3xl font-bold text-green-400">
										₦{calculateEarnings()}
									</div>
								</div>
							)}

							<button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all">
								Submit for Collection
							</button>
						</div>
					</div>
				)}

				{/* Waste Types List */}
				<div>
					<h2 className="text-lg font-bold text-white mb-4">
						Accepted Waste Types
					</h2>
					<div className="space-y-2">
						{wasteTypes.map((item, index) => (
							<div
								key={index}
								className="bg-slate-800/50 rounded-xl p-4 flex items-center justify-between">
								<div>
									<div className="font-medium text-white">{item.type}</div>
									<div className="text-sm text-slate-400">
										{item.description}
									</div>
								</div>
								<div className="text-right">
									<div className="font-bold text-green-400">
										₦{item.pricePerKg}
									</div>
									<div className="text-xs text-slate-400">per kg</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
