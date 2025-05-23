const input = document.getElementById("commandInput");
const output = document.getElementById("output");


function printIntro() {
  const art = `
___________            __________             .___
\\__    ___/_  _  ______\\______   \\_____     __| _/
  |    |  \\ \\/ \\/ /  _ \\|    |  _/\\__  \\   / __ | 
  |    |   \\     (  <_> )    |   \\ / __ \\_/ /_/ | 
  |____|    \\/\\_/ \\____/|______  /(____  /\\____ | 
                               \\/      \\/      \\/                                  
  `;

  const introText = `
  <strong>Welcome to Jawher Khiari's Terminal Portfolio</strong><br/>
  Type <span style="color: yellow;">'help'</span> to get started.<br/><br/>
  &copy; ${new Date().getFullYear()} Jawher Khiari. All rights reserved.<br/><br/>
  `;

  const introDiv = document.getElementById("intro");
  introDiv.innerHTML = `<pre><code>${art}</code></pre><div>${introText}</div>`;
}
window.onload = () => {
  printIntro();
};
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    output.innerHTML += `<div><span class="prompt">visitor@terminal.TwoBad:~$</span> ${command}</div>`;
    handleCommand(command);
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function handleCommand(command) {
  let response = "";
  switch (command.toLowerCase()) {
    case "whois":
      response = `<div class="js">Currently a student in a Bachelor's program in Network and Systems Engineering, I am developing my skills in network infrastructure, system administration, and cybersecurity through platforms like TryHackMe. Passionate about technology, I also have a foundation in web development using the MERN stack (MongoDB, Express.js, React, Node.js) as well as experience in video game development with Unity. This dual expertise allows me to understand both the network/server side and the creation of interactive and immersive interfaces. Curious, autonomous, and motivated, I am constantly seeking to expand my knowledge and contribute to innovative projects in IT and development.</div>`;
      break;
    case "projects":
      response = "<div class='js'><ul>My projects:<li>Siem implementation:a simple SIEM system using elastic , kibana , logstash and filebeat</li><li>Gym Website: a simple training tracker website using the mern stack</li><li>Multiple Games: as game developement is a hobby of mine i have created multiple games using the unity engine such as a space planet clicker and a subway surfer clone</li></ul></div>"
      break;
    case "gui":
      response = "<div class='js'>I am currently working on a full portfolio please be patient</div>";
      break;
    case "links":
      response = "<div class='js'><ul><li><a href='https://github.com/TwoBadYe'>GitHub</a></li><li><a href='https://www.linkedin.com/in/luizgabrieldev/'>LinkedIn</a></ul></div>";
      break;
    case "catgif":
      response = `<img src="https://media1.tenor.com/m/Myi3a3NLehYAAAAd/gato-pato.gif" alt="cat gif" style="max-width: 100%; height: auto; margin-top: 10px;" />`;
      break;
    case "help":
      response = "<div class='js'>Available commands: whois , help , links , clear , projects , gui , catgif </div>";
      break;
    case "ronnie":
      response = `<img src="https://media1.tenor.com/m/jX50ZT6Gf6UAAAAC/ronnie.gif" alt="cat gif" style="max-width: 100%; height: auto; margin-top: 10px;" />`;
      break;
    case "clear":
      output.innerHTML = "";
      return;
    default:
      response = `Command not found: ${command}`;
  }
  output.innerHTML += `<div>${response}</div>`;
}

