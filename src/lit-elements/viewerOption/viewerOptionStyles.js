import { css, } from 'lit-element';


export const viewerOptionStyles = css`
:host {
  display: block;
  box-sizing: border-box;}

:host p{
    color: black;
    text-size: 18px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}

:host img{
    width: var(--viewer-option-width, 110px); 
    height: var(--viewer-option-height, 110px); 
    border-radius: 50%;
}

:host([hidden]), [hidden] {
    display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;}
`;