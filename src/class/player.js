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
        this.angle = 90;
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
        this.player = this.scene.physics.add.sprite(500, 5700, "idle");
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        this.player.body.setSize(25, 25);
        this.player.rotation = Phaser.Math.DegToRad(this.angle);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.scene.cameras.main.startFollow(this.player);

        for (let i = 0; i < this.scene.portals.length; i++) {
            this.scene.physics.add.overlap(this.player, this.scene.portals[i].portal, this.tocarPortal.bind(this, i), null, this);
        }
    }

    update() {
        this.player.rotation = Phaser.Math.DegToRad(this.angle);
        if(this.player.x >= 800) {
            this.player.setVelocityX(this.speed);
            this.player.setVelocityY(-this.upSpeed);
            if (this.speed <= 100) {
                this.speed += 0.1;
                this.upSpeed += 0.2;
                if(this.angle > 20) {
                    this.angle -= 0.3;
                }
            } 
        } else {
            this.player.setVelocityX(30);
            this.player.setVelocityY(0);
        }
        console.log(this.player.x)
    }

    tocarPortal(index, player, portal) {
        if (this.validations[index]) return;

        this.scene.physics.pause();
        this.scene.portalSound.play();
        let q = new Quest(this.scene, this.list[index].questionInfo, this.list[index].positionX, this.list[index].positionY, index);
        q.create();
        this.validations[index] = true;
        portal.destroy();
    }
}
