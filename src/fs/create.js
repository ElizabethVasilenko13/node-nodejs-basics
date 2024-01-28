import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = 'fresh.txt';
  const filePath = path.join(__dirname, 'files', fileName);
  const fileContent = 'I am fresh and young\n';
  try {
    await fs.writeFile(filePath, fileContent,  {flag: 'wx'})
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();