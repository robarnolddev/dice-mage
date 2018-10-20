export default class Utility {

    constructor() {

    }

    static async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}