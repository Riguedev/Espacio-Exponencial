import { RestartButton } from "../components/restart-button.js"

export class Gameover extends Phaser.Scene {
    constructor() {
        super({key: "Gameover"})
        this.restarButton = new RestartButton(this);
    }

    preload() {
        this.load.image("over", "assets/images/game_over.png");
        this.restarButton.preload();
    }

    create() {
        this.add.image(640, 360, "over")
        this.restarButton.create();
    }
}