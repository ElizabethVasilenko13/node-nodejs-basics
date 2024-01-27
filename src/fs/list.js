import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(filePath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();