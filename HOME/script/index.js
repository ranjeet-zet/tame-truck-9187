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
import footer from "../components/footer.js";

document.getElementById("footerplace").innerHTML = footer();
import navbar from "../../Navbar/component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let Arr = [
  {
    name: "customer satisfaction survey template",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png",
    catigory: "customer",
  },
  {
    name: "customer service",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//customer-service-survey-template.png",
    catigory: "customer",
  },
  {
    name: "Website feedback survey template",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//Website_surveys.png",
    catigory: "customer",
  },
  {
    name: "Net Promoter Score",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//net-promoter-score-survey-template.png",
    catigory: "customer",
  },
  {
    name: "software evaluation survey template",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//software-evaluation-survey-template.png",
    catigory: "customer",
  },
  {
    name: "University student template",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//university-student-satisfaction-survey-template.png",
    catigory: "education",
  },
  {
    name: "Education demographics",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//education-demographics-survey-template.png ",
    catigory: "education",
  },
  {
    name: "Learn support",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//learning-support-survey-template.png",
    catigory: "education",
  },
  {
    name: "K-12 parent template",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//k-12-parent-survey-template.png",
    catigory: "education",
  },
  {
    name: "Parent engagement",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//parent-engagement-survey-template.png",
    catigory: "education",
  },
  {
    name: "360-degree employees evaluation",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//360-Degree-Employee-Evaluation.png",
    catigory: "employee",
  },
  {
    name: "Employ engagement",
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//employee-engagement-survey-template.png",
    catigory: "employee",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//management-performance-survey-template.png",
    name: "Management Performance",
    catigory: "employee",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//employee-satisfaction-survey-template.png",
    name: "Employee Satisfaction",
    catigory: "employee",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//team-performance-survey-template.png",
    name: "Team Performance",
    catigory: "employee",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//professional-event-feedback-survey-template.png",
    name: "Professional Event Feedback",
    catigory: "event",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//post-event-feedback-survey-template.png",
    name: "Post Event Feedback",
    catigory: "event",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//endurance-event-feedback-survey-template.png",
    name: "Endurance Event Feedback",
    catigory: "event",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//eventbrite-template.png",
    name: "Eventbrite post-event feedback",
    catigory: "event",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//appointment-survey-template.png",
    name: "Appointment Survey",
    catigory: "event",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png",
    name: "Product Survey",
    catigory: "product",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png",
    name: "Brand Awareness",
    catigory: "product",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png",
    name: "Product Testing",
    catigory: "product",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//online-shopping-attitudes-survey-template.png",
    name: "Online Shopping Attitudes",
    catigory: "product",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//market-research-service-survey-template.png",
    name: "Market Research Service",
    catigory: "product",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png",
    name: "Product Survey",
    catigory: "marketing",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png",
    name: "Brand Awareness",
    catigory: "marketing",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png",
    name: "Product Testing",
    catigory: "marketing",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//online-shopping-attitudes-survey-template.png",
    name: "Online Shopping Attitudes",
    catigory: "marketing",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//market-research-service-survey-template.png",
    name: "Market Research Service",
    catigory: "marketing",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//volunteer-feedback-survey-template.png",
    name: "Volunteer Feedback",
    catigory: "netprofit",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//fundraising-feedback-survey-template.png",
    name: "Fundraising Feedback",
    catigory: "netprofit",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//donor-feedback-survey-template.png",
    name: "Donor Feedback",
    catigory: "netprofit",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//non-profit-organization-information-survey-template.png",
    name: "Non-Profit Organization Information",
    catigory: "netprofit",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//u-s-government-support-programs-survey-templatepng.png",
    name: "U.S. Government Support Programs",
    catigory: "netprofit",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//diet-exercise-survey-template.png",
    name: "Diet & Exercise",
    catigory: "health",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//post-visit-patient-satisfaction-survey-template.png",
    name: "Post Visit Patient Satisfaction",
    catigory: "health",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//hospital-performance-evaluation-survey-template.png",
    name: "Hospital Performance Evaluation",
    catigory: "health",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//hospital-performance-evaluation-survey-template.png",
    name: "Hospital Performance Evaluation",
    catigory: "health",
  },
  {
    image:
      "https://prod.smassets.net/assets/cms/sm/uploads//cahps-visit-survey-2-0-survey-template.png",
    name: "Cahps Visit Survey 2.0",
    catigory: "health",
  },
];
displaycard(Arr);
function displaycard(data) {
  let App = document.getElementById("main_append");
  document.getElementById("card_total").innerText = data.length;
  App.innerHTML = null;
  data.forEach((element) => {
    let Div = document.createElement("div");
    Div.classList.add("col-md-4");
    // Div.style.backgroundImage = `url(${element.image})`;
    let img = document.createElement("img");
    img.src = element.image;

    let pragraph = document.createElement("p");
    pragraph.innerHTML = element.name;

    Div.append(img, pragraph);
    App.append(Div);
  });
}

/////////////Button//////////////
document
  .getElementById("main_card_sear")
  .addEventListener("input", function () {
    let Id;
    if (Id) {
      clearInterval(Id);
    }
    Id = setTimeout(() => {
      let Type = document.getElementById("main_card_sear").value;
      let Data = Arr.filter((element) => {
        return element.name.toLowerCase().includes(Type.toLowerCase());
      });
      displaycard(Data);
    }, 1200);
  });
document.getElementById("card_cus").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "customer";
  });
  displaycard(Data);
});
document.getElementById("card_edu").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "education";
  });
  displaycard(Data);
});
document.getElementById("card_eve").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "event";
  });
  displaycard(Data);
});
document.getElementById("card_hel").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "health";
  });
  displaycard(Data);
});
document.getElementById("card_emp").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "employee";
  });
  displaycard(Data);
});

document.getElementById("card_mar").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "marketing";
  });
  displaycard(Data);
});
document.getElementById("card_net").addEventListener("click", function () {
  let Data = Arr.filter((element) => {
    return element.catigory === "netprofit";
  });
  displaycard(Data);
});

document.getElementById("card_all").addEventListener("click", function () {
  displaycard(Arr);
});
