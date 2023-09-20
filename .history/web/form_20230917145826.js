const form = document.querySelector("#form")
const url = document.querySelector("#url")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const videoURL = input.value
  
  if(videoURL.include(shorts)){
    console.log('é um short')
  } 
  else(){
    console.log("Não é um short")
  }
})
