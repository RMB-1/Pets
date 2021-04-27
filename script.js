var dog = "https://dog.ceo/api/breeds/image/random"
var cat = "https://api.thecatapi.com/v1/images/search?"
var cat_fact = "https://api.kanye.rest"

let quotesDiv = document.getElementById('quotes')
let catButton = document.getElementById('give-cat')
let catDiv = document.getElementById('cat-pic')
catButton.addEventListener("click", evt => {
    fetch(cat_fact)
        .then(res => res.json())
        .then(quote => {
        quotesDiv.innerHTML = `<p> ${quote.quote} </p>`
        })
    fetch(cat)
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat => {
                catDiv.innerHTML = `<img src="${cat.url}" alt="Dinner?" />`
            });
        })
})