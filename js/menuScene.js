class menuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }

  preload() {
    var ruta = "images/mission1/";
    var rutaSnd = "sounds/";

    this.load.image("backgroundIn", ruta + "HUD/backgroundIntro.png");
    this.load.image("instrucciones", ruta + "HUD/instruccionesMetalSlug.jpg");
    //this.load.image('btn_play',ruta+'btn.png');

    //Sound
    this.load.audio("startSound", rutaSnd + "insertCoin.ogg");
    this.sound.volume = 0.2;
  }

  create() {
    this.bgIntro = this.add
      .image(0, 0, "backgroundIn")
      .setOrigin(0)
      .setScale(1.07, 1.1)
      .setInteractive()
      .on("pointerdown", this.enseñarInstrucciones, this);

    this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    /*this.boton = this.add.image (this.scale.width/2,this.scale.height/2+75,'btn_play')
        .setScale(.25)
        .setInteractive().on('pointerdown', this.iniciaJuego, this);*/

    this.titulo = this.add
      .text(
        this.scale.width / 2,
        this.scale.height / 2 - 100,
        "PRESS TO START",
        {
          fontFamily: "Arial Black",
          fill: "#43d637",
          stroke: "#FFFFFF",
          strokeThickness: 4,
        }
      )
      .setOrigin(0.5);

    this.instrucciones = this.add
      .image(70, 15, "instrucciones")
      .setOrigin(0)
      .setScale(0.2, 0.2)
      .on("pointerdown", this.iniciaJuego, this);
    this.instrucciones.alpha = 0;
  }

  update() {
    if (this.titulo.alpha <= 0.1) {
      this.add.tween({ targets: this.titulo, duration: 2000, alpha: 1 });
    } else if (this.titulo.alpha >= 0.9) {
      this.add.tween({ targets: this.titulo, duration: 2000, alpha: 0 });
    }

    //this.add.tween({targets:this.titulo,duration:2000,alpha:0});
  }

  enseñarInstrucciones() {
    if (this.instrucciones.alpha <= 0.5)
      this.add.tween({
        targets: this.instrucciones,
        duration: 1000,
        alpha: 1,
      });
    else {
      this.iniciaJuego();
    }
  }

  iniciaJuego() {
    console.log("pulsado");

    //Sound
    this.sound.play("startSound");
    this.add.tween({ targets: this.instrucciones, duration: 3000, alpha: 0 });

    this.add.tween({
      targets: this.bgIntro,
      duration: 4000,
      alpha: 0,
      onComplete: this.cambiaEscena,
      onCompleteScope: this,
    });
  }

  cambiaEscena() {
    this.scene.start("level1");
    console.log("GAME");
  }
}
