var typing = new Typed("#home_slidetext", {
  strings: [
    "",
    "Are my employees happy at work?",
    "Will my product be a success or a flop?",
    "Are my customers actually satisfied?",
    "Do people like attending my events?",
  ],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true,
});

import navbar from "../../Navbar/component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
