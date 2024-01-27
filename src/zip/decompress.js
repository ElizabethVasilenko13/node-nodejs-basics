import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
  const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  try {
    await pipeline(
      createReadStream(inputFilePath),
      createUnzip(),
      createWriteStream(outputFilePath),
    );
  } catch (error) {
    console.log(error);
  }
};

await decompress();