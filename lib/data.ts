// Mock data
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
	distance: number;
}

export interface Notification {
	id: string;
	location: string;
	distance: number;
	severity: string;
	message: string;
	time: string;
}

export interface WasteItem {
	type: string;
	pricePerKg: number;
	description: string;
}

export const drainagePoints: DrainagePoint[] = [
	{
		id: "1",
		name: "Epe Town Center",
		lat: 6.5833,
		lng: 3.9833,
		healthIndex: 74,
		waterLevel: 68,
		flowRate: 23,
		status: "good",
		lastUpdated: "2 mins ago",
		distance: 0.5,
	},
	{
		id: "2",
		name: "Lekki-Epe Expressway",
		lat: 6.5750,
		lng: 3.9700,
		healthIndex: 85,
		waterLevel: 72,
		flowRate: 18,
		status: "good",
		lastUpdated: "5 mins ago",
		distance: 1.2,
	},
	{
		id: "3",
		name: "Iwopin Junction",
		lat: 6.5650,
		lng: 3.9600,
		healthIndex: 45,
		waterLevel: 85,
		flowRate: 8,
		status: "poor",
		lastUpdated: "1 min ago",
		distance: 0.8,
	},
	{
		id: "4",
		name: "Odomtala Community",
		lat: 6.5500,
		lng: 3.9850,
		healthIndex: 92,
		waterLevel: 65,
		flowRate: 25,
		status: "good",
		lastUpdated: "10 mins ago",
		distance: 2.1,
	},
	{
		id: "5",
		name: "Majidun Market",
		lat: 6.5900,
		lng: 3.9500,
		healthIndex: 38,
		waterLevel: 88,
		flowRate: 5,
		status: "critical",
		lastUpdated: "3 mins ago",
		distance: 1.5,
	},
	{
		id: "6",
		name: "Agbowa Village",
		lat: 6.5600,
		lng: 3.8900,
		healthIndex: 68,
		waterLevel: 70,
		flowRate: 15,
		status: "fair",
		lastUpdated: "8 mins ago",
		distance: 2.3,
	},
	{
		id: "7",
		name: "Abijo Lagoon Road",
		lat: 6.5450,
		lng: 3.9950,
		healthIndex: 55,
		waterLevel: 78,
		flowRate: 12,
		status: "poor",
		lastUpdated: "4 mins ago",
		distance: 1.8,
	},
	{
		id: "8",
		name: "Oriwu Estate",
		lat: 6.5300,
		lng: 3.9400,
		healthIndex: 81,
		waterLevel: 66,
		flowRate: 20,
		status: "good",
		lastUpdated: "6 mins ago",
		distance: 2.5,
	},
	{
		id: "9",
		name: "Igbonla Community",
		lat: 6.5700,
		lng: 3.8800,
		healthIndex: 62,
		waterLevel: 75,
		flowRate: 14,
		status: "fair",
		lastUpdated: "7 mins ago",
		distance: 2.0,
	},
	{
		id: "10",
		name: "Akodo Ado Terminal",
		lat: 6.5950,
		lng: 3.8700,
		healthIndex: 77,
		waterLevel: 69,
		flowRate: 22,
		status: "good",
		lastUpdated: "9 mins ago",
		distance: 2.8,
	},
	{
		id: "11",
		name: "Okun Imedu Street",
		lat: 6.5550,
		lng: 3.9300,
		healthIndex: 48,
		waterLevel: 82,
		flowRate: 10,
		status: "poor",
		lastUpdated: "2 mins ago",
		distance: 1.3,
	},
	{
		id: "12",
		name: "Epe Golf Estate",
		lat: 6.5650,
		lng: 3.9450,
		healthIndex: 88,
		waterLevel: 71,
		flowRate: 19,
		status: "good",
		lastUpdated: "4 mins ago",
		distance: 1.7,
	},
];

export const notifications: Notification[] = [
	{
		id: "1",
		location: "Majidun Market",
		distance: 1.5,
		severity: "high",
		message: "Critical clogging detected. Immediate attention required!",
		time: "3 mins ago",
	},
	{
		id: "2",
		location: "Lekki-Epe Expressway",
		distance: 1.2,
		severity: "high",
		message: "Water level critically high. Flood risk imminent.",
		time: "5 mins ago",
	},
	{
		id: "3",
		location: "Okun Imedu Street",
		distance: 1.3,
		severity: "high",
		message: "Blockage detected. Flow rate abnormal.",
		time: "2 mins ago",
	},
	{
		id: "4",
		location: "Abijo Lagoon Road",
		distance: 1.8,
		severity: "medium",
		message: "Water level rising. Potential flood risk.",
		time: "4 mins ago",
	},
	{
		id: "5",
		location: "Iwopin Junction",
		distance: 0.8,
		severity: "medium",
		message: "Maintenance needed. Performance degrading.",
		time: "1 min ago",
	},
	{
		id: "6",
		location: "Agbowa Village",
		distance: 2.3,
		severity: "medium",
		message: "Routine inspection recommended.",
		time: "8 mins ago",
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
