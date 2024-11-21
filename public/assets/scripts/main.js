$form = document.querySelector("form");
$menuBtn = document.querySelector("#menu-btn");
$nav = document.querySelector("nav");

$menuBtn.addEventListener("click", () => {
    $nav.classList.add("visible");
});

$nav.addEventListener("click", () => {
    $nav.classList.remove("visible");
});

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