import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';

const THREAD_COUNT = os.cpus().length;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'worker.js');

const createWorker = (index) => {
  return new Promise((resolve) => {
    const worker = new Worker(filePath, {workerData: 10 + index});
    worker.on('message', (message) => {
      resolve({ status: 'resolved', data: message });
    });

    worker.on('error', () => {
      resolve({ status: 'error', data: null });
    });
  })
}

const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < THREAD_COUNT; i++) {
    workers.push(createWorker(i));
  }

  const resolvedResults = await Promise.all(workers);
  console.log(resolvedResults);
};

await performCalculations();