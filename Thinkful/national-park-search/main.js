const apiKey = 'dtVNYedoCTKnifpqrvqfsahKihMpkNYvLOa5X3bn'
const url = 'https://developer.nps.gov/api/v1/parks?stateCode=WA&limit=10&api_key=dtVNYedoCTKnifpqrvqfsahKihMpkNYvLOa5X3bn'

function getUrl(search, limit, url) {
    
}

function getPark(url) {
    fetch(url).then(response => response.json()).then(responseJson =>
        console.log(responseJson));
}

// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//         throw new Error(response.statusText)
//     })
//     .then(responseJson => displayResults(responseJson))
//     .catch(err => {
//         $('#js-error-message').text(`Something went wrong: ${err.message}`)
//     })
// }

function main() {
    $('.hearMe').on('click', function () {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        const maxResults = $('#js-max-results').val();
        $('.js-search-term').val('');
        getPark(searchTerm, maxResults)
    })
}


$(main)