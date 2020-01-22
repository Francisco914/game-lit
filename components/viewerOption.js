import {LitElement, html} from 'lit-element';

class viewerOption extends LitElement {
    static get properties() {
        return {

            random:{
                type: Boolean,
            },

            playerType:{
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
        this.random = true;
        this.playerName = this.random? 'Computer' : 'Human';
        this.imageView = ['lagarto.png','papel.png','piedra.png','spock.png','tijeras.png'];
        this.pathImage = './images/';
        this.selectImage = 0;
        this.loopImage();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    render() {
        return html `
            ${this.random?
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

    randomImage() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * (this.imageView.length - 0)) + 0);
            },1000)
        });
    }

    async loopImage() {
        console.info("llamado")
        while(this.random){
            const randomNumber = await this.randomImage();
            console.info("Hola");
            console.info(randomNumber);
        }
    }
}

customElements.define('viewer-option', viewerOption);