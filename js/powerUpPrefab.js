class powerUpPrefab extends Phaser.GameObjects.Sprite{
    
    constructor(scene, positionX, positionY, _spriteName){
        //Herencia de la clase Sprite
		super(scene, positionX, positionY, _spriteName);
        
        //Init
		scene.add.existing(this);     
        this.setOrigin(0,0);
        this.setScale(1);
        this.setDepth(1);
        //Variables propias (rellenar en el futuro)
        this.spriteNsmr = _spriteName;
    }
}