import { css, } from 'lit-element';


export const buttonOptionsStyles = css`
:host {
  display: block;
  box-sizing: border-box;}

:host img {
    width: var(--button-options-width, 110px); 
    height: var(--button-options-height, 110px); 
    border-radius: 50%;
}

:host img:hover {
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    transition: all 0.2s ease;
}

:host([hidden]), [hidden] {
    display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;}
`;