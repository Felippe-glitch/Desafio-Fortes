const validCredentials = {
    email: "administrador",
    password: "adm123"
};

function login() {

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    if (emailInput === '' && passwordInput === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!emailInput || !passwordInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (emailInput === validCredentials.email && passwordInput === validCredentials.password) {
        window.location.href = "../pages/AdmProjetos.html";
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        login();
    }
});
