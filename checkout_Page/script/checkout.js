// function formdata() {
//     event.preventDefault()
//     console.log("hello")
// }

document.getElementById("formdata").addEventListener("submit", next)
function next() {
    event.preventDefault()
    // console.log("hello")
    let obj = {
        name: formdata.first_name.value,
        lastname: formdata.last_name.value,
        country: formdata.country.value,
        billing: formdata.Billing_email.value,
        cardName: document.getElementById("payment2_card").value

    }
    localStorage.setItem("details", JSON.stringify(obj))
    console.log(obj.name, obj.lastname, obj.country, obj.billing)



}
