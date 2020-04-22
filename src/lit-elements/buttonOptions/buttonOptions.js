import {LitElement, html, css} from 'lit-element';
import {buttonOptionsStyles} from './buttonOptionsStyles'

class ButtonOptions extends LitElement{
    static get shadyStyles() {
        return `
            ${buttonOptionsStyles.cssText}
        `;
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
        this.pathImage = './img/';
    }

    render() {
        return html `
            <style>${this.constructor.shadyStyles}</style>
            <img id="${this.image}" src="${this.pathImage}${this.image}.png" @click="${this.selectOption}">
        `
    }

    selectOption(ev) {
        this.dispatchEvent(new CustomEvent('button-option-event',{ detail: ev.currentTarget.id}));
    }
}

customElements.define('button-options', ButtonOptions);