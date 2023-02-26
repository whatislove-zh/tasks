const signInButton = document.querySelector(".sign-in-button")
const loginButton = document.querySelector(".login-button")
const popupWindow = document.querySelector(".popup")
const closeButton = document.querySelector(".close-button")

const helperSignIn = () => {
    popupWindow.style.display = "flex"
}
const helperLogin = (e) => {
    e.preventDefault()
}

const helperClose = () => {
    popupWindow.style.display = "none"
}

signInButton.addEventListener("click", helperSignIn)
loginButton.addEventListener("click", (e) => {helperLogin(e)})
closeButton.addEventListener("click", helperClose)