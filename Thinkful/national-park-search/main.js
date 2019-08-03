// const apiKey = 'dtVNYedoCTKnifpqrvqfsahKihMpkNYvLOa5X3bn'

function generateHtml(obj) {
    return `
      <div class="park">
        <p>${obj.name}</p>
        <p>${obj.description}</p>
        <a href="${obj.url}">URL</a>
      </div>
    `
  }
  
  function processParkData(responseData) {
    console.log(responseData.data[0].description)
    const parkDataHTML = responseData.data.map(function(obj) {
      return generateHtml(obj)
    }).join('')
  
    // render
    $('.display').html(parkDataHTML);
  }
  
  function getPark(search, limit) {
      const apiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${search}&limit=${limit}&api_key=dtVNYedoCTKnifpqrvqfsahKihMpkNYvLOa5X3bn`
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(responseJson => processParkData(responseJson));
  }
  
  function main() {
      $('form').on('submit', function(event) {
  
          event.preventDefault();
          const searchTerm = $(event.currentTarget).find('#js-search-term').val();
          const maxResults = $(event.currentTarget).find('#js-max-results').val();
          $('.js-search-term').val('');
          getPark(searchTerm, maxResults)
      })
  }
  
  
  $(main)