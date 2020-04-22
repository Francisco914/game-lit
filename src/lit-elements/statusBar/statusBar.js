import {LitElement, html, css} from 'lit-element';
import {statusBarStyles} from './statusBarStyles'

class StatusBar extends LitElement{
    static get shadyStyles() {
        return `
            ${statusBarStyles.cssText}
        `;
    }

    static get properties() {
        return {
            scoreHuman:{
                type: Number,
            },

            scoreComputer:{
                type: Number,
            }
        }
    }

    constructor() {
        super();
        this.scoreHuman = 0;
        this.scoreComputer = 0;
    }

    render() {
        return html `
            <style>${this.constructor.shadyStyles}</style>
            <div> 
                <p>Human: ${this.scoreHuman}</p>
                <p>Computer: ${this.scoreComputer}</p>
            </div>
        `
    }
}

customElements.define('status-bar', StatusBar);