const parseEnv = () => {
  const envPrefix = 'RSS_';
  const envVars = Object.keys(process.env).filter((key) => key.startsWith(envPrefix));
  const result = envVars.map((key) => `${key}=${process.env[key]}`).join('; ');
  console.log(result);
};

parseEnv();