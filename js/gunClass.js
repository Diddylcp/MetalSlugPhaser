class gunClass extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.scene = scene;
    this.ammo = -1;
    this.pistol = true;
    this.rifle = false;
    this.flamethrower = false;
    this.delayShoot = 350;
    this.canShoot = true;
    this.bullet_speed = 400;
  }

  update() {
    if (this.flamethrower) {
      this.scene.bullets.children.each(function (bullet) {
        // Checks max distance of the bullet
        if (
          bullet.body.x >=
          config.width + this.scene.cameras.main.scrollX - 100
        ) {
          bullet.destroy();
        }
      }, this);
    } else {
      this.scene.bullets.children.each(function (bullet) {
        // Checks max distance of the bullet
        if (bullet.body.x >= config.width + this.scene.cameras.main.scrollX) {
          bullet.destroy();
        }
      }, this);
    }
  }

  shoot() {
    if (this.canShoot) {
      this.canShoot = false;
      ////////////////////////////////////////////////////////
      // Prefab for rifle and pistol
      if (!this.flamethrower && !this.rifle) {
        var bullet = this.scene.bullets.getFirst(false);
        if (!bullet) {
          //crea una bala nueva
          console.log("create bullet");
          bullet = new pistolPrefab(
            this.scene,
            this.scene.marco.marcoBody.body.x + 25,
            this.scene.marco.marcoBody.body.y + 10
          );
          this.scene.sound.play("pistolSound");
          this.scene.bullets.add(bullet);
        } else {
          //reset
          bullet.active = true;
          bullet.body.reset(
            this.scene.marco.marcoBody.body.x + 25,
            this.scene.marco.marcoBody.body.y + 10
          );
        }
      } else if (this.rifle) {
        var bullet = this.scene.bullets.getFirst(false);
        if (!bullet) {
          //crea una bala nueva
          console.log("create bullet");
          bullet = new riflePrefab(
            this.scene,
            this.scene.marco.marcoBody.body.x + 25,
            this.scene.marco.marcoBody.body.y +
              10 +
              Math.floor(Math.random() * 150) / 10
          );
          this.scene.sound.play("rifleSound");
          this.scene.bullets.add(bullet);
        } else {
          //reset
          bullet.active = true;
          bullet.body.reset(
            this.scene.marco.marcoBody.body.x + 25,
            this.scene.marco.marcoBody.body.y +
              10 +
              Math.floor(Math.random() * 150) / 10
          );
        }
      }

      // Prefab for rifle and pistol
      ////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////
      // Prefab for flamethrower
      else {
        console.log("shoot flame");
        var bullet = new flamethrowerPrefab(
          this.scene,
          this.scene.marco.marcoBody.body.x + 25,
          this.scene.marco.marcoBody.body.y + 10
        );
        this.scene.bullets.add(bullet);
        bullet.anims.play("flame", true);
        this.scene.sound.play("flamethrowerSound");
      }

      //Damos velocidad
      bullet.body.setAllowGravity(false);
      if (this.scene.cursors.right.isDown) {
        bullet.body.setVelocityX(this.bullet_speed);
        bullet.body.rotation = 0;
      }
      if (this.scene.cursors.up.isDown) {
        bullet.body.setVelocityY(-this.bullet_speed);
        bullet.body.rotation = 90;
      } else if (this.scene.cursors.down.isDown) {
        bullet.body.setVelocityY(this.bullet_speed);
      }
      if (
        !this.scene.cursors.up.isDown &&
        !this.scene.cursors.right.isDown &&
        !this.scene.cursors.down.isDown
      ) {
        // En cas que no s'estigui aprentant cap fletxa direccional
        bullet.body.setVelocityX(this.bullet_speed);
        bullet.body.rotation = 0;
      }
      this.scene.time.addEvent({
        delay: this.delayShoot,
        callback: this.updateCanShoot,
        callbackScope: this,
        repeat: 0,
      });

      // -1 in total ammo if shooted
      if (this.rifle || this.flamethrower) {
        this.ammo--;
      }

      balas = this.ammo;
    }

    if (this.ammo <= 0 && !this.pistol) {
      this.pickUpPistol();
      this.ammo = -1;
    }
  }

  updateCanShoot() {
    this.canShoot = true;
  }

  checkDistanceLimit() {}

  pickUpPistol() {
    this.scene.bullets.clear(true, true);
    this.scene.marco.marcoBody.setTexture("marcoBodyRifle");
    this.scene.marco.marcoBody.anims.play("idleRifle");
    this.rifle = false;
    this.flamethrower = false;
    this.pistol = true;
    this.ammo = -1;
    this.delayShoot = 350;
    this.bullet_speed = 400;
    console.log("Back to Pistol");
    this.scene.bullets.clear(true, true);
    balas = this.ammo;
  }

  pickUpRifle() {
    this.scene.bullets.clear(true, true);
    console.log("Rifle Picked Up");
    this.scene.marco.marcoBody.setTexture("marcoBodyRifle");
    this.scene.marco.marcoBody.anims.play("idleRifle");
    this.ammo = 150;
    this.delayShoot = 70;
    this.rifle = true;
    this.pistol = false;
    this.bullet_speed = 400;
    this.flamethrower = false;
    balas = this.ammo;
  }

  pickUpFlamethrower() {
    this.playAnimation("flame");
    this.scene.bullets.clear(true, true);
    console.log("Flamethrower Equiped");
    this.scene.marco.marcoBody.setTexture("marcoBodyRifle");
    this.scene.marco.marcoBody.anims.play("idleRifle");
    this.ammo = 50;
    this.delayShoot = 150;
    this.bullet_speed = 210;
    this.flamethrower = true;
    this.rifle = false;
    this.pistol = false;
    balas = this.ammo;
  }
}
