const h2 = document.createElement("h2");
h2.textContent = "Fly Lightly";
document.querySelector("body").appendChild(h2);

const homeSection = document.querySelector('section.home');


//add event listener//

const button = document.querySelector('#btn');

button.addEventListener("click", function() {
    homeSection.classList.toggle('homeb')
   })


