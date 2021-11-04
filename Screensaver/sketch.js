/*
Made by Jacob Garm Pedersen
A simulated sundial, which runs in realtime
Each day of the month has a slightly different tint.
*/

let azimuth = 0
let rt = true
let dt
let towD
let towH
let hueval

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  textAlign(CENTER,CENTER)
  textSize(45)
  minS = min(width,height)
  towD = minS/13
  towH = minS/7
  colorMode(HSB)
  dt = new Date()
  randomSeed((dt.getDay()+3)*10747 + 514)
  hueval = random()*360
}

function draw() {
  if (rt) {
    dt = new Date()
    let time = dt.getHours() * 3600 + dt.getMinutes() * 60 + dt.getSeconds() + dt.getMilliseconds() / 1000
    azimuth = time / 86400 * TWO_PI
  } else {
    azimuth = (azimuth + 0.005) % TWO_PI
  }
  let altitude = -cos(azimuth) - 0.25
  let light = max(100*sin(altitude)*1.4,5)
  let shadowHeight = abs(towH / tan(altitude))
  translate(width/2,height/2)
  scale(1,-1)
  
  background(hueval, 12, light)
  fill(hueval, 5, light/4)
  rotate(-azimuth)
  rect(-towD/2,0,towD,-shadowHeight)
  circle(0,-shadowHeight,towD)
  fill(hueval, 5, light/1.5)
  circle(0,0,towD)
  if (rt) {
    rotate(azimuth)
    scale(1,-1)
    if (light < 50)
      fill(80)
    else
      fill(20)
    text(dt.toLocaleTimeString('da-DK'), 0, height/3)
    text(dt.toLocaleDateString('da-DK'), 0, height/3 + 60)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  minS = min(width,height)
  towD = minS/15
  towH = minS/8
}
