import {LitElement, html} from 'lit-element';

class viewerOption extends LitElement {
    static get properties() {
        return {

            randomDisabled:{
                type: Boolean,
            },

            playerName:{
                type: String,
            },

            imageView:{
                type: Object,
            },

            pathImage:{
                type: String,
            },

            selectImage: {
                type: Number,
            }

        }
    }

    constructor() {
        super();
        this.randomDisabled = false;
        this.playerName = "Computer";
        this.imageView = ['lagarto.png','papel.png','piedra.png','spock.png','tijeras.png'];
        this.pathImage = './images/';
        this.selectImage = 0;
        this.loopImage();
    }

    render() {
        return html `
            ${this.randomDisabled?
                html `
                <div>
                    <img src="${this.pathImage}${this.imageView[this.selectImage]}">
                    <p>${this.playerName}</p>
                </div>` :

                html `
                <div>
                    <img src="${this.pathImage}${this.imageView[this.selectImage]}">
                    <p>${this.playerName}</p>
                </div>`
            }
        `
    }

    timer() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            },50)
        });
    }

    async loopImage() {
        console.info(this.randomDisabled)
        while(!this.randomDisabled) {
            await this.timer();
            this.selectImage=Math.floor(Math.random() * (this.imageView.length - 0)) + 0;
        }
    }
}

customElements.define('viewer-option', viewerOption);