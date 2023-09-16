const express = request('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {res.sent('Hello World!')})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})
