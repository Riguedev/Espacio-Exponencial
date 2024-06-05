import { EndButton } from "../components/endButton.js";
import { Player } from "../components/player.js";
import { spaceShip } from "../components/spaceShip.js";

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
        this.congaButton = new EndButton(this, true);
        this.overButton = new EndButton(this, false);
        this.player = new Player(this, spaceShip, 128, 128);
    }

    preload() {
        this.load.audio("backmusic", "assets/audio/backgroundMusic.mp3");
        this.load.image("background", "assets/images/background.jpg");
        this.congaButton.preload();
        this.overButton.preload();
        this.player.preload();
    }

    create() {
        this.backgroundMusic = this.sound.add("backmusic");
        this.backgroundMusic.play({ loop: true });
        const background = this.add.image(0, 0, "background").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, background.width, background.height);
        this.congaButton.create();
        this.overButton.create();
        this.player.create();
    }

    update() {
        this.player.update();
    }
}
