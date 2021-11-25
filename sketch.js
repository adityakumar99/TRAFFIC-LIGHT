   //made by aditya 
          //hope you enjoy :D
               // idea by https://sonukushwaha.live


let redLight = 'red'
let yellowLight = 'yellow'
let greenLight = 'green'

function setup() {
  createCanvas(200,200)
}
                
function draw() {
  background(220);
  rectMode(CENTER)
  fill(99,99,999);
  rect(width / 2, height / 2, 80, 160);

  fill(redLight)
  ellipse(width / 2, height / 2 - 50, 40, 40)

  fill(yellowLight)
  ellipse(width / 2, height / 2, 40)

  fill(greenLight)
  ellipse(width / 2, height / 2 + 50, 40, 40)

                   


  if (mouseY < height/3) {
  redLight ='red'
  yellowLight = 'white'
  greenLight = 'white'
  
  }
  else if (mouseY < height * 2/3) {
  redLight ='white'
  yellowLight = 'yellow'
  greenLight = 'white'
  }
    else if (mouseY < height) {
  redLight ='white'
  yellowLight = 'white'
  greenLight = 'green'
  }
}
