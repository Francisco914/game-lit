import {LitElement, html, css} from 'lit-element';
import './viewerOption.js'
import './buttonOptions.js'
import './statusBar.js'

class battleField extends LitElement {
    static get styles() {
        return css `
            .board {
                padding-top: 100px;
                padding-bottom:100px;
                background-image: url("./images/wallpaper.jpg");
                display:grid;
                grid-template-columns: 40% 20% auto;
            }

            .board viewer-option {
                justify-self: center;
                align-self: center;
            } 
            .board img {
                width: 400px;
                height: 500px;
            }

            .controls {
                display: grid;
                grid-template-columns: repeat(15, 6.6%);
                border: solid 2px;
            }

            .controls .button-0 {
                grid-column-start: 6;
                grid-column-end: 7;
            }

            .button-0:hover,
            .button-1:hover,
            .button-2:hover,
            .button-3:hover,
            .button-4:hover {
                box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
                transition: all 0.2s ease;
            }


        `
    }
    
    static get properties() {
        return {
            players: {
                type: Object,
            },
            images: {
                type: Array,
            }
        }
    }

    constructor() {
        super();
        this.players = {
            one: {
                name: 'Human',
                randomDisabled: true,
            },

            two: {
                name: 'Computer',
                randomDisabled: false
            }
        }
        this.images = ["piedra", "papel", "tijeras", "lagarto", "spock"]
    }

    render(){
        return html `
        <div>
            <status-bar></status-bar>
        </div>
        <div class="board">
            <viewer-option 
                ?randomdisabled="${this.players.one.randomDisabled}"
                playername="${this.players.one.name}">
            </viewer-option>
            <img src="./images/vs.png" alt="">
            <viewer-option
                ?randomdisabled="${this.players.two.randomDisabled}"
                playername="${this.players.two.name}">
            </viewer-option>
        </div>
        <div class="controls">
            ${this.images.map((element, index) => 
                html `
                    <button-options class="button-${index}" image="${element}" @button-option-event="${this.getOption}"></button-options>
                `
            )}
        </div>
        `;
    }

    getOption(ev){
        console.info('getOption',ev);
        this.players.two.randomDisabled = true;
    }
    
}

customElements.define('battle-field', battleField)