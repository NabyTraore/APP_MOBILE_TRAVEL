const CHARS_NUMEBR: number  = 28;

export class MagisterCab {

    private  applicationCode: string;
    private  productCode: string;
    private  transmitterCode: string;
    private  recipientCode: string;
    private  containerCode: string;
    private  dispatchNumber: string;
    private  processCode: string;
    private  formatCode: string;
    private  separationLevel: string;




    constructor(cab: string) {
        this.parse(cab);
    }


    public parse(cab: string){
        console.log("cab.length != CHARS_NUMEBR: "+(cab.length != CHARS_NUMEBR));
        console.log("(new RegExp(\"[0-9]{28}\")).test(cab): "+ (new RegExp("[0-9]{28}")).test(cab));
        if (!(new RegExp("[0-9]{28}")).test(cab) || (cab.length != CHARS_NUMEBR))
            throw new Error("wrong cab format");

        try {
            this.applicationCode = cab.substring(0, 1);
            this.productCode = cab.substring(1, 3);
            this.transmitterCode = cab.substring(3, 9);
            this.recipientCode = cab.substring(9, 15);
            this.containerCode = cab.substring(15, 17);
            this.dispatchNumber = cab.substring(17, 23);
            this.processCode = cab.substring(23, 25);
            this.formatCode = cab.substring(25, 26);
            this.separationLevel = cab.substring(26, 28);
        } catch (e) {
            throw new Error("wrong cab format");
        }
    }

    public getFullCab(): string {
        return this.applicationCode
                + this.productCode
                + this.transmitterCode
                + this.recipientCode
                + this.containerCode
                + this.dispatchNumber
                + this.processCode
                + this.formatCode
                + this.separationLevel;
    }

    /*@Override
    public boolean equals(Object obj) {
        return obj instanceof MagistereCab && getFullCab().equals(((MagistereCab) obj).getFullCab());
    }*/

}