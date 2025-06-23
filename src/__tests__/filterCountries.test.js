const { filterCountries } = require('../filterCountries');

const countries = [
  "Poland", "Portugal", "Pakistan", "Paraguay", "Peru",
  "Panama", "Palau", "Philippines", "Papua New Guinea",
  "France", "Finland", "Fiji", "Gabon", "Germany"
];

describe( 'filterCountries', () => {
    it( 'zwraca pusta tablice jesli nic nie ejst wpisane w inpucie', () => {
        expect(filterCountries( countries, "")).toEqual([]); 
    });

} )