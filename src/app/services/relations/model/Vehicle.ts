import { RelationsItem } from "./RelationsItem";

/**
 * The type Vehicle.
 */
export class Vehicle {
	arrivalOrDeparture: string;
	linkNumber: string;
	circulationDate: string;
	vehicleCapacity: string;
	driver: Object;
	linkPosition: string;
	haulier: string;
	periodicity: string;
	nextStep: string;
	linkType: string;
	departureExpectedTime: string;
	arrivalExpectedTime: string;
	dock: string;
	relations: RelationsItem[];
	vehicleType: string;
}