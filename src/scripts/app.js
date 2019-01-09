import './../styles/main.scss';
import './../styles/content.scss';
import './../styles/navigation.scss';
import { paths, globalConstants } from './../constants/';
import { fetchData } from './api';

const aboutMeContainer = document.getElementById("about-container");
fetchData(globalConstants.GET_STRING, paths.ABOUT_ME_FILE, handleResponse);
aboutMeContainer.innerText = "";

function handleResponse (status, readyState, responseText) {
    if (readyState == 4 && status == 200) {
        aboutMeContainer.innerText =  responseText;
    } else if (readyState == 4 && status == 404) {
        aboutMeContainer.innerText = globalConstants.NOT_FOUND;
    }
}
