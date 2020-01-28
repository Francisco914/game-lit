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
                name: 'Paco',
                response: '',
                score: 0,
                randomDisabled: true,
            },

            two: {
                name: 'Computer',
                response: '',
                score: 0,
                randomDisabled: false
            }
        }

        this.images = ["piedra", "papel", "tijeras", "lagarto", "spock"]
    }

    render() {
        return html `
        <div>
            <status-bar></status-bar>
        </div>
        <div class="board">
            <viewer-option 
                playername=${this.players.one.name}
                selectimage=${this.players.one.response}
                ?randomdisabled=${this.players.one.randomDisabled}>
            </viewer-option>
            <img src="./images/vs.png" alt="">
            <viewer-option
                playername=${this.players.two.name}
                ?randomdisabled=${this.players.two.randomDisabled}>
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
        debugger
        console.info('getOption',ev);
        let selectImage = this.convertResponse(ev.detail);

        this.players = {

            one: {
                name: 'Paco',
                response: selectImage,
                score: 0,
                randomDisabled: true,
            },

            two: {
                name: 'Computer',
                response: '',
                score: 0,
                randomDisabled: true
            }
        }
    }

    convertResponse(response) {
        switch(response) {
            case 'piedra':
                return 0;
                break;
            case 'papel':
                return 1;
                break;
            case 'tijeras':
                return 2;
                break;
            case 'lagarto':
                return 3;
                break;
            case 'spock':
                return 4;
                break;
        }
    }
    
}

customElements.define('battle-field', battleField)