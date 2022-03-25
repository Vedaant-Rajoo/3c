
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	//console.log('Congratulations, your extension "3c" is now active!');

	let disposable = vscode.commands.registerCommand('3c.run3c', function () {

		vscode.window.showInformationMessage('Running 3C');
		const cp = require('child_process')
		var fpath = vscode.window.activeTextEditor.document.uri.path;
		var command = '/home/vrajoo/checkedc-llvm-project/build/bin/3c -addcr -alltypes -output-postfix=checked '+fpath+' --';
		console.log(command);
		cp.exec('export PATH="x:$PATH"', (err, stdout) => {
			console.log('The output : ' + stdout);
		if (err) {
			console.log('error: ' + err);
		}
	});
		cp.exec(command, (err, stdout) => {
    	console.log('The output : ' + stdout);
		//console.log(vscode.window.activeTextEditor.document.uri.path);
    	//console.log('stderr: ' + stderr);
    if (err) {
        console.log('error: ' + err);
    }
});
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
