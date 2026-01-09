class level1 extends Phaser.Scene {
  constructor() {
    //Crear escena
    super({ key: "level1" });
  }

  preload() {
    //Cargamos assets
    this.cameras.main.setBackgroundColor("#FFF");
    //Rutas
    var ruta = "images/";
    var rutaEnemies = ruta + "mission1/enemies";
    var rutaPOWS = ruta + "mission1/pows";
    var rutaPowerUp = ruta + "mission1/powerUps";
    var rutaBoss = ruta + "mission1/enemies/finalBoss";
    var rutaSnd = "sounds/";
    var rutaGameOver = ruta + "gameOver/";

    //Backgrounds spritesheet
    this.load.image("background", ruta + "mission1/background/bg_level1.png", {
      frameWidth: 4153,
      frameHeight: 304,
    });
    this.load.image("parallax", ruta + "mission1/background/parallax.png", {
      frameWidth: 2560,
      frameHeight: 250,
    });
    this.load.image(
      "parallaxEnd",
      ruta + "mission1/background/finalParall.png",
      { frameWidth: 869, frameHeight: 216 }
    );
    this.load.spritesheet(
      "backgroundShip",
      ruta + "mission1/background/bg2.png",
      { frameWidth: 319, frameHeight: 230 }
    );
    this.load.spritesheet("explotion", ruta + "mission1/explosion.png", {
      frameWidth: 82,
      frameHeight: 80,
    });

    //Water - River
    this.load.spritesheet(
      "waterRiver",
      ruta + "mission1/background/water_level1.png",
      { frameWidth: 1651, frameHeight: 32 }
    );

    //Enemies - StadardSoldier -Idle - SimpleMobilePhone
    this.load.spritesheet(
      "stSoldier",
      rutaEnemies + "/standardSoldier/simpleIdleMobilePhone.png",
      { frameWidth: 28, frameHeight: 50 }
    );

    //Enemies - Run
    this.load.spritesheet(
      "runSoldier",
      rutaEnemies + "/standardSoldier/runSoldier.png",
      { frameWidth: 30, frameHeight: 50 }
    );

    //Enemies - Scared
    this.load.spritesheet(
      "scaredSoldier",
      rutaEnemies + "/standardSoldier/scaredSoldier.png",
      { frameWidth: 44, frameHeight: 50 }
    );

    //Enemies - Laught
    this.load.spritesheet(
      "laughtSoldier",
      rutaEnemies + "/standardSoldier/laughtSoldier.png",
      { frameWidth: 36, frameHeight: 38 }
    );

    //Enemies - Shot
    this.load.spritesheet(
      "preShotSoldier",
      rutaEnemies + "/standardSoldier/preShotSoldier.png",
      { frameWidth: 52, frameHeight: 50 }
    );
    this.load.spritesheet(
      "shotSoldier",
      rutaEnemies + "/standardSoldier/shotSoldier.png",
      { frameWidth: 62, frameHeight: 50 }
    );
    this.load.spritesheet(
      "downShotSoldier",
      rutaEnemies + "/standardSoldier/downShotSoldier.png",
      { frameWidth: 62, frameHeight: 47 }
    );
    this.load.spritesheet(
      "endShotSoldier",
      rutaEnemies + "/standardSoldier/endShot.png",
      { frameWidth: 46, frameHeight: 50 }
    );

    //Enemies - Death
    this.load.spritesheet(
      "deathSoldier",
      rutaEnemies + "/standardSoldier/enemyDeath.png",
      { frameWidth: 49, frameHeight: 50 }
    );

    // Final Boss
    this.load.spritesheet(
      "baseFinalBoss",
      ruta + "mission1/finalBoss/bossStructure.png",
      { frameWidth: 394, frameHeight: 237 }
    );
    this.load.spritesheet(
      "baseFinalBoss2",
      ruta + "mission1/finalBoss/bossStructure2.png",
      { frameWidth: 107, frameHeight: 176 }
    );
    this.load.spritesheet(
      "cannonBullet",
      ruta + "mission1/finalBoss/finalBossGunShootDown.png",
      { frameWidth: 80, frameHeight: 71 }
    );
    this.load.spritesheet(
      "grenadeBullet",
      ruta + "mission1/finalBoss/finalBossGunShootUp.png",
      { frameWidth: 57, frameHeight: 71 }
    );
    this.load.spritesheet(
      "finalBossBullet",
      ruta + "mission1/finalBoss/finalBossBullet.png",
      { frameWidth: 60, frameHeight: 70 }
    );

    //POW
    //Run Happy
    this.load.spritesheet("powRun", rutaPOWS + "/powRun.png", {
      frameWidth: 40,
      frameHeight: 48,
    });
    //Arrested Idle
    this.load.spritesheet("powIdle", rutaPOWS + "/powIdle.png", {
      frameWidth: 44,
      frameHeight: 48,
    });
    //Let PowerUp
    this.load.spritesheet("powPowerUp", rutaPOWS + "/powPowerUp.png", {
      frameWidth: 49,
      frameHeight: 48,
    });

    //Power Ups
    this.load.spritesheet("powerUp", rutaPowerUp + "/powerUpH.png", {
      frameWidth: 22,
      frameHeight: 20,
    });
    this.load.spritesheet("powerUpFlame", rutaPowerUp + "/powerUpFlame.png", {
      frameWidth: 22,
      frameHeight: 20,
    });

    // Elemento statico
    this.load.image("bridge", ruta + "mission1/staticElements/bridge.png");
    this.load.spritesheet(
      "destructibleHouse1",
      ruta + "mission1/staticElements/house1.png",
      { frameWidth: 176, frameHeight: 170 }
    );
    this.load.spritesheet(
      "destructibleHouse2",
      ruta + "mission1/staticElements/house3.png",
      { frameWidth: 231, frameHeight: 192 }
    );
    this.load.spritesheet(
      "destructibleHouse3",
      ruta + "mission1/staticElements/house4.png",
      { frameWidth: 98, frameHeight: 170 }
    );

    // Marco Rossi
    this.load.spritesheet(
      "marcoBody",
      ruta + "marcoRossi/marcoBodyPistol.png",
      { frameWidth: 60, frameHeight: 30 }
    );
    this.load.spritesheet(
      "marcoBodyRifle",
      ruta + "marcoRossi/marcoBodyRifle.png",
      { frameWidth: 60, frameHeight: 30 }
    );
    this.load.spritesheet("marcoLegs", ruta + "marcoRossi/legsMarcoRossi.png", {
      frameWidth: 33,
      frameHeight: 24,
    });
    this.load.spritesheet("deathMarco", ruta + "marcoRossi/deathMarco.png", {
      frameWidth: 40,
      frameHeight: 42,
    });
    this.load.spritesheet(
      "flamethrower",
      ruta + "marcoRossi/flamethrowerBulletSprite.png",
      { frameWidth: 70, frameHeight: 35 }
    );
    this.load.image("pistol", ruta + "marcoRossi/bulletSprite.png");
    this.load.image("rifle", ruta + "marcoRossi/rifleBulletSprite.png");

    //Final Boss
    //Structure
    this.load.spritesheet("bossStructure", rutaBoss + "/bossStructure.png", {
      frameWidth: 394,
      frameHeight: 237,
    });
    this.load.spritesheet("bossStructure2", rutaBoss + "/bossStructure2.png", {
      frameWidth: 107,
      frameHeight: 176,
    });
    //Gun Up -> Disparo similar a granada
    this.load.spritesheet(
      "bossGunGranada",
      rutaBoss + "/finalBossGunShootUp.png",
      { frameWidth: 57, frameHeight: 71 }
    );
    //Gun Down -> Disparo similar a laser o metralleta
    this.load.spritesheet(
      "bossGunShoot",
      rutaBoss + "/finalBossGunShootDown.png",
      { frameWidth: 80, frameHeight: 71 }
    );

    //Sound
    //Main theme
    this.load.audio("mainTheme", rutaSnd + "mainTheme.ogg");
    //Game Over
    this.load.audio("gameOverSound", rutaSnd + "gameOver.ogg");
    this.load.audio("missionComplete", rutaSnd + "missionComplete.ogg");

    //Powerups
    this.load.audio("heavyMachineGun", rutaSnd + "heavyMachineGun.ogg");
    this.load.audio("flameGun", rutaSnd + "flameGun.ogg");

    // Guns
    this.load.audio("pistolSound", rutaSnd + "pistol.ogg");
    this.load.audio("rifleSound", rutaSnd + "rifle.ogg");
    this.load.audio("flamethrowerSound", rutaSnd + "flameThrower.ogg");
    this.load.audio("explotionSound", rutaSnd + "explotion.ogg");

    //POV
    this.load.audio("thankYouPOW", rutaSnd + "thankYou.ogg");

    //Enemy - Deaths
    this.load.audio("enemyDeath0", rutaSnd + "soldiers/enemyScream1.ogg");
    this.load.audio("enemyDeath1", rutaSnd + "soldiers/enemyScream2.ogg");
    this.load.audio("enemyDeath2", rutaSnd + "soldiers/enemyScream3.ogg");
    this.load.audio("enemyDeath3", rutaSnd + "soldiers/enemyScream4.ogg");
    this.load.audio("enemyDeath4", rutaSnd + "soldiers/enemyScream5.ogg");

    //Mission Complete
    this.load.audio("missionComplete", rutaSnd + "missionComplete.ogg");

    //HUD
    var rutaUI = "images/mission1/";

    //NUMBERS
    this.load.spritesheet("number1", rutaUI + "/HUD/numbers.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("number2", rutaUI + "/HUD/numbers.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    //GAME OVER Screen
    this.load.image(
      "redScreenGameOver",
      rutaGameOver + "darkRedBackground.jpg"
    );
    this.sound.volume = 0.2;
    this.load.image("blackScreen", "images/score/blackBackground.png");
    this.sound.volume = 0.2;
  }

  create() {
    //Pintamos assets
    // Background
    this.bg = this.add
      .image(0, -64, "background")
      .setOrigin(0)
      .setScale(1)
      .setDepth(1);
    this.parallax = this.add
      .tileSprite(1900, -20, 2560, 250, "parallax")
      .setOrigin(0)
      .setScale(1);
    this.bgShip = this.add.sprite(3790, 120, "backgroundShip").setDepth(0.5);
    this.bgShip2 = this.add.sprite(4000, 120, "backgroundShip").setDepth(0.5);

    this.anims.create({
      key: "bgShipAnim",
      frames: this.anims.generateFrameNumbers("backgroundShip", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    //Water
    this.water = this.add
      .sprite(1860, 208, "waterRiver")
      .setOrigin(0)
      .setScale(1)
      .setDepth(1);

    this.anims.create({
      key: "waterRiverAnim",
      frames: this.anims.generateFrameNumbers("waterRiver", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.water.anims.play("waterRiverAnim");
    this.bgShip.anims.play("bgShipAnim");

    // Cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cursorsMovement = this.input.keyboard.addCapture("W,S,A,D");

    //Enemies
    this.loadEnemies();
    this.createAnimsStardardSoldier();
    this.createStandardSoldier();
    this.createAnimsMarcoRossi();

    // Final Boss
    this.finalBoss = new finalBoss(
      this,
      3820,
      100,
      "baseFinalBoss",
      "baseFinalBoss2",
      "pistol"
    );
    this.finalBoss.createVariables();
    this.time.addEvent({
      delay: 10,
      callback: this.finalBoss.interpolate,
      callbackScope: this,
      repeat: -1,
    });

    //Static Elements
    this.loadStaticElements();
    this.createStaticElements();
    this.createAnimsEnviorement();

    //Ground
    this.createGroundStaticElements(0, config.height);

    //POWS
    this.loadPOWS();
    this.createAnimsPOWS();
    this.createPOWS();

    //PowerUps
    this.loadPowerUps();
    this.createAnimsPowerUps();

    // Capture Keys
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    this.isJumping = false;

    // Marco Rossi
    this.marcos = this.physics.add.group();
    this.marco = new marcoRossi(
      this,
      config.width / 3,
      config.height / 3,
      "marcoBody",
      "marcoLegs"
    ); //config.width/3
    this.marcos.add(this.marco);
    this.marco.body.setSize(17, 40);
    this.marco.body.offset.y = -15;
    this.marco.setOrigin(0.5, 1);
    this.gun = new gunClass(this);
    this.jump = this.input.keyboard.addKey("SPACE");
    this.marco.anims.play("idle");
    this.cameras.main.startFollow(this.marco, false, 0.05, 0, -80, -50);
    this.cameras.main.setBounds(0, 0);

    // Pistola
    this.bullet_speed = 400;
    this.loadBullets();

    // Collision Static Objects
    this.physics.add.collider(
      this.marco,
      this.staticElements,
      this.resetJump,
      null,
      this
    );
    this.physics.add.collider(this.marco, this.destructibleElements);
    this.physics.add.collider(this.enemies, this.staticElements);
    this.physics.add.collider(this.powerUps, this.staticElements);
    this.physics.add.collider(this.pows, this.staticElements);
    this.physics.add.overlap(
      this.bullets,
      this.enemies,
      this.killEnemy,
      null,
      this
    );
    this.physics.add.overlap(
      this.bullets,
      this.destructibleElements,
      this.destroyEnviorement,
      null,
      this
    );
    this.physics.add.overlap(
      this.enemy_bullets,
      this.marco,
      this.killMarco,
      null,
      this
    );
    this.physics.add.overlap(
      this.finalBoss_bullets,
      this.marco,
      this.killMarco,
      null,
      this
    );
    this.physics.add.overlap(
      this.enemy_bullets,
      this.bullets,
      this.damageBullet,
      null,
      this
    );

    this.physics.add.overlap(
      this.bullets,
      this.finalBoss.top,
      this.damageBoss,
      null,
      this
    );

    //Collision MarcoRossi - POWS
    this.physics.add.overlap(
      this.marco,
      this.pows,
      this.interactionMarcoPOW,
      null,
      this
    );
    //Collision MarcoRossi - PowerUps
    this.physics.add.overlap(
      this.marco,
      this.powerUps,
      this.interactionMarcoPowerUps,
      null,
      this
    );

    this.add.image(300, 200, "laughtSoldier");

    //Sound
    this.sound.play("mainTheme");

    //HUD
    //TIMER
    this.digit1Sprite = this.add
      .image(config.width / 2, config.height * 0.95, "number1")
      .setOrigin(0.5)
      .setScale(1)
      .setDepth(2);

    this.digit2Sprite = this.add
      .image(config.width / 2 - 16, config.height * 0.95, "number2")
      .setOrigin(0.5)
      .setScale(1)
      .setDepth(2);

    this.digit1Sprite.setScrollFactor(0); // EL OBJETO SE MANTIENE EN LA MISMA POSICION DE LA PANTALLA SIEMPRE
    this.digit2Sprite.setScrollFactor(0);

    this.timer = this.time.addEvent({
      delay: 1000,
      callback: this.updateCounter,
      callbackScope: this,
      repeat: -1,
    });

    //Live - HUD
    this.liveHUDText = this.add
      .text(50, 50, "Lives: ", {
        fontFamily: "font1",
        fontSize: "18px",
        color: "#00000",
      })
      .setOrigin(0.5)
      .setDepth(2);

    //Bullet - HUD
    this.bulletsHUDText = this.add
      .text(50, 25, "Bullets: ", {
        fontFamily: "font1",
        fontSize: "18px",
        color: "#00000",
      })
      .setOrigin(0.5)
      .setDepth(2);

    //Score - HUD
    this.scoreHUDText = this.add
      .text(50, 25, "Score: ", {
        fontFamily: "font1",
        fontSize: "18px",
        color: "#00000",
      })
      .setOrigin(0.5)
      .setDepth(2);

    //GAME OVER screen
    this.redGameOver = this.add
      .image(0, 0, "redScreenGameOver")
      .setOrigin(0)
      .setScale(1.07, 1.1)
      .setDepth(2);
    this.redGameOver.alpha = 0;
    this.redGameOver.setScrollFactor(0);
    this.blackBG = this.add
      .image(0, 0, "blackScreen")
      .setOrigin(0)
      .setScale(1.07, 1.1)
      .setDepth(2);
    this.blackBG.alpha = 0;
    this.blackBG.setScrollFactor(0);
  }

  update() {
    //Actualizamos assets
    if (this.keyJ.isDown) {
      this.gun.shoot();
      if (this.gun.pistol) {
        this.marco.marcoBody.anims.play("shootPistol", true);
      }
      if (this.gun.flamethrower || this.gun.rifle)
        this.marco.marcoBody.anims.play("shootRifle", true);
    }
    if (
      this.cursors.space.isDown &&
      !this.isJumping &&
      this.marco.anims.getCurrentKey() != "marcoDead"
    ) {
      this.marco.body.velocity.y = -300;
      this.marco.marcoBody.body.velocity.y = -300;
      this.isJumping = true;
    }
    if (this.keyA.isDown && this.marco.anims.getCurrentKey() != "marcoDead") {
      this.marco.body.velocity.x = -100;
      this.marco.anims.play("move", true);
      this.parallax.tilePositionX -= 0.2;
    } else if (
      this.keyD.isDown &&
      this.marco.anims.getCurrentKey() != "marcoDead"
    ) {
      // Function if D is pressed
      this.marco.body.velocity.x = 100;
      this.marco.anims.play("move", true);
      this.parallax.tilePositionX += 0.2;
    } else if (this.keyW.isDown) {
      // Function if W is pressed
      //this.marco.y -=2;
    } else if (this.keyS.isDown) {
      // Function if S is pressed
      //this.marco.y +=2;
    } else {
      if (this.marco.anims.getCurrentKey() != "marcoDead") {
        this.marco.anims.play("idle", true);
      }
      this.marco.body.velocity.x = 0;
    }
    if (this.gun.canShoot && !this.gun.pistol) {
      this.marco.marcoBody.play("idleRifle", true);
    }
    if (this.gun.canShoot && this.gun.pistol) {
      this.marco.marcoBody.play("idlePistol", true);
    }
    this.marco.update(); // updates the position of the body of Marco to
    this.gun.update();
    if (
      this.finalBoss.base.anims.getCurrentKey() == "killBoss" &&
      this.finalBoss.base.anims.getProgress() == 1
    ) {
      this.finalBoss.destroy();
      this.iniciaScoreScene();
    }

    this.finalBoss.detectPlayer();
    this.enemyDetectPlayer();
    this.powBehaviour();

    //LIVE HUD
    this.liveHUDText.setText("Live: " + this.marco.life);
    if (balas != -1) {
      this.bulletsHUDText.setText("Bullets: " + balas);
    } else {
      this.bulletsHUDText.setText("Bullets:" + "∞");
    }

    this.scoreHUDText.setText("Score: " + this.marco.score);
    scorePlayer = this.marco.score;

    this.bulletsHUDText.x = 66 + this.cameras.main.scrollX;
    this.liveHUDText.x = 50 + this.cameras.main.scrollX;
    this.scoreHUDText.x = 250 + this.cameras.main.scrollX;
  }

  interactionMarcoPOW(_marco, _pow) {
    _pow.free = true;
  }

  interactionMarcoPowerUps(_marco, _powerUp) {
    if (_powerUp.spriteNsmr == "rifle") {
      this.gun.pickUpRifle();
      this.sound.play("heavyMachineGun");
    }
    if (_powerUp.spriteNsmr == "powerUpFlame") {
      this.gun.pickUpFlamethrower();
      this.sound.play("flameGun");
    }
    _powerUp.destroy();
    this.marco.score += 100;
  }

  destroyEnviorement(_bullet, _obstacle) {
    if (!this.gun.flamethrower) {
      _bullet.destroy();
    }
    _obstacle.health--;
    _obstacle.updateFrame();
    if (_obstacle.health <= 0) {
      this.explosion = this.add.sprite(
        _obstacle.body.x + 100,
        _obstacle.body.y + 100,
        "explotion"
      );
      this.explosion.setDepth(1.3);
      this.explosion.anims.play("explote");
      this.sound.play("explotionSound");
      _obstacle.destroy();
    }
  }

  killEnemy(_bullet, _enemy) {
    // TODO: Bullet is not being destroyed correctly
    if (
      !this.gun.flamethrower &&
      !(_enemy.anims.getCurrentKey() == "deathSoldierAnim")
    ) {
      _bullet.destroy();
    }
    _enemy.health--;

    if (_enemy.health >= 0) {
      _enemy.deathStart = true;
    }
  }

  damageBoss(_boss, _bullet) {
    _bullet.destroy();
    this.finalBoss.health--;
    if (this.finalBoss.health < 40) {
      this.finalBoss.top.setFrame(2);
    }
    if (this.finalBoss.health < 20) {
      this.finalBoss.top.setFrame(1);
    }
    if (this.finalBoss.health < 10) {
      this.finalBoss.top.setFrame(3);
    }
    if (this.finalBoss.health <= 0) {
      this.finalBoss.base.anims.play("killBoss", true);
      this.explosion = this.add.sprite(
        this.finalBoss.positionX + 100,
        this.finalBoss.positionY + 100,
        "explotion"
      );
      this.explosion.setDepth(1.3);
      this.explosion.anims.play("explote");
      this.sound.play("explotionSound");
      this.marco.score += 5000;
    }
  }

  killMarco(_marco, _bullet) {
    _bullet.destroy();
    this.marco.life--;
    if (this.marco.life <= 0) {
      this.marco.dead();
    }
  }

  damageBullet(_bulletBoss, _bullet) {
    _bulletBoss.health--;
    if (_bulletBoss.health <= 0) {
      _bulletBoss.destroy();
    }
    if (!this.gun.flamethrower) _bullet.destroy();
  }

  destroyBullet(_bullet, _scenario) {
    _bullet.destroy();
  }

  resetJump() {
    if (this.marco.body.velocity.y == 0) {
      this.isJumping = false;
    }
  }

  updateCounter() {
    counter++;
  }

  loadBullets() {
    this.bullets = this.physics.add.group();
    this.enemy_bullets = this.physics.add.group();
  }

  //LoadEnemies
  loadEnemies() {
    this.enemies = this.physics.add.group();
    this.finalBoss_bullets = this.physics.add.group();
  }

  createAnimsEnviorement() {
    this.anims.create({
      key: "fullHealthHouse1",
      frames: this.anims.generateFrameNumbers("destructibleHouse1", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "fullHealthHouse2",
      frames: this.anims.generateFrameNumbers("destructibleHouse2", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "explote",
      frames: this.anims.generateFrameNumbers("explotion", {
        start: 0,
        end: 27,
      }),
      frameRate: 17,
      repeat: 0,
    });
  }

  createAnimsStardardSoldier() {
    this.anims.create({
      key: "idleMobilePhone",
      frames: this.anims.generateFrameNumbers("stSoldier", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "runSoldierAnim",
      frames: this.anims.generateFrameNumbers("runSoldier", {
        start: 0,
        end: 10,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "scaredSoldierAnim",
      frames: this.anims.generateFrameNumbers("scaredSoldier", {
        start: 0,
        end: 12,
      }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "laughtSoldierAnim",
      frames: this.anims.generateFrameNumbers("laughtSoldier", {
        start: 0,
        end: 12,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "preShotSoldierAnim",
      frames: this.anims.generateFrameNumbers("preShotSoldier", {
        start: 0,
        end: 12,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "shotSoldierAnim",
      frames: this.anims.generateFrameNumbers("shotSoldier", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "downShotSoldierAnim",
      frames: this.anims.generateFrameNumbers("downShotSoldier", {
        start: 0,
        end: 14,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "endShotSoldierAnim",
      frames: this.anims.generateFrameNumbers("endShotSoldier", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "deathSoldierAnim",
      frames: this.anims.generateFrameNumbers("deathSoldier", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "shootCannon",
      frames: this.anims.generateFrameNumbers("cannonBullet", {
        start: 0,
        end: 12,
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "shootGrenade",
      frames: this.anims.generateFrameNumbers("grenadeBullet", {
        start: 0,
        end: 35,
      }),
      frameRate: 13,
      repeat: 0,
    });
    this.anims.create({
      key: "killBoss",
      frames: this.anims.generateFrameNumbers("baseFinalBoss", {
        start: 0,
        end: 4,
      }),
      frameRate: 1,
      repeat: 0,
    });

    this.anims.create({
      key: "idleFinalBossBullet",
      frames: this.anims.generateFrameNumbers("finalBossBullet", {
        start: 0,
        end: 3,
      }),
      frameRate: 13,
      repeat: -1,
    });
  }

  createAnimsMarcoRossi() {
    this.anims.create({
      key: "move",
      frames: this.anims.generateFrameNumbers("marcoLegs", {
        start: 16,
        end: 22,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("marcoLegs", {
        start: 10,
        end: 10,
      }),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: "runRifle",
      frames: this.anims.generateFrameNumbers("marcoBodyRifle", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "idleRifle",
      frames: this.anims.generateFrameNumbers("marcoBodyRifle", {
        start: 4,
        end: 5,
      }),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: "shootRifle",
      frames: this.anims.generateFrameNumbers("marcoBodyRifle", {
        start: 12,
        end: 15,
      }),
      frameRate: 13,
      repeat: -1,
    });
    this.anims.create({
      key: "shootPistol",
      frames: this.anims.generateFrameNumbers("marcoBody", {
        start: 4,
        end: 10,
      }),
      frameRate: 14,
      repeat: -1,
    });
    this.anims.create({
      key: "idlePistol",
      frames: this.anims.generateFrameNumbers("marcoBody", {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: "marcoDead",
      frames: this.anims.generateFrameNumbers("deathMarco", {
        start: 0,
        end: 15,
      }),
      frameRate: 7,
      repeat: 0,
    });
    this.anims.create({
      key: "flame",
      frames: this.anims.generateFrameNumbers("flamethrower", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  //CREAR Y DISTRIBUIR ENEMIGOS //**************************************CREAR AQUIIIII! ************************************
  createStandardSoldier() {
    for (var i = 1; i < 100; i++) {
      //20 ENEMIGOS DE MANERA RANDOM en el escenario
      var rnd = Phaser.Math.Between(1, 3);
      var posX = (config.width / rnd) * i;
      var posY = config.height - config.height / rnd;
      var enemy = new StandardSoldier(this, posX, posY, "stSoldier");
      enemy.anims.play("idleMobilePhone");
      this.enemies.add(enemy);
    }
  }

  enemyDetectPlayer() {
    //ACABAR DE CUADRAR ANIMACIONES
    for (var i = 0; i < this.enemies.getLength(); i++) {
      this.enemies.getChildren()[i].body.setSize(0, 50);

      //si esta llamando y el jugador se acerca, se espanta
      if (
        Math.abs(this.enemies.getChildren()[i].x - this.marco.x) <
          this.enemies.getChildren()[i].distanceDetection &&
        this.enemies.getChildren()[i].anims.getCurrentKey() == "idleMobilePhone"
      ) {
        this.enemies.getChildren()[i].anims.play("scaredSoldierAnim");
      }

      //si esta espantado, cuando acabe, corre
      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() ==
          "scaredSoldierAnim" &&
        this.enemies.getChildren()[i].anims.getProgress() == 1
      ) {
        this.enemies.getChildren()[i].anims.play("runSoldierAnim");
      }

      if (this.enemies.getChildren()[i].x > this.marco.x) {
        this.enemies.getChildren()[i].facingLeft = true;
        if (this.enemies.getChildren()[i].facingRight == true) {
          this.enemies.getChildren()[i].setScale(1); //Mira hacia la izquierda
          this.enemies.getChildren()[i].facingRight == false;
        }
      }

      if (this.enemies.getChildren()[i].x < this.marco.x) {
        this.enemies.getChildren()[i].facingRight = true;
        if (this.enemies.getChildren()[i].facingLeft == true) {
          this.enemies.getChildren()[i].setScale(-1, 1); //Mira hacia la derecha
          this.enemies.getChildren()[i].facingLeft == false;
        }
      }
      //si esta corriendo, persigue al jugador
      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() == "runSoldierAnim"
      ) {
        if ((this.enemies.getChildren()[i].facingLeft = true)) {
          this.enemies.getChildren()[i].x -= 1;
        } else {
          this.enemies.getChildren()[i].x += 1;
        }
      }

      //si esta suficiente cerca del jugador, prepara para disparar
      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() ==
          "runSoldierAnim" &&
        Math.abs(this.enemies.getChildren()[i].x - this.marco.x) <
          this.enemies.getChildren()[i].shootDistance
      ) {
        this.enemies.getChildren()[i].anims.play("preShotSoldierAnim");
      }

      //y dispara
      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() ==
          "preShotSoldierAnim" &&
        this.enemies.getChildren()[i].anims.getProgress() == 1
      ) {
        this.enemies.getChildren()[i].anims.play("shotSoldierAnim");
      }
      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() == "shotSoldierAnim"
      ) {
        this.enemies.getChildren()[i].shoot();
      }

      //Si esta disparando pero la distancia aumenta con el jugador lo persigue
      if (
        Math.abs(this.enemies.getChildren()[i].x - this.marco.x) >
          this.enemies.getChildren()[i].distanceDetection &&
        this.enemies.getChildren()[i].anims.getCurrentKey() == "shotSoldierAnim"
      ) {
        this.enemies.getChildren()[i].anims.play("runSoldierAnim");
      }

      //Si el enemigo NO LE QUEDAN VIDAS --> Muere
      if (this.enemies.getChildren()[i].deathStart == true) {
        this.enemies.getChildren()[i].anims.play("deathSoldierAnim");
        this.enemies.getChildren()[i].deathStart = false;
        this.enemies.getChildren()[i].body.enable = false;
        this.sound.play("enemyDeath" + Math.floor(Math.random() * 5));
        this.marco.score += 100;
      }

      if (
        this.enemies.getChildren()[i].anims.getCurrentKey() ==
          "deathSoldierAnim" &&
        this.enemies.getChildren()[i].anims.getProgress() == 1
      ) {
        this.enemies.getChildren()[i].destroy();
      }
    }
  }

  //Load Power Ups
  loadPowerUps() {
    this.powerUps = this.physics.add.group();
  }

  //Anims PowerUps
  createAnimsPowerUps() {
    this.anims.create({
      key: "powerUpAnim",
      frames: this.anims.generateFrameNumbers("powerUp", { start: 0, end: 6 }),
      frameRate: 3,
      yoyo: true,
      repeat: -1,
    });
    this.anims.create({
      key: "powerUpFlameAnim",
      frames: this.anims.generateFrameNumbers("powerUpFlame", {
        start: 0,
        end: 6,
      }),
      frameRate: 3,
      yoyo: true,
      repeat: -1,
    });
  }

  //Create PowerUp
  createPowerUp(_posX, _posY) {
    switch (Math.floor(Math.random() * 2)) {
      case 1:
        var powerUp = new powerUpPrefab(this, _posX, _posY, "rifle");
        powerUp.anims.play("powerUpAnim");
        break;
      case 2:
      default:
        var powerUp = new powerUpPrefab(this, _posX, _posY, "powerUpFlame");
        powerUp.anims.play("powerUpFlameAnim");
        break;
    }

    this.powerUps.add(powerUp);
  }

  //Load Static Elements
  loadStaticElements() {
    this.staticElements = this.physics.add.staticGroup();
    this.destructibleElements = this.physics.add.staticGroup();
  }

  createGroundStaticElements(posX, posY) {
    var staticElement = new StaticElement(this, posX, posY, 20.8, 1.3);
    this.staticElements.add(staticElement);

    staticElement = new StaticElement(this, posX, posY, config.width, 0.6);
    this.staticElements.add(staticElement);

    //staticElement = new StaticElement(this, 3630, 262, config.width,5.6);
    this.staticElements.add(staticElement);
  }

  createStaticElements() {
    //PLATAFORMAS FLOTANTES = nos deja acceder des del lateral y parte inferior
    var posX = 100;
    var posY = config.height * 0.75;

    staticElement = new StaticElement(this, -31, 200, 1, 5);
    this.staticElements.add(staticElement);

    var staticElement = new StaticElement(this, 855, 182, 2, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 1110, 182, 2, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 936, 143, 5.7, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 1170, 143, 4.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 1353, 143, 5.1, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 1520, 182, 2.2, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2060, 152, 2.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2155, 102, 1.4, 0.1);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2255, 152, 2.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2350, 112, 1.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2400, 104, 4.2, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2570, 146, 2.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 2692, 104, 1.6, 0.2);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    //staticElement = new StaticElement(this, 3380, 214, 2.4, 1.2);
    //this.staticElements.add(staticElement);

    //staticElement = new StaticElement(this, 3460, 185, 2.6, 1.2);
    //this.staticElements.add(staticElement);

    //staticElement = new StaticElement(this, 3530, 165, 2.6, 1.2);
    //this.staticElements.add(staticElement);

    //staticElement = new StaticElement(this, 3580, 145, 2.6, 1.2);
    //this.staticElements.add(staticElement);

    staticElement = new StaticElement(this, 3737, 160, 1, 0.1);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    staticElement = new StaticElement(this, 3770, 130, 1.3, 0.1);
    this.staticElements.add(staticElement);
    staticElement.body.checkCollision.down = false;
    staticElement.body.checkCollision.right = false;
    staticElement.body.checkCollision.left = false;

    //DESTRUCTIBLE ELEMENTS //**************************************CREAR AQUIIIII! ***************************************
    // Destructible House
    staticElement = new StaticElement(
      this,
      2850,
      208,
      1,
      1,
      "destructibleHouse3"
    );
    this.destructibleElements.add(staticElement);

    staticElement = new StaticElement(
      this,
      2775,
      208,
      1,
      1,
      "destructibleHouse1"
    );
    this.destructibleElements.add(staticElement);

    staticElement = new StaticElement(
      this,
      3000,
      208,
      1,
      1,
      "destructibleHouse2"
    );
    this.destructibleElements.add(staticElement);
  }

  //POWS
  loadPOWS() {
    this.pows = this.physics.add.group();
  }

  createAnimsPOWS() {
    this.anims.create({
      key: "powRunAnim",
      frames: this.anims.generateFrameNumbers("powRun", { start: 0, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "powIdleAnim",
      frames: this.anims.generateFrameNumbers("powIdle", { start: 0, end: 12 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "powPowerUpAnim",
      frames: this.anims.generateFrameNumbers("powPowerUp", {
        start: 0,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  createPOWS() {
    for (var i = 1; i < 5; i++) {
      var posX = (config.width / 1.5) * i;
      var posY = config.height * 0.2;
      var pow = new StandardPOW(this, posX, posY, "powIdle");
      pow.free = false;
      pow.anims.play("powIdleAnim");
      this.pows.add(pow);
    }
  }

  powBehaviour() {
    for (var i = 0; i < this.pows.getLength(); i++) {
      if (
        this.pows.getChildren()[i].free == true &&
        this.pows.getChildren()[i].anims.getCurrentKey() == "powIdleAnim"
      ) {
        this.sound.play("thankYouPOW");
        this.pows.getChildren()[i].anims.play("powPowerUpAnim");
      }

      //POW -> Suelta el powerUp

      if (
        this.pows.getChildren()[i].anims.getCurrentKey() == "powPowerUpAnim" &&
        this.pows.getChildren()[i].anims.getProgress() == 0.75
      ) {
        if (this.pows.getChildren()[i].letPowerUp == false) {
          this.createPowerUp(
            this.pows.getChildren()[i].body.x,
            this.pows.getChildren()[i].body.y
          );
          this.pows.getChildren()[i].letPowerUp = true;
        }
      }
      if (
        this.pows.getChildren()[i].anims.getCurrentKey() == "powPowerUpAnim" &&
        this.pows.getChildren()[i].anims.getProgress() == 1
      ) {
        this.pows.getChildren()[i].anims.play("powRunAnim");
      }
      if (this.pows.getChildren()[i].anims.getCurrentKey() == "powRunAnim") {
        this.pows.getChildren()[i].body.x--;
      }
    }
  }

  //UI
  updateCounter() {
    if (gameTime - counter > 0) counter++;
    this.counterSprite(gameTime - counter);

    if (gameTime < 0) {
      this.marco.dead();
    }
  }

  counterSprite(number) {
    var numberCounter = number;
    if (number > 9) {
      var digitsecond = numberCounter % 10; //second number
      numberCounter /= 10;
      var digitfirst = Math.trunc(numberCounter); //first number
    } else {
      var digitsecond = numberCounter % 10; //second number
      numberCounter /= 10;
      var digitfirst = 0; //first number
    }

    switch (digitsecond) {
      case 9:
        this.digit1Sprite.setFrame(9);
        break;
      case 8:
        this.digit1Sprite.setFrame(8);
        break;
      case 7:
        this.digit1Sprite.setFrame(7);
        break;
      case 6:
        this.digit1Sprite.setFrame(6);
        break;
      case 5:
        this.digit1Sprite.setFrame(5);
        break;
      case 4:
        this.digit1Sprite.setFrame(4);
        break;
      case 3:
        this.digit1Sprite.setFrame(3);
        break;
      case 2:
        this.digit1Sprite.setFrame(2);
        break;
      case 1:
        this.digit1Sprite.setFrame(1);
        break;
      case 0:
        this.digit1Sprite.setFrame(0);
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }

    switch (digitfirst) {
      case 9:
        this.digit2Sprite.setFrame(9);
        break;
      case 8:
        this.digit2Sprite.setFrame(8);
        break;
      case 7:
        this.digit2Sprite.setFrame(7);
        break;
      case 6:
        this.digit2Sprite.setFrame(6);
        break;
      case 5:
        this.digit2Sprite.setFrame(5);
        break;
      case 4:
        this.digit2Sprite.setFrame(4);
        break;
      case 3:
        this.digit2Sprite.setFrame(3);
        break;
      case 2:
        this.digit2Sprite.setFrame(2);
        break;
      case 1:
        this.digit2Sprite.setFrame(1);
        break;
      case 0:
        this.digit2Sprite.setFrame(0);
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }
  }

  //GAME OVER transition to scene game over
  iniciaGameOver() {
    //Sound
    this.game.sound.stopAll();
    this.sound.play("gameOverSound");

    this.add.tween({
      targets: this.redGameOver,
      duration: 3000,
      alpha: 1,
      onComplete: this.cambiaEscena,
      onCompleteScope: this,
    });
  }

  iniciaScoreScene() {
    //Sound
    this.game.sound.stopAll();
    this.sound.play("missionComplete");

    this.add.tween({
      targets: this.blackBG,
      duration: 2000,
      alpha: 1,
      onComplete: this.cambiaEscenaWin,
      onCompleteScope: this,
    });
  }

  cambiaEscena() {
    this.scene.start("gameOverScene");
  }
  cambiaEscenaWin() {
    this.scene.start("scoreScene");
  }
}
