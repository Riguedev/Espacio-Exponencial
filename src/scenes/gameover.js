import { RestartButton } from "../components/restart-button.js"

export class Gameover extends Phaser.Scene {
    constructor() {
        super({key: "Gameover"})
        this.restarButton = new RestartButton(this);
    }

    preload() {
        this.restarButton.preload();
    }

    init(data) {
        this.score = data.points;
    }

    create() {
        this.restarButton.create();
        this.add.text(100, 100, 'Tu Puntuación', { fontSize: '32px', fill: '#fff' });
        this.add.text(100, 200, this.score, { fontSize: '32px', fill: '#fff' });
    }
}