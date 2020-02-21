class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.history = []
    this.color = random(0, 255)
    this.diameter = random(30, 32)
  }

  move(){
    this.speedX = random(-20, 20)
    this.speedY = random(-20, 20)

    this.x += this.speedX
    this.y += this.speedY

    this.vector = createVector(this.x, this.y)
    this.history.push(this.vector)
    if (this.history.length > this.diameter/2){
      this.history.splice(0,1)
    }

  }

  show(){
    fill(random(255))
    ellipse(this.x, this.y, this.diameter, this.diameter)
    for(var i = 0; i < this.history.length; i ++){
      this.pos = this.history[i]
      fill(random(255))
      ellipse(this.pos.x, this.pos.y, i, i)
      }
  }

  collide(other){
    this.distance = dist(this.x, this.y, other.x, other.y)
    if (this.distance < this.diameter/2){
      return true
    }
    else{
      return false
    }
  }
  big(other){
    if (this.diameter > other.diameter){
      return true
    } else {
      return false
    }
  }
}
