import { Player } from "../class/player.js";
import { spaceShip } from "../components/spaceShip.js";
import { DecorationStar } from "../class/decorationStars.js";
import { ExercisePortal } from "../class/exercisePortal.js";
import { questionList } from "../components/questList.js";

export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
        this.score = 0;
        this.portals = [
            new ExercisePortal (this, 1350, 4700, -65),
            new ExercisePortal (this, 1850, 3700, -66),
            new ExercisePortal (this, 2350, 2700, -68),
            new ExercisePortal (this, 2900, 1700, -70),
            new ExercisePortal (this, 3400, 700, -60)
        ];
        this.stars = [
            new DecorationStar(this, 1250, 4500),
            new DecorationStar(this, 1450, 4900),
            new DecorationStar(this, 1450, 3700),
            new DecorationStar(this, 2250, 3700),
            new DecorationStar(this, 1950, 2900),
            new DecorationStar(this, 2750, 2600),
            new DecorationStar(this, 2900, 1500),
            new DecorationStar(this, 2900, 1900),
            new DecorationStar(this, 3000, 700),
            new DecorationStar(this, 3800, 700),
            new DecorationStar(this, 3400, 500),
            new DecorationStar(this, 3400, 900),
        ]
        this.questionList = questionList;
    }

    preload() {
        this.load.audio("correct", "assets/audio/correct.mp3");
        this.load.audio("error", "assets/audio/fail.mp3");
        this.load.audio("portal", "assets/audio/portal.mp3");
        this.load.audio("backsound", "assets/audio/backgroundMusic.mp3")
        this.load.image("background", "assets/images/background.jpg");
        this.load.image("base", "assets/sprites/Estrellade_la_muerte.webp")
        this.player = new Player(this, spaceShip, 128, 128);
        this.player.preload()
        this.portals.forEach((element) => element.preload())
        this.stars.forEach((element) => element.preload())
    }

    create() {
        this.soundTrack = this.sound.add("backsound");
        this.correctSound = this.sound.add("correct");
        this.errorSound = this.sound.add("error");
        this.portalSound = this.sound.add("portal");
        this.soundTrack.play({loop: true})
        const background = this.add.image(0, 0, "background").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, background.width, background.height);
        this.portals.forEach((element) => element.create());
        this.stars.forEach((element) => element.create());
        this.player.create();
        this.add.image(300, 5700, "base")
    }

    update() {
        this.stars.forEach((element) => element.update())
        this.player.update();
    }
}
