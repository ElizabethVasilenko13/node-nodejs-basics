import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writableStream);
  writableStream.on('error', (error) => {
    console.log(`Error writing file: - ${error}`);
  })

};

await write();