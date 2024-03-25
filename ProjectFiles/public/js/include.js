document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
        fetch("header/header_body.html").then(response => response.text()),
        fetch("header/header_header.html").then(response => response.text())
    ]).then(([bodyHtml, headerHtml]) => {
        document.querySelector("header_body").innerHTML = bodyHtml;
        document.querySelector("header_header").innerHTML = headerHtml;

        updateClientName();
    });

    function updateClientName() {
        const username = localStorage.getItem('username');
        if (username) {
            const clientName = document.getElementById('clientName');
            if (clientName) {
                clientName.textContent = username;
            }
        }
    }
});
