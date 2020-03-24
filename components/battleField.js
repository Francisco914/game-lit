import {LitElement, html, css} from 'lit-element';
import './viewerOption.js'
import './buttonOptions.js'
import './statusBar.js'
import './messageModal.js'
import 'lit-media-query/lit-media-query.js';

class battleField extends LitElement {
    static get styles() {
        return css `
            .board.mobile-true {
                background-color: #d4f8e8;
                padding-top: 10px;
                padding-bottom:10px;
                //background-image: url("./images/wallpaper.jpg");
                display:grid;
                grid-template-rows: 40% 20% auto;
            }

            .board.mobile-true viewer-option,
            .board.mobile-true img {
                justify-self: center;
                align-self: center;
            }

            .board.mobile-true img {
                width: 200px;
                height: 225px;
            }

            .controls.mobile-true {
                background-color: #f67575;
                padding-top:10px;
                text-align: center;
            }


            .mobile-false {
                --viewer-option-width: 180px;
                --viewer-option-height: 180px;

                --button-options-width: 125px;
                --button-options-height: 125px;
            }

            .board.mobile-false {
                background-color: #d4f8e8;
                height:700px;
                padding-top: 10px;
                padding-bottom:10px;
                //background-image: url("./images/wallpaper.jpg");
                display:grid;
                grid-template-columns: 40% 20% auto;
            }

            .board.mobile-false viewer-option,
            .board.mobile-false img {
                justify-self: center;
                align-self: center;
            }

            .board.mobile-false img {
                width: 200px;
                height: 225px;
            }

            .controls.mobile-false {
                background-color: #f67575;
                padding-top:10px;
                text-align: center;
            }

        `
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
            _query:{
                type: String,
            },
            _isMobile: { 
                type: Boolean 
            }
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

        this._query = '(max-width: 600px)';
        this._isMobile = false;
    }

    render() {
        return html `
        <lit-media-query .query="${this._query}" @changed="${this._handleMediaQuery}"></lit-media-query>
        <div>
        <div>
            <status-bar scorehuman=${this.playerOneScore} scorecomputer=${this.playerTwoScore}></status-bar>
        </div>
        <div class="board mobile-${this._isMobile} ${this._query}">
            <viewer-option 
                playername=${this.playerOneName}
                selectimage=${this.playerOneImage}
                ?randomdisabled=${this.playerOneRandomDisabled}>
            </viewer-option>
            <img src="./images/vs.png" alt="">
            <viewer-option
                playername=${this.playerTwoName}
                ?randomdisabled=${this.playerTwoRandomDisabled}
                @send-random-image="${this.getOptionComputer}">
            </viewer-option>
        </div>
        <div class="controls mobile-${this._isMobile}">
            ${this.images.map((element, index) => 
                html `
                    <button-options class="button-${index}" image="${element}" @button-option-event="${this.getOptionHuman}"></button-options>
                `
            )}
        </div>
        </div>
        <div class="modals">
            <message-modal 
                ?showmodal=${this.openModal}
                ?winner=${this.winner}
                ?draw=${this.draw} 
                @play-again="${this._resetGame}">
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
    }
   
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }
}

customElements.define('battle-field', battleField)