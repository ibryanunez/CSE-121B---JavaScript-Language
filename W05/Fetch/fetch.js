// fetch.js

// APIs
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

// Data from APIs
let results = null;
let resultsList = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  // HTML elements
  const outputHtml = document.getElementById("output");

  results = data;
  //HTML
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputHtml.innerHTML = html
  console.log("first: ", results);
}

async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }

}

function doStuffList(data) {
    console.log(data);
    const pokeListHtml = document.getElementById("outputList");
    const pokeList = data.results;
    
    const htmlList = pokeList.map(pokemon => `<li>$`)
        
}

getPokemon(url);
console.log("second: ", results);