/**
 * Created by nhatnk on 4/26/17.
 */

class Hero {
  constructor(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
  }
  getHeroElement() {
    return "<img width='" + this.size + "'" +
    "height='" + this.size + "'" + "src='" + this.image + "'" +
    "style='top:" + this.top + "px; left:" + this.left + "px; position: absolute;' />";
  }
  moveRight() {
    this.left += this.speed;
  }
  moveLeft() {
    this.left -= this.speed;
  }
}

var hero = new Hero('trangquynh.png', 20, 30, 150, 60);

function start(){
  if (hero.left <= window.innerWidth - hero.size) {
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500);
}

start();