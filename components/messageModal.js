import {LitElement,html,css} from 'lit-element';

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
            
            .modal-content {
                background-color: #fefefe;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 20px;
                border: 1px solid #888;
                width: 40%; /* Could be more or less, depending on screen size */
                text-align:center;
            }
        `
    }

    static get properties() {
        return{
            winner: {
                type: Boolean,
            },

            showModal: {
                type: Boolean,
            }

        }
    }
    constructor() {
        super();
        this.winner = false
        this.showModal = false
    }
    render(){
        return html `
        ${this.winner?
            html `
            <div class="modal show-${this.showModal}">
                <div class="modal-content">
                    <p>Muy bien...¡¡¡¡le ganaste a una computadora!!!!</p>
                    <p>¿Quieres jugar de nuevo?</p>
                    <button @click=${this.playAgain}>Volver a jugar</button>
                </div>
            </div>`:
            html `
            <div class="modal show-${this.showModal}">
                <div class="modal-content">
                    <p>Te ha ganado un ser inanimado</p>
                    <p>¿Quieres jugar de nuevo?</p>
                    <button @click=${this.playAgain}>Volver a jugar</button>
                </div>
            </div>
            `
        }`
    }

    playAgain() {
        console.info('play again')
        this.winner = false
        this.showModal = false
        this.dispatchEvent(new CustomEvent('play-again'));
    }
}
customElements.define('message-modal', MessageModal)