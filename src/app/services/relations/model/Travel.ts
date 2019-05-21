import { Header } from "./Header";
import { VehiclesItem } from "./VehiclesItem";

/**
 * The type Travel.
 */
export class Travel {
    name: string;
    namespace: string;
    header: Header;
    vehicles: VehiclesItem[];

    constructor() {
        this.vehicles = [];
    }

}