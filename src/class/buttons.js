export class buttons {
    constructor(scene, img, nextScene, positionX, positionY) {
        this.relatedScene = scene;
        this.img = img;
        this.nextScene = nextScene;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    preload() {
        this.relatedScene.load.spritesheet('button', this.img, { frameWidth: 360, frameHeight: 180 });
    }

    create() {
            this.starButton = this.relatedScene.add.sprite(this.positionX, this.positionY, "button").setInteractive();
            this.starButton.on('pointerdown', () => {
            this.relatedScene.scene.start(this.nextScene)
        })
    }
}