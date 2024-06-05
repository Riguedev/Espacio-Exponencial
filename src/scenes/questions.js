import { Quest } from "../class/quest.js";

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
        this.pregunta = new Quest (this, {
            title: "Quien posee la tecnica de mimetismo",
            options: [
                {res: "Yuta", distance: 100},
                {res: "Gojo", distance: 150},
                {res: "Maki", distance: 200},
                {res: "Miwa", distance: 250},
            ],
            result: "Yuta"
        })
    }

    preload() {
        
    }

    create() {
        this.pregunta.create();
    }
}
