export class Quest {
    constructor(scene, question) {
        this.question = question;
        this.scene = scene;
    }

    preload() {

    }

    create() {
        this.scene.add.text(100, 50, this.question.title, {
            font: '32px Arial',
            fill: '#ffffff',
            backgroundColor: '#000000'
        });

        this.question.options.forEach(element => {
            let option = this.scene.add.text(100, element.distance, element.res, {
                font: '24px Arial',
                fill: '#00ff00',
                backgroundColor: '#000000'
            });
    
            option.setInteractive();

            option.on('pointerdown', () => this.handleClick(element.res))
        });
    }

    update() {

    }

    handleClick(res) {
        if(res === this.question.result) {
            alert("Correcto");
        } else {
            alert("Error");
        }
    }
}