//Triple Step: A child is running up a staircase with n steps and can hop either 1 set, 2 steps, or 3 steps at a time.
//Implement a method to count how many possible ways the child can run up the stairs

function findSteps(numSteps) {
  if (numSteps === 0) return 1
  if (numSteps < 0) return null

  let oneStep = findSteps(numSteps - 1)
  let twoStep = findSteps(numSteps - 2)
  let threeSteps = findSteps(numSteps - 3)

  return oneStep + twoStep + threeSteps
}

function tripleStepCache(numSteps) {
  if (numSteps < 0) {
    return 0
  } else if (numSteps === 0) {
    return 1
  } else if (cache[numSteps]) {
    return cache[numSteps]
  } else {
    cache[numSteps] =
      findStepsCache(numSteps - 1) + findStepsCache(numSteps - 2) + findStepsCache(numSteps - 3)
    return cache[numSteps]
  }
}
