// ============================================
// FILE: components/MapView.tsx
"use client";

import type { DrainagePoint } from "@/types/index";
import { useEffect, useRef } from "react";

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
	];

	const mapRef = useRef<HTMLDivElement | null>(null);
	const markersRef = useRef<any[]>([]);

	// Read API key from NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

	// helper to load Google Maps JS API (simple loader)
	const loadGoogleMaps = (key?: string) => {
		return new Promise<void>((resolve, reject) => {
			if ((window as any).google && (window as any).google.maps) {
				resolve();
				return;
			}

			if (!key) {
				reject(new Error("Google Maps API key not provided. Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY."));
				return;
			}

			const existing = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
			if (existing) {
				existing.addEventListener("load", () => resolve());
				existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps script")));
				return;
			}

			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
			script.async = true;
			script.defer = true;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error("Failed to load Google Maps script"));
			document.head.appendChild(script);
		});
	};

	useEffect(() => {
		let map: any = null;

		// initialize map and markers
		loadGoogleMaps(apiKey)
			.then(() => {
				const g = (window as any).google;
				const center = points && points.length > 0 ? { lat: points[0].lat, lng: points[0].lng } : { lat: 6.4474, lng: 3.4553 };

				if (!mapRef.current) return;

				map = new g.maps.Map(mapRef.current, {
					center,
					zoom: 13,
					gestureHandling: "greedy",
					mapTypeControl: false,
				});

				// cleanup old markers
				markersRef.current.forEach((m) => m.setMap(null));
				markersRef.current = [];

				// create markers
				points.forEach((point) => {
					const color = point.status === "good" ? "#10B981" : point.status === "fair" ? "#F59E0B" : point.status === "poor" ? "#FB923C" : "#EF4444";

					const marker = new g.maps.Marker({
						position: { lat: point.lat, lng: point.lng },
						map,
						title: point.name,
						icon: {
							path: g.maps.SymbolPath.CIRCLE,
							scale: 8,
							fillColor: color,
							fillOpacity: 1,
							strokeWeight: 2,
							strokeColor: "#0f172a",
						},
					});

					marker.addListener("click", () => onPointClick(point));

					markersRef.current.push(marker);
				});
			})
			.catch((err) => {
				// If API key not set or loading failed, we keep a fallback blank map area with message in console
				// You can also choose to show a UI message here.
				// eslint-disable-next-line no-console
				console.error(err.message || err);
			});

		return () => {
			// cleanup markers
			markersRef.current.forEach((m) => m && m.setMap && m.setMap(null));
			markersRef.current = [];
			// Note: Google Maps script left in DOM intentionally to avoid reloading repeatedly.
		};
	}, [points, apiKey, onPointClick]);

	return (
		<div className="relative w-full h-full">
			{/* Map container */}
			<div ref={mapRef} className="w-full h-full rounded-lg" />

			{/* If user hasn't added an API key, show a subtle overlay instruction */}
			{!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<div className="bg-slate-900/60 text-slate-300 px-4 py-2 rounded-md text-sm">
						Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable maps
					</div>
				</div>
			)}
		</div>
	);
}
