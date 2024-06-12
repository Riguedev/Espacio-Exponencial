export class ExercisePortal {
    constructor (scene, portalX, portalY, deg) {  // Cambié 'PortalY' a 'portalY' para mantener la consistencia en los nombres de las variables
        this.scene = scene;
        this.portal;
        this.portalX = portalX;
        this.portalY = portalY;
        this.deg = deg;
    }

    preload() {
        this.scene.load.image("portal", "assets/sprites/WavePortal.webp");
    }

    create() {
        this.portal = this.scene.physics.add.staticGroup();
        let portalSprite = this.portal.create(this.portalX, this.portalY, 'portal').setScale(2).refreshBody();
        portalSprite.rotation = Phaser.Math.DegToRad(this.deg);  // Rotar el sprite individual
        portalSprite.setSize(100, 200);
        portalSprite.setOffset(10, 20);
    }
}
