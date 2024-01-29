import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = spawn(process.execPath, [filePath, ...args]);
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
  childProcess.on('error', (error) => {
    console.error(error.message);
  });

  childProcess.on('exit', () => {
    console.log(`exit child process`);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
