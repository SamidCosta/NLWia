import cors from "cors"
import express from "express"
import { download } from "./download"
const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download
  response.send("ID do Video:" + request.params.id)
})

app.listen(3333, () => console.log("Server is running on port 3333"))
