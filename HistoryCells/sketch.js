var cells = []
var foods = []
foodNumber = 50

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200)


}

function mousePressed(){
  if (cells.length < 10){
  cell = new Cell(mouseX, mouseY)
  cells.push(cell)
  }
}

function draw() {
  background(200)

  for (var i = 0; i < cells.length; i++){
    cells[i].show()
    cells[i].move()

    if ((cells[i].x > width || cells[i].x < 0|| cells[i].y > height || cells[i].y < 0) && cells[i].diameter < 40){
      cells.splice(i, 1)
    }
    else if ((cells[i].x > width || cells[i].x < 0|| cells[i].y > height || cells[i].y < 0) && cells[i].diameter >= 40){
      cells[i].x = width/2
      cells[i].y = height/2
    }


    if (cells[i] != null ){
    for (var f = 0; f < foods.length; f ++){
      if (cells[i].collide(foods[f])){
        cells[i].diameter += 2
      foods.splice(f, 1)
        }
      }

      for (c = 0; c < cells.length; c ++){
        if (cells[c] != null){
        // if (cells[c].collide(cells[i])){
        //   if (cells[c].big(cells[i])){
        //     cells.splice(cells[i], 1)
        //     console.log("c")
        //   }
        // }
          if (cells[i].collide(cells[c])){
           if (cells[i].big(cells[c])){
            cells.splice(cells[c], 1)
            cells[i].diameter += 2
            console.log("i")
          }
        }
        }
      }
  }
  if (foods.length < foodNumber){
    food = new Food()
    foods.push(food)
  }
  for(food of foods){
    food.show()
    }
  }
}
