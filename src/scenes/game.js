import { Player } from "../class/player.js";
import { spaceShip } from "../components/spaceShip.js";
import { ExercisePortal } from "../class/exercisePortal.js";

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
        this.score = 0;
        this.portals = [
            new ExercisePortal (this, 500, 3200),
            new ExercisePortal (this, 850, 2400),
            new ExercisePortal (this, 1260, 1600),
            new ExercisePortal (this, 1750, 700),
            new ExercisePortal (this, 2100, 100)
        ]
    }

    preload() {
        this.load.image("background", "assets/images/background.jpg");
        this.player = new Player(this, spaceShip, 128, 128);
        this.player.preload()
        this.portals.forEach((element) => element.preload())
    }

    create() {
        const background = this.add.image(0, 0, "background").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, background.width, background.height);
        this.portals.forEach((element) => element.create())
        this.player.create();
    }

    update() {
        this.player.update();
    }
}
