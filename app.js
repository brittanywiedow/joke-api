const express = require('express')
const { request } = require('http')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

const root = path.join(__dirname, 'public')

// allows us to send json
app.use(express.json())
app.use(express.static('public'))

// send html page here?
app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

// jokes
const jokes = [
    {   id: 1, 
        joke: "Why do programmers prefer dark mode?", 
        punchline: "Because light attracts bugs." },

    {   id: 2, 
        joke: "How many programmers does it take to change a light bulb?", 
        punchline: "None. That's a hardware problem." },

    {   id: 3, 
        joke: "Why do Java developers wear glasses?", 
        punchline: "Because they don't see sharp." },

    {   id: 4, 
        joke: "Why was the computer cold?", 
        punchline: "It left its Windows open." },

    {   id: 5, 
        joke: "Why did the developer go broke?", 
        punchline: "Because he used up all his cache." },

    {   id: 6, 
        joke: "Why do programmers always mix up Christmas and Halloween?", 
        punchline: "Because Oct 31 == Dec 25"},

    {   id: 7, 
        joke: "How do you comfort a JavaScript bug?", 
        punchline: "You console it." },
]

// request joke when user clicks button
app.get('/api/v1/random-joke', (request, response) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    response.json(randomJoke)
})



app.listen(port, () => console.log(`http://localhost:${port}/`))
