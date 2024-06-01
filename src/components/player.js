export class Player {

    constructor(scene, playerSprites, spriteWidth, spriteHeight) {
        this.scene = scene; // Almacena la referencia de la escena
        this.playerSprites = playerSprites;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
    }

    preload() {
        // Usa la referencia de la escena para cargar el spritesheet
        this.scene.load.spritesheet("idle", this.playerSprites.idle.path, {
            frameWidth: this.spriteWidth,
            frameHeight: this.spriteHeight
        });

        this.scene.load.spritesheet("run", this.playerSprites.run.path, {
            frameWidth: this.spriteWidth,
            frameHeight: this.spriteHeight
        });
    }

    create() {
        // Usa la referencia de la escena para crear el sprite del jugador
        this.player = this.scene.physics.add.sprite(100, 720, "idle");
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);

        // Creación de la animación "idle"
        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNumbers("idle", {
                start: 0,
                end: this.playerSprites.idle.long
            }),
            frameRate: 8,
            repeat: -1
        });

        // Creación de la animación "run"
        this.scene.anims.create({
            key: "run",
            frames: this.scene.anims.generateFrameNumbers("run", {
                start: 0,
                end: this.playerSprites.run.long
            }),
            frameRate: 16,
            repeat: -1
        });

        this.cursors = this.scene.input.keyboard.createCursorKeys();

        // Iniciar con la animación "idle"
        this.player.anims.play("idle");
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-600);
            this.player.anims.play("run", true);
            this.player.setFlipX(true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(600);
            this.player.anims.play("run", true);
            this.player.setFlipX(false);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play("idle", true);
        }

        if(this.cursors.up.isDown) {
            this.player.setVelocityY(-600)
        } else if(this.cursors.down.isDown) {
            this.player.setVelocityY(600)
        } else {
            this.player.setVelocityY(0)
        }
    }
}
