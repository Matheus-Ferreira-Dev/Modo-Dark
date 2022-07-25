const theme = window.localStorage.getItem("theme")
const btn = document.getElementById("imgDark")
const refresh = document.getElementById("refresh")

/* Verficar o tema */
if (theme === "dark") {
    document.body.classList.add("dark")
}

/* Trocar o tema */
btn.addEventListener('click', () => {

    document.body.classList.toggle("dark")

  /*Armazenar tema na memória do navegador */
    if (theme === 'dark'){
        window.localStorage.setItem("theme", "light")
    } else {
        window.localStorage.setItem("theme", "dark")
    }
})

refresh.addEventListener("click", () => {
    window.location.reload()
})