import { Game } from "./scenes/game.js";
import { Congratulation } from "./scenes/congratulations.js";
import { Gameover } from "./scenes/gameover.js";
import { MainScene } from "./scenes/questions.js";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [MainScene, Game, Gameover, Congratulation],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}

let game = new Phaser.Game(config);