import {LitElement, html, css} from 'lit-element';
import 'lit-media-query/lit-media-query.js';

class viewerOption extends LitElement {
    static get styles() {
        return css `
            p{
                color: black;
                text-size: 18px;
                font-family: 'Montserrat', sans-serif;
                text-align: center;
            }
            img{
                width: var(--viewer-option-width, 110px); 
                height: var(--viewer-option-height, 110px); 
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
            },
        }
    }

    constructor() {
        super();
        this.playerName = "Computer";
        this.randomDisabled = false;
        this.imageView = ["piedra", "papel", "tijeras", "lagarto", "spock"];
        this.pathImage = './img/';
        this.selectImage = 0;
    }

    firstUpdated(){
        this.loopImage()
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