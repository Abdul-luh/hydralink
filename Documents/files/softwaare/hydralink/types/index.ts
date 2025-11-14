// Types
export interface DrainagePoint {
	id: string;
	name: string;
	lat: number;
	lng: number;
	healthIndex: number;
	waterLevel: number;
	flowRate: number;
	status: "good" | "fair" | "poor" | "critical";
	lastUpdated: string;
	distance?: number;
}

export interface Notification {
	id: string;
	location: string;
	distance: number;
	severity: "high" | "medium";
	message: string;
	time: string;
}

export interface WasteItem {
	type: string;
	pricePerKg: number;
	description: string;
}
