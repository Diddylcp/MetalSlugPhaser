class StandardSoldier extends Phaser.GameObjects.Sprite {
  constructor(scene, positionX, positionY, _spriteName) {
    //Herencia de la clase Sprite
    super(scene, positionX, positionY, _spriteName);
    this.scene = scene;

    //Init
    scene.add.existing(this);
    this.setOrigin(1, 0);
    this.setScale(1);
    this.setDepth(1);
    //Variables propias (rellenar en el futuro)
    this.spriteNsmr = _spriteName;
    this.health = 1;
    this.deathStart = false;
    this.damage;

    this.percentageShot = 4; // Porcentaje de disparo cada vez que ve al jugador

    this.distanceDetection = Phaser.Math.Between(150, 200);
    this.shootDistance = 120;
    this.canShoot = true;
    this.delayShoot = 1000;
    this.delayTryAgainShoot = 1000;
    this.bullet_speed = 400;
  }

  shoot() {
    if (this.canShoot) {
      this.canShoot = false;
      var num = Phaser.Math.Between(1, 10);
      if (num <= this.percentageShot) {
        console.log("Disparo enemigo " + num);
        var bullet = this.scene.enemy_bullets.getFirst(false);
        if (!bullet) {
          bullet = new riflePrefab(this.scene, this.body.x, this.body.y + 20);
          this.scene.enemy_bullets.add(bullet);
        } else {
          bullet.active = true;
          bullet.body.reset(this.body.x, this.body.y + 20);
        }
        this.scene.time.addEvent({
          delay: this.delayShoot,
          callback: this.updateCanShoot,
          callbackScope: this,
          repeat: 0,
        });

        // TODO: set bullet velocity
        //Damos velocidad
        bullet.body.setAllowGravity(false);
        if (this.facingRight || !this.facingLeft) {
          bullet.body.setVelocityX(this.bullet_speed);
        } else {
          bullet.body.setVelocityX(-this.bullet_speed);
        }
      } else {
        console.log("Ha fallado " + num);
        this.scene.time.addEvent({
          delay: this.delayTryAgainShoot,
          callback: this.updateCanShoot,
          callbackScope: this,
          repeat: 0,
        });
      }
    }
  }

  updateCanShoot() {
    this.canShoot = true;
  }
}
