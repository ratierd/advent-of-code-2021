const input = [
  4, 3, 4, 5, 2, 1, 1, 5, 5, 3, 3, 1, 5, 1, 4, 2, 2, 3, 1, 5, 1, 4, 1, 2, 3, 4,
  1, 4, 1, 5, 2, 1, 1, 3, 3, 5, 1, 1, 1, 1, 4, 5, 1, 2, 1, 2, 1, 1, 1, 5, 3, 3,
  1, 1, 1, 1, 2, 4, 2, 1, 2, 3, 2, 5, 3, 5, 3, 1, 5, 4, 5, 4, 4, 4, 1, 1, 2, 1,
  3, 1, 1, 4, 2, 1, 2, 1, 2, 5, 4, 2, 4, 2, 2, 4, 2, 2, 5, 1, 2, 1, 2, 1, 4, 4,
  4, 3, 2, 1, 2, 4, 3, 5, 1, 1, 3, 4, 2, 3, 3, 5, 3, 1, 4, 1, 1, 1, 1, 2, 3, 2,
  1, 1, 5, 5, 1, 5, 2, 1, 4, 4, 4, 3, 2, 2, 1, 2, 1, 5, 1, 4, 4, 1, 1, 4, 1, 4,
  2, 4, 3, 1, 4, 1, 4, 2, 1, 5, 1, 1, 1, 3, 2, 4, 1, 1, 4, 1, 4, 3, 1, 5, 3, 3,
  3, 4, 1, 1, 3, 1, 3, 4, 1, 4, 5, 1, 4, 1, 2, 2, 1, 3, 3, 5, 3, 2, 5, 1, 1, 5,
  1, 5, 1, 4, 4, 3, 1, 5, 5, 2, 2, 4, 1, 1, 2, 1, 2, 1, 4, 3, 5, 5, 2, 3, 4, 1,
  4, 2, 4, 4, 1, 4, 1, 1, 4, 2, 4, 1, 2, 1, 1, 1, 1, 1, 1, 3, 1, 3, 3, 1, 1, 1,
  1, 3, 2, 3, 5, 4, 2, 4, 3, 1, 5, 3, 1, 1, 1, 2, 1, 4, 4, 5, 1, 5, 1, 1, 1, 2,
  2, 4, 1, 4, 5, 2, 4, 5, 2, 2, 2, 5, 4, 4,
];

const computeLanternFishPopulation = (population, numberOfDays) => {
  const recordFishByDaysBeforeHatch = new Array(9).fill(0);
  population.forEach((fish) => {
    recordFishByDaysBeforeHatch[fish] += 1;
  });

  let fishThatShouldHatch = 0;
  for (let index = 0; index < numberOfDays; index++) {
    fishThatShouldHatch = recordFishByDaysBeforeHatch.shift();
    recordFishByDaysBeforeHatch.push(0);
    recordFishByDaysBeforeHatch[6] += fishThatShouldHatch;
    recordFishByDaysBeforeHatch[8] += fishThatShouldHatch;
  }

  return recordFishByDaysBeforeHatch.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(computeLanternFishPopulation([...input], 80));
console.log(computeLanternFishPopulation([...input], 256));
