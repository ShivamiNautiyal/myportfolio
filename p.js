

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
const toggle = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.checked = true;
}

toggle.addEventListener("change",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});

const voiceBtn = document.getElementById("voice-btn");


// Introduction text
const introduction = `
Hello, I am Shivami Nautiyal.

I am a BTech Information Technology student
and a frontend developer.

I have skills in HTML, CSS, JavaScript, React and SQL.

I have a passion for web development and I enjoy building user-friendly and visually appealing websites.

I have built projects like Facebook Clone,
 and my Personal Portfolio Website. these projects showcase my skills in frontend development and my ability to create responsive and interactive web applications.

I love creating responsive and interactive websites
and I am continuously improving my development skills.

Thank you for visiting my portfolio.
`;


// Function to speak
function speakIntroduction() {

    let speech = new SpeechSynthesisUtterance(introduction);


    // Get all available voices
    let voices = window.speechSynthesis.getVoices();


    // Find female voice
    let femaleVoice = voices.find(voice => 

        voice.name.toLowerCase().includes("female") ||

        voice.name.toLowerCase().includes("zira") 

        
    );


    // If female voice found, apply it
    if(femaleVoice){

        speech.voice = femaleVoice;

    }


    speech.lang = "en-US";

    speech.rate = 0.9;

    speech.pitch = 1.3;

    speech.volume = 1;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}


// Button click
voiceBtn.addEventListener("click", () => {

    speakIntroduction();

});


// Load voices properly
window.speechSynthesis.onvoiceschanged = () => {

    let voices = window.speechSynthesis.getVoices();

    console.log("Available Voices:");

    voices.forEach(voice => {

        console.log(voice.name);

    });

};