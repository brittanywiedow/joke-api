
// const button = document.getElementById('getJoke')
// const jokeData = document.getElementById('joke')
// const punchlineData = document.getElementById('punchline')

// button.addEventListener('click', async () => {
//     const response = await fetch('/api/v1/random-joke')
//     const value = await response.json()

//     jokeData.textContent = value.joke
//     punchlineData.textContent = value.punchline
// })


(async () => {
    const button = document.getElementById('getJoke')
    const jokeData = document.getElementById('joke')
    const punchlineData = document.getElementById('punchline')

    button.addEventListener('click', async () => {
        const response = await fetch('/api/v1/random-joke')
        // remove const value and use joke/punchline here?
        const { joke, punchline } = await response.json()

        // add data into joke/punchline elements
        jokeData.textContent = joke
        punchlineData.textContent = punchline
    })
})()
