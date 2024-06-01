import { RestartButton } from "../components/restart-button.js"

export class Congratulation extends Phaser.Scene {
    constructor() {
        super({key: "Congratulation"})
        this.restartButton = new RestartButton(this);
    }

    preload() {
        this.load.image("congra", "assets/images/congratulation.jpg");
        this.restartButton.preload();
    }

    create() {
        this.add.image(640, 360, "congra")
        this.restartButton.create();
    }
}