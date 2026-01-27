document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault()
const email = document.getElementById("email-link")
const xButton = document.getElementById("x-button")
email.addEventListener("click", function () {
    const contactDiv = document.getElementById("email-page")
    contactDiv.classList.remove("hidden")
})
xButton.addEventListener("click", function () {
    const contactDiv = document.getElementById("email-page")
    contactDiv.classList.add("hidden")
})
})

