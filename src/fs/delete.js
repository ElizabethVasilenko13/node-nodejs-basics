import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileToDelete = 'fileToRemove.txt';
  const fileToDeletePath = path.join(__dirname, 'files', fileToDelete);
  try {
    await fs.unlink(fileToDeletePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();