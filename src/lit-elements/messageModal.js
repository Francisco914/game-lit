import {LitElement,html,css} from 'lit-element';
import 'lit-media-query/lit-media-query.js';

class MessageModal extends LitElement{
    static get styles() {
        return css `
            .show-true{
                display: block;
            }

            .show-false{
                display: none;
            }

            .modal {
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }

            .modal-content.mobile-true {
                background-color: #ffa34d;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 30px;
                border: 1px solid #888;
                width: 340px;
                height: 400px;
                text-align:center;
            }

            .title{
                font-size: 30px;
                font-family: 'Lato', sans-serif;
                margin-bottom: 50px;
            }
            
            .message{
                font-size: 18px;
                font-family: 'Montserrat', sans-serif;
                margin-bottom: 40px;
            }

            .gameover{
                width: 300px;
            }

            .winner{
                width: 110px;
                border-radius: 50%;
            }

            button{
                font-size: 18px;
                font-family: 'Lato', sans-serif;
                background-color: #f67575;
                height: 50px;
                width: 200px;
                border-radius: 10px;
                border-color: #ffa34d;
            }

            .modal-content.mobile-false {
                background-color: #ffa34d;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 30px;
                border: 1px solid #888;
                width: 450px;
                height: 400px;
                text-align:center;
            }


        `
    }

    static get properties() {
        return{
            winner: {
                type: Boolean,
            },

            draw: {
                type: Boolean,
            },

            showModal: {
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
        this.winner = false
        this.showModal = false

        this._query = '(max-width: 600px)';
        this._isMobile = false;
    }
    render(){
        return html `
        ${this.winner?
            html `
            <lit-media-query .query="${this._query}" @changed="${this._handleMediaQuery}"></lit-media-query>
            <div class="modal show-${this.showModal}">
                <div class="modal-content mobile-${this._isMobile}">
                    <img class="winner" src="./img/winner.png">
                    <p class="title">Muy bien ¡le ganaste a una computadora!</p>
                    <p class="message">¿Quieres jugar de nuevo?</p>
                    <button @click=${this.playAgain}>Volver a jugar</button>
                </div>
            </div>`:
            html `
            ${this.draw?
                html `
                <lit-media-query .query="${this._query}" @changed="${this._handleMediaQuery}"></lit-media-query>
                <div class="modal show-${this.showModal}">
                    <div class="modal-content mobile-${this._isMobile}">
                        <img class="gameover" src="./img/draw.jpg">
                        <p class="title">Has empatado con una computadora</p>
                        <p class="message">¿Quieres jugar de nuevo?</p>
                        <button @click=${this.playAgain}>Volver a jugar</button>
                    </div>
                </div>
                `:
                html `
                <lit-media-query .query="${this._query}" @changed="${this._handleMediaQuery}"></lit-media-query>
                <div class="modal show-${this.showModal}">
                    <div class="modal-content mobile-${this._isMobile}">
                        <img class="gameover" src="./img/gameover.png">
                        <p class="title">Te ha ganado un ser inanimado</p>
                        <p class="message">¿Quieres jugar de nuevo?</p>
                        <button @click=${this.playAgain}>Volver a jugar</button>
                    </div>
                </div>
                `
            }`
        }`
    }

    playAgain() {
        console.info('play again')
        this.winner = false
        this.showModal = false
        this.dispatchEvent(new CustomEvent('play-again'));
    }

    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }
}
customElements.define('message-modal', MessageModal)