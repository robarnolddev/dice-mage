#!/usr/bin/env node
import "./polyfills";
import * as commander from "commander";
import * as ora from "ora";
import chalk from "chalk";
import Utility from "./utility";
import {diceGenerator} from "./generator/diceGenerator";
import * as perf from "perf_hooks";

commander
    .version('1.0.0')
    .description('Dice Mage Generator');

commander
    .command('generate')
    .alias('g')
    .option('-t, --total-words <totalWords>', 'Number of words to generate', 5)
    .action((options) =>  {
        let diceGen = new diceGenerator();
        console.log(chalk.blueBright('========*** Passphrase Generation ***========'));
        console.log(`Generating total words: ${options.totalWords}\n`);
        const spinner = ora();
        spinner.start();
        let t0 = perf.performance.now();
        let response = diceGen.generatePhrase(options.totalWords);
        let t1 = perf.performance.now();
        console.log(response);
        console.log(`Generated in: ${t1 - t0} milliseconds`);
        spinner.stop();
    });

if(!process.argv.slice(2).length) {
    commander.outputHelp();
    process.exit()
}
commander.parse(process.argv);
