// ============================================
// FILE: app/dashboard/profile/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";

export default function ProfilePage() {
	const router = useRouter();

	const handleLogout = () => {
		localStorage.removeItem("isAuthenticated");
		router.push("/login");
	};

	return (
		<div className="h-full bg-slate-900 overflow-y-auto">
			<div className="p-6">
				<div className="text-center mb-8">
					<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
						<User className="w-12 h-12 text-white" />
					</div>
					<h2 className="text-xl font-bold text-white mb-1">John Doe</h2>
					<p className="text-slate-400">john.doe@email.com</p>
				</div>

				<div className="space-y-3 mb-6">
					<div className="bg-slate-800/50 rounded-xl p-4">
						<div className="text-sm text-slate-400 mb-1">Total Earnings</div>
						<div className="text-2xl font-bold text-green-400">₦15,450</div>
					</div>

					<div className="grid grid-cols-2 gap-3">
						<div className="bg-slate-800/50 rounded-xl p-4">
							<div className="text-sm text-slate-400 mb-1">Issues Cleared</div>
							<div className="text-xl font-bold text-white">12</div>
						</div>
						<div className="bg-slate-800/50 rounded-xl p-4">
							<div className="text-sm text-slate-400 mb-1">Waste Sold</div>
							<div className="text-xl font-bold text-white">8.5 kg</div>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<button className="w-full p-4 bg-slate-800/50 rounded-xl text-left text-white hover:bg-slate-800 transition-colors">
						<div className="font-medium">Transaction History</div>
						<div className="text-sm text-slate-400">View your earnings</div>
					</button>

					<button className="w-full p-4 bg-slate-800/50 rounded-xl text-left text-white hover:bg-slate-800 transition-colors">
						<div className="font-medium">Settings</div>
						<div className="text-sm text-slate-400">
							Preferences and notifications
						</div>
					</button>

					<button
						onClick={handleLogout}
						className="w-full p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-left text-red-400 hover:bg-red-500/20 transition-colors flex items-center gap-3">
						<LogOut className="w-5 h-5" />
						<div>
							<div className="font-medium">Logout</div>
							<div className="text-sm text-red-400/70">
								Sign out of your account
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
