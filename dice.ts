#!/usr/bin/env node
import './polyfills';
import * as commander from 'commander';
import * as ora from 'ora';
import Utility from './src/utility';
import chalk from 'chalk';

commander
    .version('1.0.0')
    .description('Dice Mage Wave Maker');

commander
    .command('test')
    .alias('t')
    .description('Run a test command')
    .action(() => {
        console.log('test');
    });

commander
    .command('spin')
    .alias('s')
    .description('Make a spinner')
    .action(() => {
        (async() => {
            try {
                const spinner = ora('Computing').start();
                console.log('\n');
                console.log(chalk.redBright('=========*** Contact Management System ***=========='));
                await Utility.delay(3000);
                spinner.stopAndPersist();
            } catch (error) {
                console.log(error);
            }
        })();
    })
if(!process.argv.slice(2).length) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv);