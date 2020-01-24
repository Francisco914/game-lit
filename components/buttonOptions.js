import {LitElement, html} from 'lit-element';

class ButtonOptions extends LitElement{
    static get properties() {
        return {
            image: {
                type: String,
            },

            pathImage: {

            }
        }
    }

    constructor() {
        super();
        this.image = 'piedra.png'
        this.pathImage = './images/';
    }

    render() {
        return html `
            <img src="${this.pathImage}${this.image}">
        `
    }
}

customElements.define('button-options', ButtonOptions);