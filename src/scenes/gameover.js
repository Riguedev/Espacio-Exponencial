import { buttons } from "../class/buttons.js";

export class Gameover extends Phaser.Scene {
    constructor() {
        super({key: "Gameover"})
        this.reloadButton = new buttons(this, 'assets/sprites/reintentar.png', "Game", 400, 230, "reload")
        this.homeButton = new buttons(this, 'assets/sprites/home.png', "Menu", 600, 230, "home");
    }

    preload() {
        this.reloadButton.preload();
        this.homeButton.preload();
    }

    init(data) {
        this.gameData = data.points;
    }

    create() {
        this.reloadButton.create();
        this.homeButton.create();
        this.add.text(100, 100, 'Tu Puntuación', { fontSize: '32px', fill: '#fff' });
        this.add.text(100, 200, this.gameData.score, { fontSize: '32px', fill: '#fff' });
        this.gameData.score = 0
    }
}