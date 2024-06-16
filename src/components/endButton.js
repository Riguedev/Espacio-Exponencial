export class EndButton {
    constructor(scene, decision) {
      this.relatedScene = scene;
      this.decision = decision
    }
  
    preload() {
        this.relatedScene.load.spritesheet('button', 'assets/images/reintentar.png', { frameWidth: 360, frameHeight: 180 });
    }

    create() {
        if(this.decision === true) {
            this.starButton = this.relatedScene.add.sprite(400, 230, "button").setInteractive();
        } else {
            this.starButton = this.relatedScene.add.sprite(1000, 230, "button").setInteractive();
        }

        this.starButton.on('pointerdown', () => {
            if(this.decision === true) {
                this.relatedScene.scene.start('Congratulation');
                if (this.relatedScene.backgroundMusic) {
                    this.relatedScene.backgroundMusic.stop();
                }
            } else {
                this.relatedScene.scene.start('Gameover');
                if (this.relatedScene.backgroundMusic) {
                    this.relatedScene.backgroundMusic.stop();
                }
            }
        })
    }
  }
