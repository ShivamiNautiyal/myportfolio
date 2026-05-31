// MOBILE MENU

const links = document.querySelectorAll('nav a');

links.forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

target.scrollIntoView({
behavior:'smooth'
});

});

});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // page reload stop

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/xbdbwyaj", {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerText = "✅ Successfully submitted!";
    status.style.color = "green";
    form.reset();
  } else {
    status.innerText = "❌ Something went wrong. Try again.";
    status.style.color = "red";
  }
});
