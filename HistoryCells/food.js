class Food {
  constructor() {
    this.diameter = 29
    this.x = random(width)
    this.y = random(height)
  }
  show(){
    fill(200, 0, 0)
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }
}
