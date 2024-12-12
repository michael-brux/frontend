/**
 * HTML element to update with the quote
 */
const responseElement = document.getElementById('response');

/**
 * HTML element to update with the quote's author
 */
const authorElement = document.getElementById('author');

/**
 * URL to fetch the quote from
 */
const url = new URL('https://qapi.vercel.app/api/random');

/**
 * Fetches a quote and updates the response element with the quote.
 */
fetch(url)
    .then(response => response.json())
    .then(json => {
        responseElement.innerText = json.quote;
        authorElement.innerText = json.author;
    })
    .catch(error => responseElement.innerText = error.message);