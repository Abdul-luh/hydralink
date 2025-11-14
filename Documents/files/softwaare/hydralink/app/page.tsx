// ============================================
// FILE: app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
	// Check if user is authenticated (you'll implement this)
	const isAuthenticated = false; // Replace with actual auth check

	if (!isAuthenticated) {
		redirect("/login");
	} else {
		redirect("/dashboard");
	}
}
