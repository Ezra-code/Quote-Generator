const quoteText = document.querySelector(".quotation")
const authorName = document.querySelector(".name")
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")
const quoteBtn = document.querySelector("button")

function randomQuote(){
    fetch("http://api.quotable.io/random")
    .then(r => r.json())
    .then(data => {
        quoteText.innerHTML = data.content
        authorName.innerHTML = data.author
    })
}


soundBtn.addEventListener('click', () =>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`)
    speechSynthesis.speak(utterance)
})
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML)
})
// twitterBtn.addEventListener("click", () => {
//     let tweetUrl = ""
// })

quoteBtn.addEventListener("click", randomQuote)