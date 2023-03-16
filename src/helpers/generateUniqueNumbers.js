const existingRandomNumbers = [];

const generator = () => Math.floor(Math.random() * 1000);

const generateRandomNumber = () => {
  const gen = generator();
  const isCurrentlyExisting = existingRandomNumbers.find((number) => number === gen);

  if (isCurrentlyExisting) return generateRandomNumber();

  existingRandomNumbers.push(gen);

  return gen;
};

export default generateRandomNumber;
