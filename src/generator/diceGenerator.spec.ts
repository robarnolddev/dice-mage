import { expect } from 'chai';
import 'mocha';
import {diceGenerator} from "./diceGenerator";

describe('Dice Generator Class', () => {

    describe('Generate phrase function', () => {

        let diceGen = new diceGenerator();

        it('should generate a passphrase', () => {

            let totalWords = 5;
            let testPhrase = diceGen.generatePhrase(totalWords);

            expect(testPhrase).to.not.be.empty;
            expect(testPhrase.length).to.be.greaterThan(totalWords * 5);
        });

    });

    describe('Retrieve phrase function', () => {

        let diceGen = new diceGenerator();

        it('should transform known values to words', () => {
            let examplePhrase1 = diceGen.retrievePhrase('11134');
            let examplePhrase2 = diceGen.retrievePhrase('54535');

            expect(examplePhrase1).to.equal('absence');
            expect(examplePhrase2).to.equal('skincare');
        })

    });
});
