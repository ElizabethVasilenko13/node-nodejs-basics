import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceFolder = 'files';
  const destinationFolder = 'files_copy';
  const sourceFolderPath = path.join(__dirname, sourceFolder);
  const destinationFolderPath = path.join(__dirname, destinationFolder);
  try {
    await fs.cp(
      sourceFolderPath,
      destinationFolderPath,
      {recursive: true, force: false, errorOnExist: true}
    )
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
