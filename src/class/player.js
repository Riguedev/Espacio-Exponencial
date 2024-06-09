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
        this.validations = [false, false, false, false, false]
        this.questionShown = false; 
        this.pre = false
    }

    preload() {
        this.scene.load.spritesheet("idle", this.playerSprites.idle.path, {
            frameWidth: this.spriteWidth,
            frameHeight: this.spriteHeight
        });
    }

    create() {
        this.player = this.scene.physics.add.sprite(0, 4000, "idle");
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        this.player.rotation = Phaser.Math.DegToRad(45);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.scene.cameras.main.startFollow(this.player);

        this.scene.physics.add.overlap(this.player, this.scene.portals[0].portal, (player, portal) => {
            this.tocarPortal1(player, portal)
        } , null, this);
    }

    update() {
        this.player.setVelocityX(this.speed);
        this.player.setVelocityY(-this.upSpeed);
        if(this.speed <= 100) {
            this.speed += 0.1;
            this.upSpeed += 0.2;
        }
    }

    // Función para manejar la colisión con los portales
    tocarPortal1(player, portal1) {
        if (this.validations[0]) return;

        this.scene.physics.pause();

        // Crear la pregunta
        this.q1 = new Quest(this.scene, {
            title: "Quien posee la tecnica de mimetismo",
            options: [
                { res: "Yuta", distance: 3300 },
                { res: "Gojo", distance: 3350 },
                { res: "Maki", distance: 3400 },
                { res: "Miwa", distance: 3450 },
                { res: "Geto", distance: 3500 }
            ],
            result: "Yuta"
        },
        100, 
        3200);

        this.q1.create();

        // Marcar que la pregunta ya se mostró
        this.validations[0] = true;
        // Destruir el portal
        portal1.destroy();
    }

    tocarPortal2(player, portal2) {
        if (this.validations[1]) return;

        this.scene.physics.pause();

        // Crear la pregunta
        this.q2 = new Quest(this.scene, {
            title: "Quien posee la tecnica de mimetismo",
            options: [
                { res: "Yuta", distance: 2500 },
                { res: "Gojo", distance: 2550 },
                { res: "Maki", distance: 2600 },
                { res: "Miwa", distance: 2650 },
                { res: "Geto", distance: 2700 }
            ],
            result: "Yuta"
        },
        500, 
        2400);

        this.q2.create();

        // Marcar que la pregunta ya se mostró
        this.validations[1] = true;

        // Destruir el portal
        portal2.destroy();
    }

    tocarPortal3(player, portal3) {
        if (this.validations[2]) return;

        this.scene.physics.pause();

        // Crear la pregunta
        this.q3 = new Quest(this.scene, {
            title: "Quien posee la tecnica de mimetismo",
            options: [
                { res: "Yuta", distance: 1700 },
                { res: "Gojo", distance: 1750 },
                { res: "Maki", distance: 1800 },
                { res: "Miwa", distance: 1850 },
                { res: "Geto", distance: 1900 }
            ],
            result: "Yuta"
        },
        1000, 
        1600);

        this.q3.create();

        // Marcar que la pregunta ya se mostró
        this.validations[2] = true;

        // Destruir el portal
        portal3.destroy();
    }

    tocarPortal4(player, portal4) {
        if (this.pre === true) return;

        this.scene.physics.pause();

        // Crear la pregunta
        this.q4 = new Quest(this.scene, {
            title: "Quien posee la tecnica de mimetismo",
            options: [
                { res: "Yuta", distance: 800 },
                { res: "Gojo", distance: 850 },
                { res: "Maki", distance: 900 },
                { res: "Miwa", distance: 950 },
                { res: "Geto", distance: 1000 }
            ],
            result: "Yuta"
        },
        1600, 
        700);

        this.q4.create();

        // Marcar que la pregunta ya se mostró
        this.pre = true;

        // Destruir el portal
        portal4.destroy();
    }
}
