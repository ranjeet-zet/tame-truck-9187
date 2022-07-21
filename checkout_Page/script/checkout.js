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
    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("start")
    } else {
        x.style.display = "none";
        // console.log("end")
        document.getElementById("payment").style.marginTop = "-500px";
    }

}


function show() {
    var x = document.getElementById("user_Details");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("payment").style.marginTop = "500px";
    } else {
        x.style.display = "none";
    }
}