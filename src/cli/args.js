const getChunkArray = (array, chunkSize) => {
  return array.reduce((acc, _, i, arr) => {
    if (i % chunkSize === 0) {
      acc.push(arr.slice(i, i + chunkSize));
    }
    return acc;
  }, []);
};

const formatArgChunk = (chunk) => {
  const [propName, value] = chunk;
  return `${propName} is ${value}`;
};

const parseArgs = () => {
  const argsArray = process.argv.slice(2);
  const chunkSize = 2;

  const chunkedArgs = getChunkArray(argsArray, chunkSize);
  const argsArrayModified = chunkedArgs.map(formatArgChunk).join(', ');

  console.log(argsArrayModified);
};

parseArgs();