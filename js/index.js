const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const carImg = new Image();
carImg.src = "./images/car.png"


let randomObstPosition = Math.floor(Math.random() * 500);
let randomObstWith = Math.floor(Math.random() * 300)+ 50;

let obstaclesArr = [];








window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    let player = new Car
    player.draw()

    let rock1 = new Obstacles()
    rock1.draw()


    /* let inverval_timer = setInterval(function() { 
      let rock = new Obstacles(randomObstPosition, randomObstWith)
      rock.draw()
    }, 3000); */
    

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37){
        player.moveLeft()
        player.draw()
      } else if (e.keyCode === 39){
        player.moveRight()
        player.draw()
      }
    })

    

    const gameOver = () => {
      player.gameOver = true
      rock1.gameOver = true
      // clearInterval(inverval_timer); 
    }
    const checkCollitions = () => {
      if (player.contains(rock1)){
        gameOver()
      }}


    const update = () => {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      player.draw()
      rock1.draw()
      rock1.moveDown ()
      // drawScore()
      checkCollitions()
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

    this.gameOver = false
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
  contains(b){
    return (this.x < b.x + b.w) &&
      (this.x + this.w > b.x) &&
      (this.y < b.y + b.h) &&
      (this.y + this.h > b.y)
  }
}

  class Obstacles {
    constructor() {
      this.x = Math.floor(Math.random() * 300);
      this.y = 0
      this.w = Math.floor(Math.random() * 200)+ 50;
      this.h = 20

      this.color = 'black'

      this.gameOver = false
    }
      draw() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.w, this.h)
      }

      moveDown () {
        if (!this.gameOver){
        this.y += 1
      }
    }
  }

};