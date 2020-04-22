import { css, } from 'lit-element';


export const statusBarStyles = css`
:host {
  display: block;
  box-sizing: border-box;}

div {
    height: 8vh;
    background-color: #1eb2a6;
    display:grid;
    grid-template-columns: 50% auto;
}

:host p {
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    justify-self: center;
    align-self: center;
    margin-top: 0;
    margin-bottom: 0;
}

:host([hidden]), [hidden] {
    display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;}
`;