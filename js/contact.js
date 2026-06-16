function validateForm(event){

    event.preventDefault();

    const name =
    document.getElementById("name")
    .value.trim();

    const email =
    document.getElementById("email")
    .value.trim();

    const message =
    document.getElementById("message")
    .value.trim();

    if(
        !name ||
        !email ||
        !message
    ){

        document.getElementById("error")
        .textContent =
        "All fields are required";

        return;
    }

    document.getElementById("error")
    .textContent = "";

    alert(
        "Form Submitted Successfully"
    );

    document.getElementById("contactForm")
    .reset();

}