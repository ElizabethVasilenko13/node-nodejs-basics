import { Transform } from 'stream'

const transformStream = new Transform({
  transform(chunk, _, callback) {
    this.push(chunk.toString().split('').reverse().join(''));
    callback();
  }
});

const transform = async () => {
  process.stdin.pipe(transformStream).pipe(process.stdout)
};

await transform();