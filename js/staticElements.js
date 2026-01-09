class StaticElement extends Phaser.GameObjects.Sprite{
    
    constructor(scene, positionX, positionY, scaleX, scaleY, _spriteName){
        //Herencia de la clase Sprite
		super(scene, positionX, positionY, _spriteName);
        
        //Init
		scene.add.existing(this);     
        this.setOrigin(0,1);
        this.setScale(scaleX,scaleY);
        this.setDepth(1);
        this.scene = scene;
        
        //Variables propias (rellenar en el futuro)
        this.spriteNsmr = _spriteName;
        this.health = 10;
        this.damage;

    }  
    
    preUpdate(){}

    updateFrame(){
        // TODO Update frame depending on health
        if(this.health < 8){
            this.setFrame(1);
        }
        if(this.health < 5){
            this.setFrame(2);
        }
        if(this.health < 3){
            this.setFrame(3);
        }
    }
        
}