import Typewriter from 'typewriter-effect/dist/core';
import { paths, globalConstants } from './../constants/';
// import * as serviceWorker from './workers/service-worker';
import './../styles/main.scss';
import './../styles/content.scss';
import './../styles/navigation.scss';

if ('serviceWorker' in navigator) {
    /**
     * Define if <link rel='next|prev|prefetch'> should
     * be preloaded when accessing this page
     */
    const PREFETCH = true;

    /**
     * Define which link-rel's should be preloaded if enabled.
     */
    const PREFETCH_LINK_RELS = ['index', 'next', 'prev', 'prefetch'];

    /**
     * prefetchCache
     */
    function prefetchCache() {
        if (navigator.serviceWorker.controller) {
            let links = document.querySelectorAll(
                PREFETCH_LINK_RELS.map(rel => {
                    return 'link[rel=' + rel + ']';
                }).join(',')
            );

            if (links.length > 0) {
                Array.from(links).map(link => {
                    let href = link.getAttribute('href');
                    navigator.serviceWorker.controller.postMessage({
                        action: 'cache',
                        url: href,
                    });
                });
            }
        }
    }
    /**
     * Register Service Worker
     */
    navigator.serviceWorker.register('service-worker.js').then(() => {
        console.log('Service Worker Registered');
    });

    /**
     * Wait if ServiceWorker is ready
     */
    navigator.serviceWorker.ready.then(() => {
        console.log('Service Worker Ready');
        if (PREFETCH) {
            prefetchCache();
        }
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

function handleResponse(status, readyState, responseText) {
    if (readyState == 4 && status == 200) {
        aboutMeContainer.innerText = responseText;
    } else if (readyState == 4 && status == 404) {
        aboutMeContainer.innerText = globalConstants.NOT_FOUND;
    }
}
