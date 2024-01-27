import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const outputFilePath = path.join(__dirname, 'files', 'archive.gz');

  try {
    await pipeline(
      createReadStream(inputFilePath),
      createGzip(),
      createWriteStream(outputFilePath),
    );
  } catch (error) {
    console.log(error);
  }
};

await compress();