import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceFileName = 'wrongFilename.txt';
  const targetFileName = 'properFilename.md';
  const sourceFilePath = path.join(__dirname, 'files', sourceFileName);
  const targetFilePath = path.join(__dirname, 'files', targetFileName);
  try {
    await fs.rename(sourceFilePath, targetFilePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();