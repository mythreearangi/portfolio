/* CONTACT FORM */

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Message Submitted Successfully!");

    });

}


/* DARK MODE & LIGHT MODE */

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        toggleBtn.innerHTML = "☀️";

    }

    else{

        toggleBtn.innerHTML = "🌙";

    }

});


/* TYPING EFFECT */

const text =
"Hi, I'm Arangi Mythree — Aspiring Software Developer & ML Enthusiast";

let index = 0;

function typeEffect(){

    const typing = document.getElementById("typing-text");

    if(typing && index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);
    }
}

window.onload = typeEffect;