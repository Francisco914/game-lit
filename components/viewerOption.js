import {LitElement, html, css} from 'lit-element';

class viewerOption extends LitElement {
    static get styles() {
        return css `
            p{
                color: white;
                font-family: Arial;
                text-align: center;
            }
            img{
                border-radius: 50%;
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
        this.imageView = ["piedra", "papel", "tijeras", "lagarto", "spock"];
        this.pathImage = './images/';
        this.selectImage = 0;
        this.loopImage()
    }

    firstUpdated(properties){
        console.info('ready',properties)
    }

    updated(changedProperties) {
        console.info("updated properties")
        changedProperties.forEach((oldValue, propName) => {
            if(propName === 'randomDisabled'){
                if(oldValue) {
                    this.loopImage()
                }
            }
        });
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
        debugger
        while(!this.randomDisabled) {
            await this.timer();
            this.selectImage=Math.floor(Math.random() * (this.imageView.length - 0)) + 0;
        }

        if(this.randomDisabled) {
            let image = this.selectImage;
            this.dispatchEvent(new CustomEvent('send-random-image', {
                detail: image
            }));
        }
    }
}

customElements.define('viewer-option', viewerOption);