import { EndButton } from "../components/endButton.js";
import { Player } from "../components/player.js";
import { enchantress } from "../components/enchantress.js";

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
        this.congaButton = new EndButton(this, true);
        this.overButton = new EndButton(this, false);
        this.player = new Player(this, enchantress, 128, 128);
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
        this.add.image(640, 360, "background");
        this.congaButton.create();
        this.overButton.create();
        this.player.create();
    }

    update() {
        this.player.update();
    }
}
