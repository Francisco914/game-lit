import { LitElement, html, css } from 'lit-element';
import { messageModalStyles } from './messageModalStyles'

class MessageModal extends LitElement {
    static get shadyStyles() {
        return `
            ${messageModalStyles.cssText}
        `;
    }

    static get properties() {
        return {
            winner: {
                type: Boolean,
            },

            draw: {
                type: Boolean,
            },

            showModal: {
                type: Boolean,
            },

            welcomeMessage: {
                type: Boolean,
            },

            images:{
                type: Array,
            }

        }
    }
    constructor() {
        super();
        this.winner = false
        this.showModal = false
        this.welcomeMessage = false;
        this.images = [
            {
                name: "piedra", 
                message1: "Piedra aplasta Papel", 
                message2: "Piedra aplasta al Lagarto"
            }, {
                name: "papel", 
                message1: "Papel tapa a Piedra", 
                message2: "Papel refuta a Spock"
            }, {
                name: "tijeras", 
                message1: "Tijeras cortan Papel", 
                message2: "Tijeras decapitan Lagarto"
            }, {
                name: "lagarto", 
                message1: "Lagarto envenena a Spock", 
                message2: "Lagarto devora Papel"
            }, {
                name: "spock", 
                message1: "Spock rompe Tijeras", 
                message2: "Spock vaporiza Piedra"
            }]
    }
    render() {
        return html`
        <style>${this.constructor.shadyStyles}</style>
        ${this.welcomeMessage ?
            html`
                <div class="modal show-${this.showModal}">
                    <div class="modal-content">
                        <div class="containerWelcome">
                            <div>
                                <h1>Bienvenido a </h1>
                                <h2>Piedra, Papel, Tijeras, Lagarto y Spock</h2>
                                <h3>Intrucciones del Juego</h3>
                            </div>
                            <div class="instructions">
                                ${this.images.map((image, index) => 
                                    html `
                                        <div class="instruction-${index}">
                                            <img class="image" src="./img/${image.name}.png">
                                            <div class="messages">
                                                <p>${image.message1}</p>
                                                <p>${image.message2}</p>
                                            </div>
                                        </div>
                                    `
                                )}
                            </div>
                            <button @click=${this.playAgain}>Entendido</button>
                        </div>
                    </div>
                </div>`:
            html`
            ${this.winner ?
                html`
                <div class="modal show-${this.showModal}">
                    <div class="modal-content">
                        <div class="container">
                            <img class="winner" src="./img/winner.png">
                            <p class="title">Muy bien ¡le ganaste a una computadora!</p>
                            <p class="message">¿Quieres jugar de nuevo?</p>
                            <button @click=${this.playAgain}>Volver a jugar</button>
                        </div>
                    </div>
                </div>`:
                html`
                ${this.draw ?
                    html`
                    <div class="modal show-${this.showModal}">
                        <div class="modal-content">
                            <div class="container">
                                <img class="draw" src="./img/draw.png">
                                <p class="title">Has empatado con una computadora</p>
                                <p class="message">¿Quieres jugar de nuevo?</p>
                                <button @click=${this.playAgain}>Volver a jugar</button>
                            </div>
                        </div>
                    </div>`:
                    html`
                    <div class="modal show-${this.showModal}">
                        <div class="modal-content">
                            <div class="container">
                                <img class="gameover" src="./img/gameover.png">
                                <p class="title">Te ha ganado un ser inanimado</p>
                                <p class="message">¿Quieres jugar de nuevo?</p>
                                <button @click=${this.playAgain}>Volver a jugar</button>
                            </div>
                        </div>
                    </div>`
                }`
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