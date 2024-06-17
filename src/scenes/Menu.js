import { buttons } from "../class/buttons.js";

export class Menu extends Phaser.Scene {
    constructor() {
        super({key: "Menu"});
        this.play = new buttons(this, 'assets/sprites/play.png', "Game", 640, 300)
    }

    preload() {
        this.load.image("back", "assets/images/menuBack.jpeg");
        this.play.preload();
    }

    create() {
        this.add.image(0, 0,"back").setOrigin(0,0);
        this.play.create();
    }
}
