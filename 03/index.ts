
/**
 * Loads binary numbers as array of string from file
 * 
 * @returns {Array<string> | null}
 */
 const loadInput = async () => {
  let res = null
  try {
    const data = await Deno.readTextFile('input.txt')
    const splitted = data.split(/\r?\n/)
    res = splitted
  } catch (err) {
    console.error(err)
  }
  return res
}

/**
 * Calculates power compsumption
 * 
 * @param {Array<string>} values
 * @returns {number} 
 */
const calcPowerConsumption = (values: Array<string>) => {
  let gammaStr = ""
  let epsilonStr = ""
  for (let i = 0; i < values[0].length; i++) {
    const idxValues = values.map(v => Number(v[i]))
    const added = idxValues.reduce((a, b) => a + b)
    if (added < values.length / 2) {
      gammaStr = gammaStr.concat("0")
      epsilonStr = epsilonStr.concat("1")
    } else {
      gammaStr = gammaStr.concat("1")
      epsilonStr = epsilonStr.concat("0")
    }
  }
  const gamma = parseInt(gammaStr, 2); 
  const epsilon = parseInt(epsilonStr, 2); 
  return gamma * epsilon
}
  

/**
 * The program calculates power consumption based on binary input
 * Power consumption = gama rate * epsilon rate
 * Gama rate is calculated from input of binary numbers
 * - for each position of all binary numbers are calculated the most common bit
 * - [10, 11, 00] -> [10]
 * Epsilon rate is the oposite of gama rate (101 -> 010)
 */
 const run03 = async () => {
  const values = await loadInput()
  if (values) {
    const res = calcPowerConsumption(values)
    console.log(res)
  }
}

run03()

