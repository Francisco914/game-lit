import {LitElement, html, customElement} from 'lit-element';

class StatusBar extends LitElement{
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
            <div> 
                <p>Computer: ${this.scoreComputer}</p>
                <p>Human: ${this.scoreHuman}</p>
            </div>
        `
    }
}

customElements.define('status-bar', StatusBar);