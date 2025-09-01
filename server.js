// This is an application server //

const express = required("express")
const app = express()

// server host name and port //

const Host = 'localhost'
const Port = 3000

//Default GET route//

app.get("/", (req, res) => {res.send("Welcome home!")})


// Log statement to confirm server operation//

app.listen(PORT, () => {
console.log(`trial app listening on ${HOST}:${PORT}`)
})
