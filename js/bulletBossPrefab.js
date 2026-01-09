class bulletBossPrefab extends Phaser.GameObjects.Sprite{

    constructor(_scene, positionX, positionY, _spriteName){
        super(_scene, positionX, positionY, _spriteName);
        this.setDepth(1);
        this.health = 7;
        _scene.add.existing(this);
        this.anims.play('idleFinalBossBullet');
    }
}