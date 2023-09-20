const form = document.querySelector("#form")
const input = document.querySelector("#url")
con

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const videoURL = input.value
  if (!videoURL.includes("shorts")) {
    console.log("Esse video não me parece ser um short")
  }
})
