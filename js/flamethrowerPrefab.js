class flamethrowerPrefab extends Phaser.GameObjects.Sprite{
    constructor(scene, positionX, positionY){
        super(scene,positionX, positionY, 'flamethrower');
        scene.add.existing(this);
        this.setOrigin(0,0.5);
        this.setDepth(1);
        this.scene = scene;
        this.ammo = 200;
    }
    preUpdate(){
        if(this.x >= config.width + this.scene.cameras.main.scrollX || this.y < 0){
            //this.active = false;
        }
    }
}