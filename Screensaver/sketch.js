let azimuth = 0
let rt = true
let dt
let towD
let towH

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  textAlign(CENTER,CENTER)
  textSize(45)
  minS = min(width,height)
  towD = minS/15
  towH = minS/8
}

function draw() {
  if (rt) {
    dt = new Date()
    let time = dt.getHours(-10) * 3600 + dt.getMinutes() * 60 + dt.getSeconds()
    azimuth = time / 86400 * TWO_PI
  } else {
    azimuth = (azimuth + 0.005) % TWO_PI
  }
  let altitude = -cos(azimuth) - 0.25
  let light = max(255*sin(altitude)*1.5,10)
  let shadowHeight = abs(towH / tan(altitude))
  translate(width/2,height/2)
  scale(1,-1)
  
  background(light)
  fill(light/4)
  rotate(-azimuth)
  rect(-towD/2,0,towD,-shadowHeight)
  circle(0,-shadowHeight,towD)
  fill(light/1.5)
  circle(0,0,towD)
  if (rt) {
    rotate(azimuth)
    scale(1,-1)
    if (light < 127)
      fill(200)
    else
      fill(70)
    text(dt.toLocaleTimeString(), 0, height/3)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  minS = min(width,height)
  towD = minS/15
  towH = minS/8
}