import Typewriter from 'typewriter-effect/dist/core';
import { paths, globalConstants } from './../constants/';
// import * as serviceWorker from './workers/service-worker';
import './../styles/main.scss';
import './../styles/content.scss';
import './../styles/navigation.scss';

navigator.serviceWorker.register('/assets/service-worker.js').then(function () {
    console.log("Yes it did.");
}).catch(function (err) {
    console.log("No it didn't. This happened: ", err)
});

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
