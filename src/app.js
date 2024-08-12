/* eslint-disable */
import "bootstrap";
import "./style.css";

const errorMsg = document.querySelector("#error-msg");
const btn = document.querySelector("#sendForm");
const fields = document.querySelectorAll("input,textarea,select");
errorMsg.classList.add("d-none");

window.onload = function() {
  btn.addEventListener("click", function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById("Card").value;
    const cvc = document.getElementById("cvc").value;
    const amount = document.getElementById("Amount").value;
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const city = document.getElementById("City").value;
    const state = document.getElementById("State").value;
    const postalCode = document.getElementById("PostalCode").value;
    const message = document.getElementById("Msg").value;

    let errores = [];

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      errores.push("El número de tarjeta debe tener 16 dígitos.");
    }

    if (cvc.length !== 4 || isNaN(cvc)) {
      errores.push("El CVC debe tener 4 dígitos.");
    }

    if (amount <= 0) {
      errores.push("El monto debe ser mayor que 0.");
    }

    if (firstName.trim() === "") {
      errores.push("El nombre es obligatorio.");
    }

    if (lastName.trim() === "") {
      errores.push("El apellido es obligatorio.");
    }

    if (city.trim() === "") {
      errores.push("La ciudad es obligatoria.");
    }

    if (state === "Pick a state") {
      errores.push("Debe seleccionar un estado.");
    }

    if (postalCode.trim() === "" || isNaN(postalCode)) {
      errores.push("El código postal es obligatorio y debe ser numérico.");
    }

    if (message.trim() === "") {
      errores.push("Mensaje es obligatorio.");
    }
    // Mostrar errores o enviar formulario
    const errorMsg = document.getElementById("error-msg");
    if (errores.length > 0) {
      errorMsg.classList.remove("d-none");
      fields.forEach(function(field) {
        field.style.backgroundColor = "#f8d7da";
      });
      errorMsg.innerHTML = errores.join("<br>");
    } else {
      alert("Formulario enviado correctamente.");
      document.getElementById("formulario").submit();
    }
  });
};
