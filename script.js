const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(current < target){
            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCounter();
});
function showAI() {
    document.getElementById("ai-data").style.display = "block";
}
function showData(type){

    const title = document.getElementById("serviceTitle");
    const text = document.getElementById("serviceText");
    const box = document.getElementById("serviceData");

    if(type === "ai"){
        title.innerText = "AI Chatbots";
        text.innerText = "We create ChatGPT bots, WhatsApp bots, customer support bots and AI assistants.";
    }

    if(type === "web"){
        title.innerText = "Web Development";
        text.innerText = "We build modern, responsive and professional websites using HTML, CSS, JavaScript and AI tools.";
    }

    if(type === "auto"){
        title.innerText = "Automation";
        text.innerText = "We automate business tasks, workflows, emails, forms and AI-powered processes.";
    }

    box.style.display = "block";
}
function showData(type){

    alert("Working: " + type);

    const title = document.getElementById("serviceTitle");
    const text = document.getElementById("serviceText");
    const box = document.getElementById("serviceData");

    if(type === "ai"){
        title.innerText = "AI Chatbots";
        text.innerText = "We create ChatGPT bots, WhatsApp bots, customer support bots and AI assistants.";
    }

    if(type === "web"){
        title.innerText = "Web Development";
        text.innerText = "We build modern responsive websites.";
    }

    if(type === "auto"){
        title.innerText = "Automation";
        text.innerText = "We automate business workflows and tasks.";
    }

    box.style.display = "block";
}
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});
document.getElementById("topBtn").onclick = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
};
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
document.getElementById("topBtn").onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
const text = "AI Chatbots • Web Development • Automation";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let phone = "917505792613";

    let text =
`Name: ${name}
Email: ${email}
Message: ${message}`;

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}