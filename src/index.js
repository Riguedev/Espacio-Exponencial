import { Menu } from "./scenes/Menu.js";
import { Film } from "./scenes/film.js";
import { Game } from "./scenes/game.js";

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 590,
    scene: [Menu, Game, Film],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}

let game = new Phaser.Game(config);