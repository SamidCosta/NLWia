const form = document.querySelector("#form")
const input = document.querySelector("#form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Dados enviados")
})
