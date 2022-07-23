// function formdata() {
//     event.preventDefault()
//     console.log("hello")
// }

document.getElementById("formdata").addEventListener("submit", next)
function next() {
    event.preventDefault()
    console.log("hello")
    let obj = {
        name: formdata.first_name.value,
        lastname: formdata.last_name.value,
        country: formdata.country.value,
        billing: formdata.Billing_email.value
        // cardName: document.getElementById("payment2_card").value,
        // cardInfo: document.getElementById("payment3_card").value

    }
    localStorage.setItem("details", JSON.stringify(obj))
    // console.log(obj.name, obj.lastname, obj.country, obj.billing, obj.cardName)


    var x = document.getElementById("user_Details");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    //     console.log("start")
    // } else {
    x.style.display = "none";
    // console.log("end")
    document.getElementById("payment").style.marginTop = "-500px";
    // }

}


function show() {
    var x = document.getElementById("user_Details");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("payment").style.marginTop = "500px";
    }
}



// counter
var count1 = 0;
// var count2 = 0
function myFunction() {
    count1--
    console.log(count1)
    let cont = document.getElementById("countdiv").innerText = count1;
    let tota2 = document.getElementById("amounttext").innerText = count1 * 18600;
    var u3 = +document.getElementById("u3").innerText;
    console.log(typeof (u3))
    // console.log(u3, typeof (u3), "lskjd")
    document.getElementById("toat").innerText = tota2 + u3;
    // localStorage.setItem("rate", JSON.stringify("tota2"));
    console.log(tota2)


}

function myFunction1() {
    count1++
    console.log(count1)
    let cont = document.getElementById("countdiv").innerText = count1;
    let total = document.getElementById("amounttext").innerText = count1 * 18600
    var u3 = +document.getElementById("u3").innerText;
    console.log(u3, typeof (u3), "sldjfl")
    document.getElementById("toat").innerText = total + u3
    // localStorage.setItem("rate", JSON.stringify("total"));

    console.log(total)

}
function seatFunction() {
    // console.log("hello")
    let dropdown = document.getElementById("dropdown").value
    // console.log(dropdown)

    let uinq = document.getElementById("u3").innerText = dropdown * 11160

    // let fulltotal = total + uinq
    // console.log(fulltotal)
}



document.getElementById("box22").addEventListener("click", hide);

function hide() {
    console.log("sunidhi")
    document.getElementById("invoicedata").style.display = "block";
    document.getElementById("credit_input11").style.display = "none";
    // x.style.display = "block";
}


document.getElementById("box11").addEventListener("click", displayy);

function displayy() {
    console.log("chauhan");
    document.getElementById("invoicedata").style.display = "none";
    document.getElementById("credit_input11").style.display = "block";
}



// document.getElementById("btn2").addEventListener("click", next2)

// function next2() {
//     console.log("myself")

//     var x = document.getElementById("payment");

//     x.style.display = "none";

//     document.getElementById("mainreview").style.marginTop = "-300px";
// }



function conform() {
    alert("Thanku you for your order")
    window.location.href = "../thankyou.html"
}