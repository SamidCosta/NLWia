const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("content")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const videoURL = input.value
  if (!videoURL.includes("shorts")) {
    console.log("Esse video não me parece ser um short")
    content.
  }
})
