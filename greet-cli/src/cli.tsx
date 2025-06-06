#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import { Command } from 'commander';
import App from './App.js';
import inquirer from 'inquirer';

const program = new Command();

program
	.name('greet')
	.description('CLI to greet someone')
	.version('1.0.0')
	.option('--name <name>', 'name to greet')
	.option('--fancy', 'use fancy greeting style')
	.action(async (options: any) => {
		let fname = options?.name;

		if (!fname) {
			const answer = await inquirer.prompt([
				{
					type: 'input',
					name: 'name',
					message: "what's your name?",
					validate: (input: string) => input ? true : "Name is required"
				}
			]);
			
			fname = answer.name;
		}

		render(<App name={fname} fancy={options.fancy}/>);
	});

program.parse(process.argv);
