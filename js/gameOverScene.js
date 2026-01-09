class gameOverScene extends Phaser.Scene{
    
    constructor(){
        super({key: "gameOverScene"});
    }
    
    preload(){
        var ruta="images/gameOver/";
        var rutaSnd = 'sounds/';
        
        this.load.image('bgGameOver',ruta+'gameOverScreen.png');
        this.load.image('redScreenGameOver',ruta+'darkRedBackground.jpg');
        //this.load.image('btn_play',ruta+'btn.png');
        
    }
    
    create(){
        
        this.bgGameOver = this.add.image(0,0, 'bgGameOver').setOrigin(0).setScale(1.06,1);
        this.redGameOver = this.add.image(0,0, 'redScreenGameOver').setOrigin(0).setScale(1.07,1.1);
        this.redGameOver.alpha = 1;
        
        
        this.Timer = this.time.addEvent({delay: 6500, callback: this.gameOverFinish, callbackScope: this, repeat: 0});
        
        /*this.boton = this.add.image (this.scale.width/2,this.scale.height/2+75,'btn_play')
        .setScale(.25)
        .setInteractive().on('pointerdown', this.iniciaJuego, this);*/
        
        
    }
    
    update(){
        if(this.redGameOver.alpha >= 0){
            this.add.tween({targets:this.redGameOver,duration:2000,alpha:0}); 
        }   
    }
    
    gameOverFinish(){
        console.log('gameOverFinish');
        
       this.add.tween({targets:this.bgGameOver,duration:3000,alpha:0, onComplete:this.cambiaEscena,onCompleteScope:this});
    }
    
    cambiaEscena(){
        this.scene.start('scoreScene'); //DEBERÍA CAMBIAR A SCORE
        console.log('GAME');
    }
}