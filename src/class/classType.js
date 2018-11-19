class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return `(${this.x},${this.y})`
  }
}

const p = new Point(1, 2)
console.log(p.x)
console.log(p.toString())