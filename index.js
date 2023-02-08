AOS.init();

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");

let maindata = "";
let ran;
const getNewQuotes = () => {
    ran = Math.floor((Math.random() * 1000) + 1);
    quotes.innerText = `${maindata[ran].text}`;
    if (maindata[ran].author == null)
        author.innerText = "-By Unknown";
    else
        author.innerText = `-By ${maindata[ran].author}`;
}

const tweetNow = () => {
    let tpost = `https://twitter.com/intent/tweet?text=${maindata[ran].text}  -By ${maindata[ran].author}`;
    window.open(tpost);
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        maindata = await data.json()
        getNewQuotes();
    } catch (error) {

    }
}
tweet.addEventListener("click", tweetNow)
newQ.addEventListener("click", getNewQuotes);
getQuotes();