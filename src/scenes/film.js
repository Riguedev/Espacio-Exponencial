import { buttons } from "../class/buttons.js";
import { homeButton } from "../class/homeButton.js";

export class Film extends Phaser.Scene {
    constructor() {
        super({key: "Film"});
        this.reloadButton = new buttons(this, 'assets/sprites/reintentar.png', "Game", 400, 230, "reload")
        this.homeButton = new homeButton(this, 'assets/sprites/home.png', "Menu", 600, 230, "home");
    }

    preload() {
        this.load.video('endVideo', '../assets/video/test.mp4');
        this.reloadButton.preload();
        this.homeButton.preload();
    }
    init(data) {
        this.gameData = data.points;
    }

    create() {
        let video = this.add.video(this.cameras.main.centerX, this.cameras.main.centerY, 'endVideo');
        video.play();

        this.input.keyboard.on('keydown-SPACE', () => {
            video.stop();
            video.destroy();
            this.reloadButton.create();
            this.homeButton.create();
            this.add.text(100, 100, 'Tu Puntuación', { fontSize: '32px', fill: '#fff' });
            this.add.text(100, 200, this.gameData.score, { fontSize: '32px', fill: '#fff' });
            this.gameData.score = 0
        });

        video.on('complete', () => {
            video.destroy();
            this.reloadButton.create();
            this.homeButton.create();
            this.add.text(100, 100, 'Tu Puntuación', { fontSize: '32px', fill: '#fff' });
            this.add.text(100, 200, this.gameData.score, { fontSize: '32px', fill: '#fff' });
            this.gameData.score = 0
        });
    }
}