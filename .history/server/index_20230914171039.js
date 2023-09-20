import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/summary', (request, response) =>  ){
  response.sen
}

app.listen(3333, () => console.log('Server is running on port 3333'))