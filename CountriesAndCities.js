// get datalist elements
const countriesDatalist = document.getElementById("countries"); // for countries
const citiesDatalist = document.getElementById("cities"); // for cities

// get input field for country
const countryInput = document.getElementById("s_country");

// call the Geonames API to find Countries and their cities
// find all countries Geonames API has to offer and store them in an array
async function fetchCountries() {
  try {
    const response = await fetch(
      "http://api.geonames.org/countryInfoJSON?username=phlorion"
    );
    const data = await response.json();
    // map each country object to its countryName attribute
    const countryNames = data.geonames.map((country) => country.countryName);

    // inject HTML for datalist
    let htmlString = "";
    countryNames.forEach(
      (element) => (htmlString += `<option value="${element}"></option>`)
    );
    countriesDatalist.innerHTML = htmlString;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

// fetch the cities of the selected country
async function fetchCities(selectedCountry) {
  try {
    // if the country input field is empty, return
    if (!selectedCountry) {
      // leave datalist empty
      citiesDatalist.innerHTML = "";
      return;
    }

    // first fetch the JSON of the country to find its code
    const countryCodeResponse = await fetch(
      `http://api.geonames.org/searchJSON?q=${selectedCountry}&maxRows=1&username=phlorion`
    );
    const countryCodeData = await countryCodeResponse.json();
    const selectedCountryCode = countryCodeData.geonames.map(
      (country) => country.countryCode
    );

    // if we fail to match a country code don't fetch any cities
    if (selectedCountryCode.length == 0) {
      // leave datalist empty
      citiesDatalist.innerHTML = "";
      return;
    }

    // fetch the cities of this country
    const countryCitiesResponse = await fetch(
      `http://api.geonames.org/searchJSON?country=${selectedCountryCode[0]}&featureClass=P&maxRows=1000&username=phlorion`
    );
    const countryCitiesData = await countryCitiesResponse.json();
    // map each city object to its adminName1 and name attribute
    const citiesNames = countryCitiesData.geonames.map((city) => [
      city.adminName1,
      city.name,
    ]);

    // inject HTML for datalist
    let htmlString = "";
    citiesNames.forEach(
      ([adminName, name]) =>
        (htmlString += `<option value="${name} / ${adminName}"></option>`)
    );
    citiesDatalist.innerHTML = htmlString;
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

// add event listener when the input field for city is selected
countryInput.addEventListener("input", (e) => {
  const selectedCountry = e.target.value;
  fetchCities(selectedCountry);
});

// call initial fetch for countries
fetchCountries();
