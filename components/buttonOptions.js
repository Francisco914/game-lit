import {LitElement, html, css} from 'lit-element';

class ButtonOptions extends LitElement{
    static get styles() {
        return css `
            img {
                width: var(--button-options-width, 110px); 
                height: var(--button-options-height, 110px); 
                border-radius: 50%;
            }
            img:hover {
                box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
                transition: all 0.2s ease;
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
        this.dispatchEvent(new CustomEvent('button-option-event',{ detail: ev.currentTarget.id}));
    }
}

customElements.define('button-options', ButtonOptions);