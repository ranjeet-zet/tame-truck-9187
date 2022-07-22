import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// product toggle
let toggle = () => {
    let x = document.querySelector("#pro > span");
    let y = document.querySelector("#product-container");
    
    if (x.innerText == "expand_more") {
      x.innerText = "keyboard_arrow_up";
      y.style.display = "grid";
      document.querySelector("#solution-container").style.display = "none";
      document.querySelector("#sol > span").innerText = "expand_more";
      document.querySelector("#res > span").innerText = "expand_more";
      document.querySelector("#resources-container").style.display = "none";
      
    } else {
      x.innerText = "expand_more";
      y.style.display = "none";
    }
  };
  document.getElementById("pro").addEventListener("click", toggle);


  // solution toggle
  let solution_toggle = () => {
    let a = document.querySelector("#sol > span");
    let b = document.querySelector("#solution-container");
    if (a.innerText == "expand_more") {
      a.innerText = "keyboard_arrow_up";
      b.style.display = "grid";
      document.querySelector("#product-container").style.display = "none";
      document.querySelector("#pro > span").innerText = "expand_more";
      document.querySelector("#res > span").innerText = "expand_more";
      document.querySelector("#resources-container").style.display = "none";
    } else {
      a.innerText = "expand_more";
      b.style.display = "none";
    }
  };
  document.getElementById("sol").addEventListener("click", solution_toggle);


   // resources toggle
   let resource_toggle = () => {
    let A = document.querySelector("#res > span");
    let B = document.querySelector("#resources-container");
    if (A.innerText == "expand_more") {
      A.innerText = "keyboard_arrow_up";
      B.style.display = "flex";
      document.querySelector("#product-container").style.display = "none";
      document.querySelector("#sol > span").innerText = "expand_more";
      document.querySelector("#pro > span").innerText = "expand_more";
      document.querySelector("#solution-container").style.display = "none";
    } else {
      A.innerText = "expand_more";
      B.style.display = "none";
    }
  };
  document.getElementById("res").addEventListener("click", resource_toggle);