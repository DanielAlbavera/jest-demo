
const citiesList = [
    "nashville",
    "nashville",
    "los angeles",
    "nashville",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "madrid",
    "canary islands",
    "barcelona",
    "madrid",
    "nashville",
    "barcelona",
    "london",
    "berlin",
    "madrid",
    "nashville",
    "london",
    "madrid"
];

/*
write a function that logs the 5 cities that occur the most in the array bewlow
in order from most number occurrences to least
*/

function orderCities(list) {

    const cities = {};

    citiesList.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1;       
    });

    return Object.keys(cities)
    .map(city => ({name: city, occurence: cities[city]}))
    .sort((a,b) => b.occurence - a.occurence)    
    .slice(0,3)

}

console.log(orderCities(citiesList));