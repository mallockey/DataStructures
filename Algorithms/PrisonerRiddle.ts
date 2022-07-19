const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const shuffleInPlace = (array: number[]) => {
  let numElementsRemaining = array.length;
  let tmp = 0;
  let randomNum = 0;

  while (numElementsRemaining) {
    randomNum = Math.floor(Math.random() * numElementsRemaining--);
    tmp = array[numElementsRemaining];
    array[numElementsRemaining] = array[randomNum];
    array[randomNum] = tmp;
  }
};

const prisonersBoard: number[] = [];
const prisoners: number[] = [];

for (let i = 0; i < 100; i++) {
  prisonersBoard.push(i);
  prisoners.push(i);
}

shuffleInPlace(prisonersBoard);

function runTrial() {
  let prisonersThatFoundTheirNumber = 0;

  for (let i = 0; i < prisoners.length; i++) {
    let numTrys = 50;

    const currentPrisoner = prisoners[i];

    let search = null;

    while (numTrys) {
      if (search !== null) {
        search = prisonersBoard[search];
      } else {
        search = prisonersBoard[currentPrisoner];
      }

      if (search === currentPrisoner) {
        prisonersThatFoundTheirNumber++;
        break;
      }

      numTrys--;
    }
  }

  return prisonersThatFoundTheirNumber;
}

for (let i = 0; i < 3; i++) {
  shuffleInPlace(prisonersBoard);
  const result = runTrial();

  if (result === 100) {
    console.log("The prisoners are freed!");
  }
}
