import {LitElement, html, css} from 'lit-element';

class ButtonOptions extends LitElement{
    static get styles() {
        return css `
            img {
                width: 120px;
                height: 120px;
            }
        `
    }

    static get properties() {
        return {
            image: {
                type: String,
            },

            pathImage: {
                type: String,
            }
        }
    }

    constructor() {
        super();
        this.image = 'piedra'
        this.pathImage = './images/';
    }

    render() {
        return html `
            <img id="${this.image}" src="${this.pathImage}${this.image}.png" @click="${this.selectOption}">
        `
    }

    selectOption(ev) {
        this.dispatchEvent(new CustomEvent('button-option-event',{ detail: ev.originalTarget.id}));
    }
}

customElements.define('button-options', ButtonOptions);