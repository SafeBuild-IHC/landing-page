$form = document.querySelector("form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = $form.elements["name"].value;
    const email = $form.elements["email"].value;
    const message = $form.elements["message"].value;

    if(!name || !email || !message) {
        alert("Todos los campos son obligatorios");
        return;
    }

    alert(`Formulario enviado: ${name}, ${email}, ${message}`);
});