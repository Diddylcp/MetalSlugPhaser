class scoreScene extends Phaser.Scene {
  constructor() {
    super({ key: "scoreScene" });
  }

  preload() {
    var ruta = "images/score/";
    var rutaSnd = "sounds/";
    var rutaEnemies = ruta + "mission1/enemies";

    this.load.spritesheet("bgScore", ruta + "backgroundStars.png", {
      frameWidth: 540,
      frameHeight: 335,
    });
    this.load.spritesheet("marcoRossi", ruta + "marcoRossiLaught.png", {
      frameWidth: 500,
      frameHeight: 573,
    });

    this.load.image("blackTransition", ruta + "blackBackground.png");
  }

  create() {
    this.bgScore = this.add
      .sprite(0, 0, "bgScore")
      .setOrigin(0)
      .setScale(0.75, 0.75);

    this.marcoRossiScore = this.add
      .sprite(0, 90, "marcoRossi")
      .setOrigin(0)
      .setScale(0.35, 0.35);

    this.blackTransition = this.add
      .image(0, 0, "blackTransition")
      .setOrigin(0)
      .setScale(1, 1)
      .setDepth(5);
    this.blackTransition.alpha = 1;

    this.anims.create({
      key: "bgScoreAnim",
      frames: this.anims.generateFrameNumbers("bgScore", { start: 0, end: 18 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "marcoRossiScoreAnim",
      frames: this.anims.generateFrameNumbers("marcoRossi", {
        start: 0,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.bgScore.anims.play("bgScoreAnim");
    this.marcoRossiScore.anims.play("marcoRossiScoreAnim");

    this.Timer = this.time.addEvent({
      delay: 6500,
      callback: this.scoreFinish,
      callbackScope: this,
      repeat: 0,
    });

    //Score - HUD
    this.scoreHUDText = this.add
      .text(config.width / 2, config.height / 3, "Score: " + scorePlayer, {
        fontFamily: "font1",
        fontSize: "30px",
        color: "#FFFFFF",
      })
      .setOrigin(0.5);

    //Text made by
    this.creatorsHUDText = this.add
      .text(config.width / 2, 20, "Made by: ", {
        fontFamily: "font1",
        fontSize: "20px",
        color: "#FFFFFF",
      })
      .setOrigin(0.5);
    //Text made by
    this.creatorsHUDText = this.add
      .text(
        config.width / 2,
        40,
        "Borja Tapia, Marti de Ferrer i Michael Miranda",
        { fontFamily: "font1", fontSize: "15px", color: "#FFFFFF" }
      )
      .setOrigin(0.5);
  }

  update() {
    if (this.blackTransition.alpha >= 0) {
      this.add.tween({
        targets: this.blackTransition,
        duration: 2000,
        alpha: 0,
      });
    }
  }

  scoreFinish() {
    console.log("scoreFinish");

    this.add.tween({
      targets: this.bgScore,
      duration: 3000,
      alpha: 0,
      onComplete: this.cambiaEscena,
      onCompleteScope: this,
    });
  }

  cambiaEscena() {
    this.scene.start("menuScene"); //DEBERÍA CAMBIAR A SCORE
    console.log("GAME");
  }
}
