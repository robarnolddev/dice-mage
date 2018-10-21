import * as data from "../assets/eff_large_wordlist.json";

export class diceGenerator {

    wordList = data;

    constructor() {
    }

    generatePhrase(numWords:number):string {

        let finalPhrase:string[] = [];

        while(numWords--) {
            let phraseString = "";
            let totalDigits = 5;

            while(totalDigits--) {
                phraseString = phraseString + (Math.floor(Math.random() * 6) + 1).toString();
            }

            finalPhrase.push(this.retrievePhrase(phraseString));
        }

        return finalPhrase.join('-');
    }

    retrievePhrase(phraseId:string):string {
        // @ts-ignore
        return this.wordList[phraseId];
    }
}
