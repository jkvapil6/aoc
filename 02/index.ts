
type Position = {
  action: string, 
  value: number
}

/**
 * Loads positions from file
 * 
 * @returns {Array<Position>} positions 
 */
const loadPositions = async () => {
  let res = null
  try {
    const data = await Deno.readTextFile('positions.txt')
    const splitted = data.split("\n")
    const mapped = splitted.map(row => row.split(" "))
    const positions = mapped.map(item => { 
      return {
        action: item[0],
        value: Number(item[1])
      }
    })
    res = positions
  } catch (err) {
    console.error(err)
  }
  return res
}

/**
 * Calculates final position from all positions
 * 
 * @param {Array<Position>} positions 
 * @returns {number} final position
 */
const calculateFinalPosition = (positions: Array<Position>) => {
  let depth = 0
  let distance = 0
  if (positions) {
    for (const pos of positions) {
      switch (pos.action) {
        case "up": depth = depth - pos.value; break
        case "down": depth = depth + pos.value; break
        case "forward": distance = distance + pos.value; break
      }
    }
  }
  return depth * distance
}

/**
 * The program calculates the final position based on the actions performed
 */
const run02 = async () => {
  const positions = await loadPositions()
  if (positions) {
    const final = calculateFinalPosition(positions)
    console.log(final)
  }
}

run02()