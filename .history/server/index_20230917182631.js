import cors from "cors"
import express from "express"
import { download } from "./download.js"
import { trasncribe } from "./transcribe.js"
const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  await download(request.params.id)
  const result= trasncribe()
  
  response.json({result})
})

app.listen(3333, () => console.log("Server is running on port 3333"))
