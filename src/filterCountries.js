

function filterCountries(countries, inputText) {

return !inputText ? [] : countries.filter((country) => country.toLowerCase().includes(inputText.toLowerCase())) 

} 

module.exports = { filterCountries };