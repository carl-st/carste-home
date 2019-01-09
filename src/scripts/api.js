function fetchData(method, url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.onreadystatechange = function() {
        const responseHeaders = this.getAllResponseHeaders();
        callback(this.status, this.readyState, this.responseText);
    };
    xhttp.send();
}

export { fetchData };
