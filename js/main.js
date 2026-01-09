var config = {
  type: Phaser.AUTO,
  width: 320, //320 NEO GEO , 304 Metal Slug (227 bg image)
  height: 227, //224 NEO GEO & METAL SLUG (227 bg image)
  transparent: true,
  backgroundColor: "rgba(0,0,0,0)",
  scene: [menuScene, level1, gameOverScene, scoreScene], //Array con los niveles   menuScene,
  antialias: false,
  render: { pixelArt: true },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 900 },
      debug: false,
    },
  },
};

var juego = new Phaser.Game(config);

//TIMER
var counter = 0;
var text = 0;
var gameTime = 99;

//SCORE
var scorePlayer = 0;

//Balas Marco Rossy
var balas = -1;
