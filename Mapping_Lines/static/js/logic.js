// Add console.log to check to see if our code is working.
console.log("working");

// create the map object with a center and zoom level.
let map = L.map("mapid").setView([36.1733, -120.1794], 5);
let line = 
[
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
/*
L.polyline(line,
  {
    color: "yellow"
  }).addTo(map);
  */

let cityData = cities;
let lines = [];
cityData.forEach(function(city){lines.push(city.location)});
lines = lines.slice(0,4);
console.log(lines);
L.polyline(lines,
  {
    color:"blue",
    weight: 4,
    opacity: 0.5,
    dashArray:"20, 20"
  }).addTo(map);


/*

  //Loop throught the cities array and create one marker for each city.
  cityData.forEach(function (city)
  {
    console.log(city);
    L.circleMarker(city.location , 
        {
            radius: city.population/100000,
            weight: 4,
            fillColor: "#000000",
            color: "orange"

        })
    .bindPopup("<h2>" + city.city + ", " + city.state + "<h2> <hr> <h3>Population "
    + city.population.toLocaleString() + "</h3>")
    .addTo(map);
  });

*/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);