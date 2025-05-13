import express from "express"
import routes from './src/routes/routes.js'

const app = express()
const PORT = 8080

app.use(express.json())

app.use("/", routes)

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`))
