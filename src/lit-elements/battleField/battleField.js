import {LitElement, html} from 'lit-element';
import {battleFieldStyles} from './battleFieldStyles.js';
import '../viewerOption/viewerOption.js'
import '../buttonOptions/buttonOptions.js'
import '../statusBar/statusBar.js'
import '../messageModal/messageModal.js'

class battleField extends LitElement {
    static get shadyStyles() {
        return `
            ${battleFieldStyles.cssText}
        `;
    }
    
    static get properties() {
        return {
            playerOneName: {
                type: String,
            },
            playerOneImage: {
                type: Number,
            },
            playerOneScore: {
                type: Number,
            },
            playerOneRandomDisabled:{
                type: Boolean,
            },
            playerTwoName: {
                type: String,
            },
            playerTwoImage: {
                type: Number,
            },
            playerTwoScore: {
                type: Number,
            },
            playerTwoRandomDisabled: {
                type: Boolean,
            },
            images: {
                type: Array,
            },
            openModal:{
                type: Boolean,
            },

            winner:{
                type: Boolean,
            },

            draw:{
                type: Boolean,
            },

            welcomeMessage:{
                type: Boolean,
            },

            openModalWelcome: {
                type: Boolean,
            },
        }
    }

    constructor() {
        super();
        this.playerOneName = 'Paco'
        this.playerOneImage = 0
        this.playerOneScore = 0
        this.playerOneRandomDisabled = true

        this.playerTwoName = 'Computer'
        this.playerTwoImage = 0
        this.playerTwoScore = 0
        this.playerTwoRandomDisabled = false


        this.images = ["piedra", "papel", "tijeras", "lagarto", "spock"]

        this.openModal = false
        this.winner = false
        this.draw = false
        this.openModalWelcome = true;
        this.welcomeMessage = true;
    }

    render() {
        return html `
        <style>${this.constructor.shadyStyles}</style>

        <div class="container">
            <div class="statusBar">
                <status-bar scorehuman=${this.playerOneScore} scorecomputer=${this.playerTwoScore}></status-bar>
            </div>

            <div class="board">
                <viewer-option 
                    playername=${this.playerOneName}
                    selectimage=${this.playerOneImage}
                    ?randomdisabled=${this.playerOneRandomDisabled}>
                </viewer-option>
                <img src="./img/vs.png" alt="">
                <viewer-option
                    playername=${this.playerTwoName}
                    ?randomdisabled=${this.playerTwoRandomDisabled}
                    @send-random-image="${this.getOptionComputer}">
                </viewer-option>
            </div>

            <div class="control">
                ${this.images.map((element, index) => 
                    html `
                        <button-options class="button-${index}" image="${element}" @button-option-event="${this.getOptionHuman}"></button-options>
                    `
                )}
            </div>
        </div>

        <div class="modal">
            <message-modal 
                ?showmodal=${this.openModal}
                ?winner=${this.winner}
                ?draw=${this.draw} 
                @play-again="${this._resetGame}">
            </message-modal>
        </div>

        <div class="modal">
            <message-modal 
                ?showmodal=${this.openModalWelcome}
                ?welcomemessage=${this.welcomeMessage}>
            </message-modal>
        </div>
        `;
    }

    getOptionHuman(ev) {
        let selectImage = this.convertResponse(ev.detail);
        this.playerOneImage = selectImage;
        this.playerTwoRandomDisabled = true;
    }


    getOptionComputer(ev) {
        let selectImage = ev.detail;
        this.playerTwoImage = selectImage;
        this.findWinner();

        console.info(`
        *********************** player one *******************************
        this.playerOneName ${this.playerOneName}
        this.playerOneImage ${this.playerOneImage}
        this.playerOneScore ${this.playerOneScore}
        this.playerOneRandomDisabled ${this.playerOneRandomDisabled}
        *********************** player two *******************************
        this.playerTwoName ${this.playerTwoName}
        this.playerTwoImage ${this.playerTwoImage}
        this.playerTwoScore ${this.playerTwoScore}
        this.playerTwoRandomDisabled ${this.playerTwoRandomDisabled}
        ******************************************************************
        `)
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

    findWinner() {
        let playerOneResponse = this.playerOneImage;
        let playerTwoResponse = this.playerTwoImage;
        this.openModal = true;
        switch(playerOneResponse) {
            case 0:
                //piedra 
                if(playerTwoResponse == 2 || playerTwoResponse == 3) {
                    console.info('gana player 1');
                    this.playerOneScore++;
                    this.winner = true;
                } else if(playerTwoResponse === 0 ) {
                    console.info('empate');
                    this.playerOneScore++;
                    this.playerTwoScore++;
                    this.winner = false;
                    this.draw = true;
                }else {
                    console.info('gana player 2');
                    this.playerTwoScore++;
                    this.winner = false;
                }
                break;
            case 1:
                //papel
                if(playerTwoResponse == 0 || playerTwoResponse == 4) {
                    console.info('gana player 1');
                    this.playerOneScore++;
                    this.winner = true;
                }else if(playerTwoResponse === 1 ) {
                    console.info('empate');
                    this.playerOneScore++;
                    this.playerTwoScore++;
                    this.winner = false;
                    this.draw = true;
                } else {
                    console.info('gana player 2');
                    this.playerTwoScore++;
                    this.winner = false;
                }
                break;
            case 2:
                //papel
                if(playerTwoResponse == 3 || playerTwoResponse == 1) {
                    console.info('gana player 1');
                    this.playerOneScore++;
                    this.winner = true;
                } else if(playerTwoResponse === 2 ) {
                    console.info('empate');
                    this.playerOneScore++;
                    this.playerTwoScore++;
                    this.winner = false;
                    this.draw = true;
                } else {
                    console.info('gana player 2');
                    this.playerTwoScore++;
                    this.winner = false;
                }
                break;
            case 3:
                //papel
                if(playerTwoResponse == 4 || playerTwoResponse == 1) {
                    console.info('gana player 1');
                    this.playerOneScore++;
                    this.winner = true;
                } else if(playerTwoResponse === 3 ) {
                    console.info('empate');
                    this.playerOneScore++;
                    this.playerTwoScore++;
                    this.winner = false;
                    this.draw = true;
                } else {
                    console.info('gana player 2');
                    this.playerTwoScore++;
                    this.winner = false;
                }
                break;
            case 4:
                //papel
                if(playerTwoResponse == 2 || playerTwoResponse == 0) {
                    console.info('gana player 1');
                    this.playerOneScore++;
                    this.winner = true;
                } else if(playerTwoResponse === 4 ) {
                    console.info('empate');
                    this.playerOneScore++;
                    this.playerTwoScore++;
                    this.winner = false;
                    this.draw = true;
                } else {
                    console.info('gana player 2');
                    this.playerTwoScore++;
                    this.winner = false;
                }
                break;
        }
    }

    _resetGame(){
        console.info('reset game')
        this.playerOneName = 'Paco'
        this.playerOneImage = 0
        this.playerOneRandomDisabled = true

        this.playerTwoName = 'Computer'
        this.playerTwoImage = 0
        this.playerTwoRandomDisabled = false


        this.images = ["piedra", "papel", "tijeras", "lagarto", "spock"]

        this.openModal = false
        this.winner = false
        this.draw = false
        this.welcomeMessage = false;
        this.openModalWelcome = false;
    }
   
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }

    _changeSize(event) {
        console.info(event);
        this.size = event.detail;
    }
}

customElements.define('battle-field', battleField)