import { css, } from 'lit-element';


export const battleFieldStyles = css`
:host {
  display: block;
  box-sizing: border-box;
  --button-options-width: 60px;
  --button-options-height: 60px;
  --viewer-option-width: 160px;
  --viewer-option-height: 160px;}

:host .container {
    height: 100vh;
}

:host .statusBar {
    height: 8vh;
}

:host .board {
    height: 80vh;
    background-color: #d4f8e8;
    display:grid;
    grid-template-rows: 40% 20% auto;
}

:host .board viewer-option {
    justify-self: center;
    align-self: center;
}

:host .board img {
    width: 110px;
    height: 130px;
    justify-self: center;
    align-self: center;
}

:host .control {
    height: 12vh;
    background-color: #f67575;
    display:grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    justify-items: center;
    align-items: center;
}

@media(min-width: 600px) {
    :host {
        --button-options-width: 90px;
        --button-options-height: 90px;
    }

    :host .board {
        height: 77vh;
        display: grid;
        grid-template-columns: 40% 20% auto;
        grid-template-rows: auto;
    }

    :host .control {
        height: 15vh;
    }
}

@media(min-width: 980px) {
    :host {
        --viewer-option-width: 180px;
        --viewer-option-height: 180px;;
    }

    :host .board img {
        width: 130px;
        height: 150px;
    }
}


@media(min-width: 1120px) {
    :host {
        --viewer-option-width: 200px;
        --viewer-option-height: 200px;;
    }

    :host .board img {
        width: 150px;
        height: 170px;
    }
}

@media(min-width: 1200px) {
    :host {
        --viewer-option-width: 250px;
        --viewer-option-height: 250px;;
    }

    :host .board img {
        width: 170px;
        height: 190px;
    }
}

:host([hidden]), [hidden] {
    display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;}
`;