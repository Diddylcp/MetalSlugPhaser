class finalBoss {
  constructor(
    scene,
    positionX,
    positionY,
    spriteStructure,
    spriteStructure2,
    gun1
  ) {
    this.scene = scene;
    this.health = 50;
    this.lerpDirection = true;
    this.lerpPercent = 0.5;
    this.distanceDetection = 400;
    this.shootDistance = 20;
    this.canShoot = true;
    this.delayShoot = 5000;
    this.bullet_speed = 400;
    this.isShooting = false;

    this.gun = scene.add.sprite(positionX + 120, positionY, gun1);
    this.gun.setOrigin(1, 0);
    this.base = scene.add.sprite(positionX, positionY + 19, spriteStructure);
    this.top = scene.physics.add.sprite(
      positionX + 143,
      positionY,
      spriteStructure2
    );
    this.gun.setDepth(1.1);
    this.base.setDepth(1);
    this.top.setDepth(1.2);
    this.top.body.setAllowGravity(false);
    this.positionX = positionX;
    this.positionY = positionY;

    scene.add.existing(this.gun);
  }

  createVariables() {
    this.health = 50;
    this.lerpDirection = true;
    this.lerpPercent = 0.5;
    this.distanceDetection = 300;
    this.shootDistance = 20;
    this.canShoot = true;
    this.delayShoot = 5000;
    this.bullet_speed = 400;
  }

  detectPlayer() {
    if (
      this.health > 0 &&
      Math.abs(this.scene.finalBoss.gun.x - this.scene.marco.x) <
        this.scene.finalBoss.distanceDetection &&
      this.scene.finalBoss.canShoot
    ) {
      this.scene.finalBoss.shoot();
    }
  }

  shoot() {
    if (this.canShoot) {
      this.delayShoot = (Math.floor(Math.random() * 5) + 3) * 1000;
      this.canShoot = false;
      this.isShooting = true;
      this.scene.time.addEvent({
        delay: 1000,
        callback: this.updateShooting,
        callbackScope: this,
        repeat: 0,
      });
      this.scene.time.addEvent({
        delay: this.delayShoot,
        callback: this.updateCanShoot,
        callbackScope: this,
        repeat: 0,
      });
      var random = Math.floor(Math.random() * 2);
      switch (random) {
        case 0:
          // TODO: First type of bullets

          this.scene.finalBoss.gun.anims.play("shootCannon");
          var bullet = new bulletBossPrefab(
            this.scene,
            this.scene.finalBoss.gun.x,
            this.scene.finalBoss.gun.y + 45,
            "finalBossBullet"
          );
          bullet.setScale(0.6);
          this.scene.enemy_bullets.add(bullet);
          bullet.body.setAllowGravity(false);
          bullet.body.setVelocityX(-this.bullet_speed / 4);
          break;
        case 1:
        default:
          // TODO: 3 consecutive shoots
          this.scene.finalBoss.gun.setTexture("grenadeBullet");
          this.scene.finalBoss.gun.anims.play("shootGrenade");
          this.scene.time.addEvent({
            delay: 150,
            callback: this.shootGrenade,
            callbackScope: this,
            repeat: 2,
          });
          break;
      }
    }
  }

  interpolate() {
    if (!this.finalBoss.isShooting) {
      if (this.finalBoss.lerpDirection) {
        this.finalBoss.lerpPercent += 0.015;
      } else {
        this.finalBoss.lerpPercent -= 0.015;
      }
      this.finalBoss.gun.y = Phaser.Math.Linear(
        this.finalBoss.positionY - 15,
        this.finalBoss.positionY + 32,
        this.finalBoss.lerpPercent
      );
      if (this.finalBoss.lerpPercent < 0) {
        this.finalBoss.lerpDirection = true;
        this.finalBoss.lerpPercent = 0;
      }
      if (this.finalBoss.lerpPercent > 1) {
        this.finalBoss.lerpDirection = false;
        this.finalBoss.lerpPercent = 1;
      }
    }
  }

  shootGrenade() {
    var bullet = new bulletBossPrefab(
      this.scene,
      this.scene.finalBoss.gun.x,
      this.scene.finalBoss.gun.y + 45,
      "finalBossBullet"
    );
    bullet.setScale(0.4).body;
    this.scene.finalBoss_bullets.add(bullet);
    bullet.body.setVelocityX((Math.floor(Math.random() * 100) + 70) * -1);
    bullet.body.setVelocityY((Math.floor(Math.random() * 100) + 450) * -1);
    bullet.body.setMass(0.1);
  }

  updateCanShoot() {
    this.canShoot = true;
  }

  updateShooting() {
    this.isShooting = false;
  }

  destroy() {
    this.top.body.enable = false;
    this.top.visible = false;
    this.gun.visible = false;
  }
}
