const apiKey = 'AIzaSyDW1dxGgyFUehpS-ThNM9ujmyCJ9HGWl4c'
const url = ''

function getPark() {
    fetch(url).then(response => response.json()).then(responseJson =>
        displayResults(responseJson));
}


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