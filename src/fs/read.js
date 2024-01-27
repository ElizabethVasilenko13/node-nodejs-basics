import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fileToRead.txt';
  const filePath = path.join(__dirname, 'files', fileName);

  try {
    const fileContent = await fs.readFile(filePath, {encoding: 'utf-8'})
    console.log(fileContent);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();