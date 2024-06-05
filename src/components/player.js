export class Player {

    constructor(scene, playerSprites, spriteWidth, spriteHeight) {
        this.scene = scene; 
        this.playerSprites = playerSprites;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.upSpeed = 1;
        this.downSpeed = 1;
    }

    preload() {
        this.scene.load.spritesheet("idle", this.playerSprites.idle.path, {
            frameWidth: this.spriteWidth,
            frameHeight: this.spriteHeight
        });
    }

    create() {
        this.player = this.scene.physics.add.sprite(2000, 2000, "idle");
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.scene.cameras.main.startFollow(this.player);
    }

    update() {
        this.player.setVelocityX(30);
        console.log(this.downSpeed)
        if(this.cursors.space.isDown || this.cursors.up.isDown) {
            this.downSpeed = 0; 
            this.player.setVelocityY(-this.upSpeed)
            this.upSpeed += 0.5
        } else {
            this.upSpeed = 0
                this.player.setVelocityY(this.downSpeed)
                this.downSpeed += 0.5
        }
    }

    rotatePlayer(angle) {
        this.player.rotation = Phaser.Math.DegToRad(angle)
    }
}
