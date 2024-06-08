export class ExercisePortal {
    constructor (scene, portalX, portalY) {  // Cambié 'PortalY' a 'portalY' para mantener la consistencia en los nombres de las variables
        this.scene = scene;
        this.portal;
        this.portalX = portalX;
        this.portalY = portalY;
    }

    preload() {
        this.scene.load.image("portal", "assets/sprites/WavePortal.webp");
    }

    create() {
        this.portal = this.scene.physics.add.staticGroup();
        let portalSprite = this.portal.create(this.portalX, this.portalY, 'portal').setScale(2).refreshBody();
        portalSprite.rotation = Phaser.Math.DegToRad(-60);  // Rotar el sprite individual
    }
}
