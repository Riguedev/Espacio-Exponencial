export class DecorationStar {
    constructor(scene, starX, starY) {
        this.scene = scene;
        this.starX = starX;
        this.starY = starY;
    }

    preload() {
        this.scene.load.image("star", "assets/sprites/star.png");
    } 

    create() {
        this.star = this.scene.add.image(this.starX, this.starY, "star")
    }

    update() {
        this.star.rotation += 0.08
    }
}