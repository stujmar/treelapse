// get y position of a sine wave based on x
const getSineY = (x) => {
  let amplitude = 20;
  let frequency = 40;
  return height/2 + amplitude * Math.sin(x/frequency);
}

export { getSineY };