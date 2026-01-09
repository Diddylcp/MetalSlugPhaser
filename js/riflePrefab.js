class riflePrefab extends Phaser.GameObjects.Sprite{
    constructor(scene, positionX, positionY){
        super(scene,positionX, positionY, 'rifle');
        scene.add.existing(this);
        this.setOrigin(0,0.5);
        this.setDepth(1);
        this.scene = scene;
        this.health = 3;
        this.ammo = 200;
    }
    preUpdate(){
        if(this.x >= config.width + this.scene.cameras.main.scrollX || this.y < 0 || this.x <= this.scene.cameras.main.scrollX){
            this.active = false;
        }
    }
}