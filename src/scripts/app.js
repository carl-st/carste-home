import Typewriter from 'typewriter-effect/dist/core';
import { paths, globalConstants } from './../constants/';
import './../styles/global.scss';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

const words = [
    'Cześć.',
    'Hello.',
    'Holá.',
    'Ciao.',
    'Hej.',
    'Ahoj.',
    'Olá.',
    'Hallo.',
    'Bonjour.',
    'Hallå.',
].map(word => word.toUpperCase());

new Typewriter('#typewriter', {
    strings: words,
    autoStart: true,
    loop: true,
});
