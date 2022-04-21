import { Check } from "./checkicon";

export const iconClicked = () => {
    const button = document.getElementById('button');
    button.current.addEventListener('click', Check);
}