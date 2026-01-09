class marcoRossi extends Phaser.GameObjects.Sprite {
  constructor(scene, positionX, positionY, marcoBodyName, marcoLegsName) {
    super(scene, positionX, positionY, marcoLegsName);
    this.setOrigin(0.5, 1);
    this.marcoBody = scene.physics.add.sprite(
      positionX,
      positionY,
      marcoBodyName
    );
    this.marcoBody.setDepth(1.1);
    scene.add.existing(this);
    this.setOrigin(0.5);
    this.isJumping = true;
    this.setDepth(1);
    this.life = 10;
    this.score = 0;
  }
  update() {
    this.marcoBody.x = this.x + 20;
    this.marcoBody.y = this.y - 28;
    this.marcoBody.body.velocity.y = this.body.velocity.y;
    if (
      this.anims.getCurrentKey() == "marcoDead" &&
      this.anims.getProgress() == 1
    ) {
      // TODO: go to Score Scene
    }
  }

  jump() {
    this.isJumping = false;
    this.isJumping = false;
  }

  dead() {
    this.marcoBody.visible = false;
    this.y += 5;
    this.setTexture("deathMarco");
    this.body.enable = false;
    this.marcoBody.body.enable = false;

    this.body.setAllowGravity(false);
    this.anims.play("marcoDead");

    this.scene.iniciaGameOver();
  }
}
