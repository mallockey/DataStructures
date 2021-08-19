function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return null
  }

  const inputInvalid = arr.every((item) => typeof item !== 'number')

  if (inputInvalid) {
    return null
  }

  let isSorted = false
  let hasSwapped = false
  let i = 0

  while (isSorted === false) {
    if (i === arr.length - 1) {
      if (!hasSwapped) {
        //If we have iterated through the whole area without swapping, it is sorted
        isSorted = true
        break
      }
      hasSwapped = false
      i = 0
    }
    let currentEle = arr[i]
    let nextEle = arr[i + 1]
    if (currentEle > nextEle) {
      arr[i + 1] = currentEle
      arr[i] = nextEle
      hasSwapped = true
    }
    i++
  }

  return arr
}

function quickSort(arr) {
  function subSort(left, right) {
    //what is out helper method?
    if (left >= right) {
      return
    }
    let pivot = arr[right]
    let wall = left

    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        //what do we swap??
        ;[arr[i], arr[wall]] = [arr[wall], arr[i]]
        wall++
      }
    }
    ;[arr[right], arr[wall]] = [arr[wall], arr[right]]

    subSort(left, wall - 1)
    subSort(wall + 1, right)
  }

  subSort(0, arr.length - 1)
  return arr
}

module.exports = {
  bubbleSort,
  quickSort,
}
