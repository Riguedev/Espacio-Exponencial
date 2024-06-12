import { Quest } from "./quest.js";

export class Player {

    constructor(scene, playerSprites, spriteWidth, spriteHeight) {
        this.scene = scene; 
        this.playerSprites = playerSprites;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.upSpeed = -5;
        this.downSpeed = 0;
        this.speed = 1;
        this.validations = [false, false, false, false]
        this.questionShown = false; 
        this.pre = false
        this.list =  this.scene.questionList;
    }

    preload() {
        this.scene.load.spritesheet("idle", this.playerSprites.idle.path, {
            frameWidth: this.spriteWidth,
            frameHeight: this.spriteHeight
        });
    }

    create() {
        this.player = this.scene.physics.add.sprite(800, 5700, "idle");
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        this.player.body.setSize(25, 25);
        this.player.rotation = Phaser.Math.DegToRad(20);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.scene.cameras.main.startFollow(this.player);

        for (let i = 0; i < this.scene.portals.length - 1; i++) {
            this.scene.physics.add.overlap(this.player, this.scene.portals[i].portal, this.tocarPortal.bind(this, i), null, this);
        }
        this.scene.physics.add.overlap(this.player, this.scene.portals[4].portal, this.endGame, null, this)
    }

    update() {
        this.player.setVelocityX(this.speed);
        this.player.setVelocityY(-this.upSpeed);
        if (this.speed <= 100) {
            this.speed += 0.1;
            this.upSpeed += 0.2;
        }
    }

    tocarPortal(index, player, portal) {
        if (this.validations[index]) return;

        this.scene.physics.pause();
        let q = new Quest(this.scene, this.list[index].questionInfo, this.list[index].positionX, this.list[index].positionY);
        q.create();
        this.validations[index] = true;
        portal.destroy();
    }


    endGame(player, portal) {
        let relatedScene = this.scene
        relatedScene.scene.start('Gameover', { points: this.scene})
    }
}
