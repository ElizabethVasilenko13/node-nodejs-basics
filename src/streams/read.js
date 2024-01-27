import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const readStream = fs.createReadStream(filePath);

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on('error', (error) => {
    console.error(`Error reading file: ${error.message}`);
  });
};

await read();