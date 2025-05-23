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

  output.innerHTML += `<pre>${art}</pre>`;
  output.innerHTML += `<div>${introText}</div>`;
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
      response = `<div>Currently a student in a Bachelor's program in Network and Systems Engineering, I am developing my skills in network infrastructure, system administration, and cybersecurity through platforms like TryHackMe. Passionate about technology, I also have a foundation in web development using the MERN stack (MongoDB, Express.js, React, Node.js) as well as experience in video game development with Unity. This dual expertise allows me to understand both the network/server side and the creation of interactive and immersive interfaces. Curious, autonomous, and motivated, I am constantly seeking to expand my knowledge and contribute to innovative projects in IT and development.</div>`;
      break;
    case "projects":
      response = "<ul>My projects:<li>Siem implementation:a simple SIEM system using elastic , kibana , logstash and filebeat</li><li>Gym Website: a simple training tracker website using the mern stack</li><li>Multiple Games: as game developement is a hobby of mine i have created multiple games using the unity engine such as a space planet clicker and a subway surfer clone</li></ul>"
      break;
    case "gui":
      response = "I am currently working on a full portfolio please be patient";
      break;
    case "links":
      response = "<ul><li><a href='https://github.com/TwoBadYe'>GitHub</a></li><li><a href='https://www.linkedin.com/in/luizgabrieldev/'>LinkedIn</a></ul>";
      break;
    case "help":
      response = "Available commands: whois , help , links , clear , projects , gui";
      break;
    case "pwd":
      response = `<div>This is a simple terminal styled site created by me :D !</div>`;
      break;
    case "clear":
      output.innerHTML = "";
      return;
    default:
      response = `Command not found: ${command}`;
  }
  output.innerHTML += `<div>${response}</div>`;
}

