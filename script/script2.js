function validateForm(){
    const name = document.forms["frmContato"]["userName"].value.trim();
    const email = document.forms["frmContato"]["userEmail"].value.trim();
    const assunto = document.forms["frmContato"]["subject"].value.trim();
    const message = document.forms["frmContato"]["message"].value.trim();

    if (name === "") {
        document.getElementById("userName-info").innerHTML = "Por favor, digite seu nome";
        document.getElementById("userName-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["userName"].classList.add("is-invalid");
        return false;
    }

    if (!isValidEmail(email)) {
        document.getElementById("userEmail-info").innerHTML = "Por favor, digite um e-mail válido";
        document.getElementById("userEmail-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["userEmail"].classList.add("is-invalid");
        return false;
    }

    if (assunto === "") {
        document.getElementById("userSubject-info").innerHTML = "Por favor, digite um assunto válido";
        document.getElementById("usarSubject-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["subject"].classList.add("is-invalid");
        return false;
    }

    if (message === "") {
        document.getElementById("userMessage-info").innerHTML = "Por favor, digite sua mensagem";
        document.getElementById("userMessage-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return false;
    }

    if (message.length <10) {
        document.getElementById("userMessage-info").innerHTML = "por favor, escreva uma mensagem minima de 10 caracteres";
        document.getElementById("userMessage-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex =/\S+@\S+\.\S+/;
    return emailRegex.test(email);
}