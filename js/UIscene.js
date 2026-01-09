class UIscene extends Phaser.Scene{
	constructor(){
		//Llamamos al constructor de la escena
	 	super({key: 'UIscene'});
	}
    
    preload()
    {
        var ruta="images/mission1/";
        
        //NUMBERS
        this.load.spritesheet('number1', ruta+'/HUD/numbers.png', {frameWidth: 16, frameHeight: 16})
        this.load.spritesheet('number2', ruta+'/HUD/numbers.png', {frameWidth: 16, frameHeight: 16})
        
    }

    create()
    {
        
        //TIMER
        
        this.digit1Sprite = this.add.image(config.width/2,config.height*.95,'number1').setOrigin(0.5).setScale(1);
        this.digit2Sprite = this.add.image(config.width/2-16,config.height*.95,'number2').setOrigin(0.5).setScale(1);
        
        
        this.TimerText = this.add.text(config.width/2, config.height/4, 'Timer: ', { fontFamily: 'Impact', fontSize: '15px',   color:'#fff' }).setOrigin(0.5);
        this.timer = this.time.addEvent({delay: 1000, callback: this.updateCounter, callbackScope: this, repeat: -1});
        
        //Live - HUD
        this.liveHUDText = this.add.text(50, 50, 'Lives: ', { fontFamily: 'Arial', fontSize: '15px',   color:'#fff' }).setOrigin(0.5);
        
        //Live - HUD
        this.bulletsHUDText = this.add.text(50, 25, 'Lives: ', { fontFamily: 'Arial', fontSize: '15px',   color:'#fff' }).setOrigin(0.5);
        
    }
    
    updateCounter() {
        if(gameTime-counter>0)
        counter++;
        this.counterSprite(gameTime-counter);
    }
    
    counterSprite(number)
    {
        var numberCounter = number;
        if(number>9){
        var digitsecond = numberCounter%10; //second number
        numberCounter /= 10;
        var digitfirst = Math.trunc(numberCounter); //first number
        }
        else{
            var digitsecond = numberCounter%10; //second number
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
    
    update()
    {
        //TIMER
        this.TimerText.setText('Counter: ' + (gameTime-counter));
        
        //LIVE HUD
        this.liveHUDText.setText('Live: ' + livesMarco);
        
        //LIVE HUD
        this.bulletsHUDText.setText('Bullets: ' + balas);
    }
    
}

