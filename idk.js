#!/usr/bin/env node

var terminal = require('child_process').spawn('bash');


terminal.on('exit', function (code) {
	console.log('¯\\_(ツ)_/¯ copied to clipboard');
});

setTimeout(function() {
	terminal.stdin.write("printf \"¯\\_(ツ)_/¯\" | pbcopy");
	terminal.stdin.end();
}, 10);
