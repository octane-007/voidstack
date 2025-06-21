const terminal = document.getElementById("terminal");
const input = document.getElementById("terminal-input");
const prompt = "user@vel0city:~$ ";
const lines = [
  "whois 0ctane",
  "----------------------------",
  "Name: 0ctane",
  "Interests: Cybersecurity,Gaming,Programming",
  "Project: Vel0city",
  "Project Details: Build a free learning resource hub for everything about cybersecurity,privacy,development and programming for everyone.",
  "Features: Fully free open source platform with no sign ups,ads or trackers",
  "          biweekly blogs",
  "          list of curated high quality free learning resources across the internet",
  "          downloadabe ctfs and labs",
  "          hosted labs in future for minimal fee",
  "Do you want to dv/dt your knowledge? (y/n)"
];

let lineIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    terminal.innerText += lines[lineIndex] + "\n";
    lineIndex++;
    setTimeout(typeLine, 400);
  } else {
    input.focus();
  }
}

typeLine();

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim().toLowerCase();
    terminal.innerText += prompt + value + "\n";
    input.style.display = "none";

    if (value === "y") {
      terminal.innerText += "Launching the learning hub...\n";
    } else if (value === "n") {
      terminal.innerText += "Alright. Sending you there anyway :) \n";
    } else {
      terminal.innerText += "Invalid input. But curiosity wins. Redirecting...\n";
    }

    setTimeout(() => {
      window.location.href = "https://vel0city.0ctane.space"; // replace with your real URL
    }, 2000);
  }
});
