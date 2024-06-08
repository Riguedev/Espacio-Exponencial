export class Quest {
    constructor(scene, question, positionX, positionY) {
        this.question = question;
        this.scene = scene;
        this.positionX = positionX;
        this.positionY = positionY;
        this.textElements = []; // Arreglo para almacenar los textos creados
    }

    preload() {
        // Cargar recursos si es necesario
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
            alert("Funciono");
            this.scene.score += 1000
            alert(this.scene.score)

        } else {
            alert(this.scene.score)
        }

        // Destruir todos los textos después de hacer clic en una opción
        this.textElements.forEach(text => text.destroy());
        this.textElements = []; // Vaciar el arreglo de textos

        this.scene.physics.resume();
    }
}
