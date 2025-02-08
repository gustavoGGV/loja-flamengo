function includeHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.log("Erro ao carregar " + file + ": " + error));
}

document.addEventListener("DOMContentLoaded", function() {

    includeHTML("container-sidebar", "../components/sidebar.html");
    includeHTML("container-navbar-index", "../components/navbar-index.html");
    includeHTML("container-navbar-cadastro-produto", "../components/navbar-cadastro-produto.html");
    includeHTML("container-navbar-produtos-cadastrados", "../components/navbar-produtos-cadastrados.html");
    includeHTML("container-navbar-perfil", "../components/navbar-perfil.html");
    includeHTML("container-top-camisas", "../components/top-camisas.html");
    includeHTML("container-tabela-produtos-cadastrados", "../components/tabela-produtos-cadastrados.html");
    
});

function toggleMenu(element){
    // Alternar a visibilidade do menu em telas pequenas
    document.getElementById("sidebar").classList.toggle("show");
}