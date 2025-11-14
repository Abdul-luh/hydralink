// Mock data
interface DrainagePoint {
	id: string;
	name: string;
	lat: number;
	lng: number;
	healthIndex: number;
	waterLevel: number;
	flowRate: number;
	status: string;
	lastUpdated: string;
	distance: number;
}

interface Notification {
	id: string;
	location: string;
	distance: number;
	severity: string;
	message: string;
	time: string;
}

interface WasteItem {
	type: string;
	pricePerKg: number;
	description: string;
}

export const drainagePoints: DrainagePoint[] = [
	{
		id: "1",
		name: "Admiralty Way, Lekki Phase 1",
		lat: 6.4474,
		lng: 3.4553,
		healthIndex: 74,
		waterLevel: 68,
		flowRate: 23,
		status: "good",
		lastUpdated: "2 mins ago",
		distance: 0.5,
	},
	{
		id: "2",
		name: "Ickworty Way",
		lat: 6.4484,
		lng: 3.4563,
		healthIndex: 85,
		waterLevel: 72,
		flowRate: 18,
		status: "good",
		lastUpdated: "5 mins ago",
		distance: 1.2,
	},
	{
		id: "3",
		name: "Lekki-Epe Expressway",
		lat: 6.4464,
		lng: 3.4543,
		healthIndex: 45,
		waterLevel: 85,
		flowRate: 8,
		status: "poor",
		lastUpdated: "1 min ago",
		distance: 0.8,
	},
	{
		id: "4",
		name: "Third Mainland Bridge",
		lat: 6.4454,
		lng: 3.4573,
		healthIndex: 92,
		waterLevel: 65,
		flowRate: 25,
		status: "good",
		lastUpdated: "10 mins ago",
		distance: 2.1,
	},
];

export const notifications: Notification[] = [
	{
		id: "1",
		location: "Lekki-Epe Expressway",
		distance: 0.8,
		severity: "high",
		message: "Critical clogging detected. Immediate attention required!",
		time: "5 mins ago",
	},
	{
		id: "2",
		location: "Ickworty Way Junction",
		distance: 1.2,
		severity: "medium",
		message: "Water level rising. Potential flood risk.",
		time: "15 mins ago",
	},
];

export const wasteTypes: WasteItem[] = [
	{
		type: "PET Bottles",
		pricePerKg: 150,
		description: "Clear plastic bottles",
	},
	{
		type: "HDPE Plastics",
		pricePerKg: 120,
		description: "Milk jugs, detergent bottles",
	},
	{ type: "PVC", pricePerKg: 100, description: "Pipes, cable insulation" },
	{ type: "LDPE", pricePerKg: 90, description: "Shopping bags, food wraps" },
	{
		type: "PP Plastics",
		pricePerKg: 130,
		description: "Bottle caps, containers",
	},
	{
		type: "Mixed Plastics",
		pricePerKg: 80,
		description: "General plastic waste",
	},
];
