// ============================================
// FILE: app/dashboard/layout.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Scan, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const router = useRouter();
	const [notificationCount, setNotificationCount] = useState(2);

	useEffect(() => {
		// Check authentication
		const isAuth = localStorage.getItem("isAuthenticated");
		if (!isAuth) {
			router.push("/login");
		}
	}, [router]);

	const navItems = [
		{ name: "Home", path: "/dashboard", icon: Home },
		{ name: "Scan", path: "/dashboard/scan", icon: Scan },
		{
			name: "Alerts",
			path: "/dashboard/alerts",
			icon: Bell,
			badge: notificationCount,
		},
		{ name: "Profile", path: "/dashboard/profile", icon: User },
	];

	return (
		<div className="h-screen flex flex-col bg-slate-900">
			{/* Content */}
			<div className="flex-1 overflow-hidden">{children}</div>

			{/* Bottom Navigation */}
			<nav className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 px-4 py-3">
				<div className="flex items-center justify-around">
					{navItems.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.path;

						return (
							<button
								key={item.path}
								onClick={() => router.push(item.path)}
								className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
									isActive ? "text-blue-400" : "text-slate-400 hover:text-white"
								}`}>
								<Icon className="w-6 h-6" />
								<span className="text-xs font-medium">{item.name}</span>
								{item.badge && item.badge > 0 && (
									<span className="absolute top-1 right-3 w-2 h-2 bg-red-500 rounded-full" />
								)}
							</button>
						);
					})}
				</div>
			</nav>
		</div>
	);
}
