import { css, } from 'lit-element';


export const messageModalStyles = css`
:host {
  display: block;
  box-sizing: border-box;}

.show-true{
    display: block;
}

.show-false{
    display: none;
}

.modal {
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%; /* Full width */
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #ffa34d;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 30px;
    border: 1px solid #888;
    width: 90vw;
    height: 80vh;
    text-align:center;
}

.container {
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 28% 30% 30% 12%;
}

img {
    width: 120px;
    justify-self: center;
    align-self: center;
}

p {
    margin-top: 0;
    margin-bottom: 0;
    justify-self: center;
    align-self: center;
}

.title {
    font-size: 30px;
    font-family: 'Lato', sans-serif;
}

.message {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
}

button {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    background-color: #f67575;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    border: 0;
    justify-self: center;
    align-self: center;
}

@media(min-width: 600px) {
    .container {
        grid-template-rows: 40% 10% 10% auto;
    }

    img {
        width: 150px;
    }

    .modal {
        height: auto;
    }

    .modal-content {
        max-width: 70vw;
    }
}

@media(min-width: 980px) {
    .modal-content {
        max-width: 65vw;
    }
}

@media(min-width: 1120px) {
    .modal-content {
        max-width: 55vw;
    }
}

@media(min-width: 1200px) {
    .modal-content {
        max-width: 45vw;
    }
}

:host([hidden]), [hidden] {
    display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;}
`;