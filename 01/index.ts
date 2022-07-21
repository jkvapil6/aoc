
/**
 * Loads measurments from file
 * 
 * @returns {Array<number> | null}
 */
const loadMeasurments = async () => {
  let res = null
  try {
    const data = await Deno.readTextFile('measurments.txt')
    const splitted = data.split("\n")
    res = splitted.map(val => Number(val))
  } catch (err) {
    console.error(err)
  }
  return res
}

/**
 * Counts how many values in the array are greater than the previous values
 * 
 * @param values 
 * @returns {number}
 */
const valueIncreasedCount = (values: Array<number>) => {
  let cnt = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i + 1] > values[i]) cnt++
  }
  return cnt
}

/**
 * The program prints how many measurements are greater than the previous measurement
 */
const run01 = async () => {
  const values = await loadMeasurments()
  if (values && Array.isArray(values)) {
    const increasedCnt = valueIncreasedCount(values)
    console.log(increasedCnt)
  }
}

run01()