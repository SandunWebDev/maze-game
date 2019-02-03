export function generateRandomNumbers(configs) {
  const { min = 0, max = 100, noOfRandomNum = 1, excludeList = [] } = configs;
  const randomNumberList = [];

  while (randomNumberList.length < noOfRandomNum) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (
      // Ignoring generated number if its already generated OR in excluded list.
      !randomNumberList.includes(randomNumber) &&
      !excludeList.includes(randomNumber)
    ) {
      randomNumberList.push(randomNumber);
    }
  }

  return randomNumberList;
}
