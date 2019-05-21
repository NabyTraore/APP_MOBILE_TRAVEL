import { DepotsItem } from './DepotsItem';
import { Header } from './Header';

/**
 * The type Depots list.
 */
export class DepotsList {
    depots: DepotsItem[];
    name: string;
    namespace: string;
    header: Header;

    constructor() {
        this.depots = [];
    }
}