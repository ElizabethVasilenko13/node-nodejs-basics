import { createHash } from "crypto";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256').setEncoding('hex');
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('error', (error) => console.log(`Error reading file ${error}`))
  fileStream.
    pipe(hash).
    on('finish', () => console.log(hash.read()))
};

await calculateHash();