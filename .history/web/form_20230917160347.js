import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const videoURL = input.value
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse video não me parece ser um short")
  }
  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do video"

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo..."
  content
})
