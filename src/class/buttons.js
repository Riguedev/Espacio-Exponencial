export class buttons {
    constructor(scene, img, nextScene, positionX, positionY, key) {
        this.relatedScene = scene;
        this.img = img;
        this.nextScene = nextScene;
        this.positionX = positionX;
        this.positionY = positionY;
        this.key = key;  // Clave única para cada imagen de botón
    }

    preload() {
        this.relatedScene.load.spritesheet(this.key, this.img, { frameWidth: 360, frameHeight: 180 });
    }

    create() {
        this.starButton = this.relatedScene.add.sprite(this.positionX, this.positionY, this.key).setInteractive();
        this.starButton.on('pointerdown', () => {
            this.relatedScene.scene.start(this.nextScene);
        });
    }
}
