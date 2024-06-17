import { Menu } from "./scenes/Menu.js";
import { Game } from "./scenes/game.js";
import { Gameover } from "./scenes/gameover.js";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 600,
    scene: [Menu, Game, Gameover],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}

let game = new Phaser.Game(config);