// ============================================
// FILE: app/dashboard/scan/page.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Upload, X, Mail } from "lucide-react"; // Added X and Mail for the modal
import { wasteTypes } from "@/lib/data";

interface ValuationResult {
	plastic_name: string;
	unit_price: number;
	quantity: number;
	total_price: number;
}

// --- NEW SUCCESS MODAL COMPONENT ---
const SuccessModal = ({ isOpen, onClose, result }: { isOpen: boolean, onClose: () => void, result: ValuationResult | null }) => {
	if (!isOpen) return null;

	// Helper function to format the email body content
	const generateEmailBody = () => {
		if (!result) return "";
		const body = `
Dear Recycler,

I would like to submit my plastic waste for collection.

Waste Type: ${result.plastic_name}
Quantity: ${result.quantity} pieces
Estimated Value: ₦${result.total_price}

Please confirm the next steps for pickup.

Thank you.
`;
		return encodeURIComponent(body.trim());
	};

	const mailtoLink = `mailto:recycling-team@example.com?subject=Collection%20Request%20for%20${result?.plastic_name}&body=${generateEmailBody()}`;

	return (
		<div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
			<div 
				className="bg-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative border border-green-500/50"
				onClick={(e) => e.stopPropagation()} // Stop click from closing the modal
			>
				<button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
					<X className="w-6 h-6" />
				</button>
				
				<div className="text-center mb-6">
					<div className="mx-auto w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
						<Mail className="w-8 h-8 text-green-400" />
					</div>
					<h2 className="text-2xl font-bold text-white mb-2">Collection Request Ready!</h2>
					<p className="text-slate-400">
						Your estimate is complete. To proceed with collection, please send an email with the details below.
					</p>
				</div>

				<div className="bg-slate-900 rounded-xl p-4 mb-6">
					<p className="text-sm text-slate-400 mb-1">Total Estimated Value</p>
					<div className="text-3xl font-bold text-green-400">
						₦{result?.total_price}
					</div>
				</div>

				<a href={mailtoLink} 
					className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all">
					<Mail className="w-5 h-5 mr-2" />
					Email for Collection
				</a>
				<button onClick={onClose} className="w-full mt-3 py-3 text-slate-400 hover:text-white transition-colors">
					Close
				</button>
			</div>
		</div>
	);
};
// ------------------------------------


export default function ScanPage() {
	const [valuationResult, setValuationResult] = useState<ValuationResult | null>(null);
	const [quantity, setQuantity] = useState("");
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	const [capturedImagePreview, setCapturedImagePreview] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	
	// --- NEW STATE FOR MODAL ---
	const [isModalOpen, setIsModalOpen] = useState(false);
	// ---------------------------

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;

		if (file) {
			setUploadedFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setCapturedImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
			setValuationResult(null); // Clear previous result
		} else {
			setUploadedFile(null);
			setCapturedImagePreview(null);
		}
	};

	const handleEstimate = async () => {
		if (!uploadedFile || !quantity) return;
		setIsLoading(true);

		try {
			const userId = 1;
			const formData = new FormData();
			formData.append("user_id", userId.toString());
			formData.append("image", uploadedFile);
			formData.append("quantity", quantity);

			const response = await fetch("https://hydralink.onrender.com/valuation/estimate", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (response.ok) {
				setValuationResult(data);
			} else {
				alert("Failed to estimate plastic value. Please try again.");
			}
		} catch (error) {
			alert("Network error. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleResetUpload = () => {
		setUploadedFile(null);
		setCapturedImagePreview(null);
		setQuantity("");
		setValuationResult(null);
	}

	// --- NEW HANDLER FOR SUBMITTING COLLECTION ---
	const handleCollectionSubmit = () => {
		// In a real app, you would send a collection request to your backend here.
		// For now, we'll just open the modal.
		setIsModalOpen(true);
	};
	// -----------------------------------------------

	return (
		<div className="h-full bg-slate-900 overflow-y-auto">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-white mb-2">Upload Waste</h1>
				<p className="text-slate-400 mb-6">
					Upload plastic waste image to see its value
				</p>

				{/* Uploader */}
				<div className="mb-6">
					{capturedImagePreview ? (
						// Display uploaded image preview and controls
						<div className="mt-4 bg-slate-800/50 rounded-2xl p-4">
							<img src={capturedImagePreview} alt="uploaded plastic" className="w-full h-48 object-cover rounded-xl mb-4" />
							<div className="space-y-3">
								<div>
									<label className="block text-sm text-slate-400 mb-2">
										Quantity (pieces)
									</label>
									<input
										type="number"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
										placeholder="Enter quantity"
										className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
										disabled={!!valuationResult} // Disable if result is shown
									/>
								</div>
								{!valuationResult && ( // Show Estimate button only if no result is available
									<button
										onClick={handleEstimate}
										disabled={!quantity || isLoading}
										className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all disabled:opacity-50">
										{isLoading ? "Estimating..." : "Get Estimate"}
									</button>
								)}
								<button
									onClick={handleResetUpload}
									className="w-full py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all">
									Change Image
								</button>
							</div>
						</div>
					) : (
						<label htmlFor="image-upload" className="w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border-2 border-dashed border-slate-600 hover:border-blue-500 transition-all flex flex-col items-center justify-center group cursor-pointer">
							<Upload className="w-16 h-16 text-slate-500 group-hover:text-blue-400 transition-colors mb-3" />
							<span className="text-slate-400 group-hover:text-white transition-colors">
								Tap to upload waste image
							</span>
							<input
								id="image-upload"
								type="file"
								accept="image/*"
								className="hidden"
								onChange={handleFileChange}
							/>
						</label>
					)}
				</div>

				{/* Valuation Result */}
				{valuationResult && (
					<div className="bg-slate-800/50 rounded-2xl p-5 mb-6 border border-green-500/30">
						<div className="flex items-start justify-between mb-4">
							<div>
								<h3 className="text-lg font-bold text-white mb-1">
									{valuationResult.plastic_name}
								</h3>
								<p className="text-sm text-slate-400">
									Quantity: {valuationResult.quantity} pieces
								</p>
							</div>
							<div className="text-right">
								<div className="text-2xl font-bold text-green-400">
									₦{valuationResult.unit_price}
								</div>
								<div className="text-xs text-slate-400">per piece</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20 mb-4">
							<div className="text-sm text-slate-400 mb-1">
								Total Value
							</div>
							<div className="text-3xl font-bold text-green-400">
								₦{valuationResult.total_price}
							</div>
						</div>

						{/* --- SUBMIT BUTTON NOW CALLS THE HANDLER TO OPEN MODAL --- */}
						<button onClick={handleCollectionSubmit} 
							className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all">
							Submit for Collection
						</button>
						{/* --------------------------------------------------------- */}
					</div>
				)}

				{!capturedImagePreview && (
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
				)}
			</div>
			
			{/* --- RENDER THE SUCCESS MODAL --- */}
			<SuccessModal 
				isOpen={isModalOpen} 
				onClose={() => setIsModalOpen(false)} 
				result={valuationResult} 
			/>
			{/* -------------------------------- */}
		</div>
	);
}
