export class RestartButton {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    preload() {
        this.relatedScene.load.spritesheet('button', 'assets/images/button.png', { frameWidth: 360, frameHeight: 180 });
    }

    create() {
        this.starButton = this.relatedScene.add.sprite(400, 230, "button").setInteractive();
        this.starButton.on('pointerdown', () => {
            this.relatedScene.scene.start('Game')
        })
    }
  }
