class ExercisePortal {
    constructor (scene, exercise, portalImage) {
        this.scene = scene;
        this.exercise = exercise;
        this.portalImage = portalImage;
    }

    preload() {
        this.scene.load.image("portal", this.portalImage);
    }

    create() {

    }
}