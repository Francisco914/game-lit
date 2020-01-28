import {LitElement, html, css} from 'lit-element';

class viewerOption extends LitElement {
    static get styles() {
        return css `
            p{
                color: white;
                font-family: Arial;
                text-align: center;
            }
        `
    }

    static get properties() {
        return {

            playerName: {
                type: String,
            },

            randomDisabled: {
                type: Boolean,
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
        this.playerName = "Computer";
        this.randomDisabled = false;
        this.response = "piedra"
        this.imageView = ["piedra", "papel", "tijeras", "lagarto", "spock"];
        this.pathImage = './images/';
        this.selectImage = 0;
        this.loopImage();
    }


    render() {
        return html `
            ${this.randomDisabled?
                html `
                <div>
                    <img src="${this.pathImage}${this.imageView[this.selectImage]}.png">
                    <p>${this.playerName}</p>
                </div>` :

                html `
                <div>
                    <img src="${this.pathImage}${this.imageView[this.selectImage]}.png">
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