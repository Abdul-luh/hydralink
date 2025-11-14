// ============================================
// FILE: app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Droplets } from "lucide-react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate login - replace with actual auth logic
		setTimeout(() => {
			// Store auth token in localStorage/cookies
			localStorage.setItem("isAuthenticated", "true");
			router.push("/dashboard");
		}, 1000);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-4">
						<Droplets className="w-8 h-8 text-white" />
					</div>
					<h1 className="text-3xl font-bold text-white mb-2">HydraLink</h1>
					<p className="text-slate-400">Monitor. Scan. Earn.</p>
				</div>

				<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
					<form onSubmit={handleLogin} className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-slate-300 mb-2">
								Email
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="your@email.com"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-300 mb-2">
								Password
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="••••••••"
								required
							/>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all disabled:opacity-50">
							{isLoading ? "Signing in..." : "Sign In"}
						</button>

						<div className="text-center">
							<button
								type="button"
								className="text-sm text-slate-400 hover:text-white transition-colors">
								Don&apos;t have an account?{" "}
								<span className="text-blue-400">Sign up</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
