import {LitElement,html,css} from 'lit-element';
import {messageModalStyles} from './messageModalStyles'

class MessageModal extends LitElement{
    static get shadyStyles() {
        return `
            ${messageModalStyles.cssText}
        `;
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

        }
    }
    constructor() {
        super();
        this.winner = false
        this.showModal = false
    }
    render(){
        return html `
        <style>${this.constructor.shadyStyles}</style>
        ${this.winner?
            html `
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
            html `
            ${this.draw?
                html `
                <div class="modal show-${this.showModal}">
                    <div class="modal-content">
                        <div class="container">
                            <img class="draw" src="./img/draw.png">
                            <p class="title">Has empatado con una computadora</p>
                            <p class="message">¿Quieres jugar de nuevo?</p>
                            <button @click=${this.playAgain}>Volver a jugar</button>
                        </div>
                    </div>
                </div>
                `:
                html `
                <div class="modal show-${this.showModal}">
                    <div class="modal-content">
                        <div class="container">
                            <img class="gameover" src="./img/gameover.png">
                            <p class="title">Te ha ganado un ser inanimado</p>
                            <p class="message">¿Quieres jugar de nuevo?</p>
                            <button @click=${this.playAgain}>Volver a jugar</button>
                        </div>
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