import Typewriter from 'typewriter-effect/dist/core';
import { paths, globalConstants } from './../constants/';
import { fetchData } from './api';
import './../styles/main.scss';
import './../styles/content.scss';
import './../styles/navigation.scss';

const typewriterElement = document.getElementById('typewriter');
const words = ['Cześć.', 'Hello.', 'Holá.','Ciao.', 'Hej.', 'Ahoj.', 'Olá.', 'Hallo.', 'Bonjour.', 'Hallå.'].map(word =>  word.toUpperCase() );
new Typewriter('#typewriter', {
    strings: words,
    autoStart: true,
    loop: true,
});

function handleResponse (status, readyState, responseText) {
    if (readyState == 4 && status == 200) {
        aboutMeContainer.innerText =  responseText;
    } else if (readyState == 4 && status == 404) {
        aboutMeContainer.innerText = globalConstants.NOT_FOUND;
    }
}
