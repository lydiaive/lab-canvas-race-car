const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const carImg = new Image();
carImg.src = "./images/car.png"






window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    let player = new Car
    player.draw()
    

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37){
        player.moveLeft()
        player.draw()
      } else if (e.keyCode === 39){
        player.moveRight()
        player.draw()
      }
    })
    const update = () => {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      player.draw()
      // obstacle.draw()
      // drawScore()
      // checkCollitions()
      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }


class Car {
  constructor() {
    this.x = (canvas.width / 2) - 20,
    this.y = canvas.height -200,
    this.w = 40,
    this.h = 80

    this.gameOn = false
  }
  draw() {
    ctx.drawImage(carImg, this.x, this.y, this.w, this.h)
  }
  moveLeft() {
    if (this.x <= 0) {
      return
    } this.x -= this.w
  }
  moveRight() {
    if (this.x >= canvas.width - this.w) {
      return
    } this.x += this.w
  }
}

  class Obstacles {
    constructor(x,y,w) {
      this.x = x
      this.y = y
      this.w = w
      this.h = 20

      this.gameOn = false

    }
  }

};