const scaleFunction = 50
const n = 10

function setup() {
  createCanvas(1600,800)
  background(0)
  stroke(255)
  strokeWeight(4)
  translate(width / 2, height / 2)

  line(0, -height / 2, 0, height / 2)
  line(-width / 2, 0, width / 2, 0)

  beginShape(LINES)
  for (let x = -width / 2; x < width / 2; x = x + 0.01) {
    vertex(scaleFunction * x, -scaleFunction * cos(x))
    // vertex(scaleFunction * x, -scaleFunction * x * exp(x))
  }
  endShape()

  stroke('red')

  // taylor cos(x)
  let y = 0
  let factorial = 1
  beginShape(LINES)
  for (let x = -width / 2; x < width / 2; x = x + 0.1) {
    for (let k = 0; k <= n; k++) {
      if (k >= 2) {
        factorial = factorial * k
      }
      if (k % 2 == 0) {
        if (k % 4 == 0) {
          y = y + (pow(x, k) / factorial)
        } else {
          y = y - (pow(x, k) / factorial)
        }
      }
    }
    vertex(scaleFunction * x, -scaleFunction * y)
    factorial = 1
    y = 0
  }
  endShape()

  // taylor x * e^x
  /*let y = 0
  let factorial = 1
  beginShape(LINES)
  for (let x = -width / 2; x < width / 2; x = x + 0.1) {
    for (let k = 1; k <= n; k++) {
      if (k >= 2) {
        factorial = factorial * (k - 1)
      }
      y = y + ((1 / factorial) * pow(x,k))
    }
    vertex(scaleFunction * x, -scaleFunction * y)
    factorial = 1
    y = 0
  }
  endShape()*/
}