import {LitElement, html, css} from 'lit-element';

class StatusBar extends LitElement{
    static get styles() {
        return css `
            div{
                display:grid;
                grid-template-columns: 50% auto;
            }

            p{
                font-size: 22px;
                font-family: 'Bangers', cursive;
                justify-self: center;
                align-self: center;
            }
        `
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
            <div> 
                <p>Human: ${this.scoreHuman}</p>
                <p>Computer: ${this.scoreComputer}</p>
            </div>
        `
    }
}

customElements.define('status-bar', StatusBar);