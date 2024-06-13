export class Quest {
    constructor(scene, question, positionX, positionY, index) {
        this.question = question;
        this.scene = scene;
        this.positionX = positionX;
        this.positionY = positionY;
        this.index = index;
        this.textElements = []; // Arreglo para almacenar los textos creados
    }

    create() {
        // Crear y agregar el texto de la pregunta
        let questionText = this.scene.add.text(this.positionX, this.positionY, this.question.title, {
            font: '32px Arial',
            fill: '#ffffff',
            backgroundColor: '#000000'
        });
        this.textElements.push(questionText);

        // Crear y agregar las opciones de respuesta
        this.question.options.forEach(element => {
            let optionText = this.scene.add.text(this.positionX, element.distance, element.res, {
                font: '24px Arial',
                fill: '#00ff00',
                backgroundColor: '#000000'
            });
            optionText.setInteractive();

            optionText.on('pointerdown', () => this.handleClick(element.res));
            this.textElements.push(optionText);
        });
    }

    update() {
        // Actualizar la lógica, si es necesario
    }

    handleClick(res) {
        if (res === this.question.result) {
            this.scene.counter += 1;
            this.scene.score += 1000
            this.scene.correctSound.play();
            if(this.index === 4) {
                this.scene.soundTrack.stop();
                let relatedScene = this.scene
                relatedScene.scene.start('Gameover', { points: this.scene})
            }

        } else {
            this.scene.errorSound.play();
            if(this.index === 4) {
                this.scene.soundTrack.stop();
                let relatedScene = this.scene
                relatedScene.scene.start('Gameover', { points: this.scene})
            }
        }

        // Destruir todos los textos después de hacer clic en una opción
        this.textElements.forEach(text => text.destroy());
        this.textElements = []; // Vaciar el arreglo de textos

        this.scene.physics.resume();
    }
}
