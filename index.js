// an arrya where stores all the users response
let formAnswer = [];

let formInfo = {
    name: fullName.value,
    email: email.value,
    pass: pass.value
}

let inputName= document.getElementById("name");
localStorage.setItem("name", inputName.value);


formInfo.push(formAnswer);


let form = document.getElementById('form');
form.addEventListener('submit', showAnswer);

function showAnswer(ev) {
    alert("Your response has been recorded! Thank you for purchasing from us! ");
    ev.preventDefault();
}