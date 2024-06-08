import { Player } from "../components/player.js";
import { spaceShip } from "../components/spaceShip.js";
import { ExercisePortal } from "../class/exercisePortal.js";

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
        this.score = 0;
        this.portals = []
    }

    preload() {
        this.load.image("background", "assets/images/background.jpg");
        this.player = new Player(this, spaceShip, 128, 128);
        this.portal1 = new ExercisePortal (this, 500, 3200);
        this.portal2 = new ExercisePortal (this, 850, 2400);
        this.portal3 = new ExercisePortal (this, 1260, 1600);
        this.portal4 = new ExercisePortal (this, 1750, 700);
        this.portal5 = new ExercisePortal (this, 2100, 100);
        this.player.preload();
        this.portal1.preload();
        this.portal2.preload();
        this.portal3.preload();
        this.portal4.preload();
        this.portal5.preload();
    }

    create() {
        const background = this.add.image(0, 0, "background").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, background.width, background.height);
        this.portal1.create();
        this.portal2.create();
        this.portal3.create();
        this.portal4.create();
        this.portal5.create();
        this.player.create();
    }

    update() {
        this.player.update();
    }
}
