function includeHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.log("Erro ao carregar " + file + ": " + error));
}

document.addEventListener("DOMContentLoaded", function() {

    includeHTML("container-sidebar", "components/sidebar.html");
    includeHTML("container-navbar", "components/navbar.html");
    includeHTML("container-top-camisas", "components/top-camisas.html")
    
});

function toggleMenu(element){
    // Alternar a visibilidade do menu em telas pequenas
    document.getElementById("sidebar").classList.toggle("show");
}
