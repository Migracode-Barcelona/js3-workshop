
const searchInput = document.querySelector("[data-search]")

let pokemons = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    pokemons.forEach(pokemon => {
        const isVisible = pokemon.name.includes(value)
        if (!isVisible) {
            pokemon.element.classList.add("d-none")
        }
        else {
            pokemon.element.classList.remove("d-none")
        }
    })
})


const pokemonCardTemplate = document.querySelector("[data-pokemon-template]")
const pokemonCardContainer = document.querySelector("[data-pokemon-cards-container]")


//Util functions
function upperCasePokemon(name) {
    return name.split('')[0].toUpperCase() + name.slice(1)
}


// Fetch all the pokemons 
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    .then(res => res.json())
    .then(data => {
        // sort data by alphabetic order of pokemon names
        let sortedData = data.results.sort((a, b) => a.name.localeCompare(b.name))
        createPokemonCard(sortedData)
        console.log(sortedData)
    })


function createPokemonCard(data) {
    //Create a div with Bootstrap .row class
    const divRow = document.createElement("div")
    divRow.classList.add("row")

    //For each pokemon, create a pokemon card and 
    pokemons = data.map(pokemon => {
        //First create html element for the card
        const divCol = document.createElement("div")
        divCol.classList.add("col-4", "col-lg-2", "pb-4")

        const card = pokemonCardTemplate.content.cloneNode(true).children[0]

        const name = card.querySelector("[data-pokemon-name]")

        name.textContent = upperCasePokemon(pokemon.name)

        setPokemonIdAndImage(pokemon.url, card)

        divCol.append(card)
        divRow.append(divCol)
        pokemonCardContainer.append(divRow)


        addEventListenerToCard(card)

        return { name: pokemon.name, element: divCol }

    })
}

function setPokemonIdAndImage(pokemonUrl, card) {
    const id = card.querySelector("[data-pokemon-id")
    const image = card.querySelector("[data-pokemon-image]")

    fetch(`${pokemonUrl}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            id.textContent = `#${data.id}`
            image.src = data.sprites.other.home.front_default
            setPokemonColor(data.id, card, id)
            console.log(data)

        })
}

function setPokemonColor(pokemonId, card, id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        .then(res => res.json())
        .then(data => {
            color = data.color.name
            if (color === "white") {
                color = "grey"
            }
            card.style.borderColor = color
            id.style.color = color
            card.querySelector("[data-card-body]").style.backgroundColor = color
        })
}


function addEventListenerToCard(card) {
    console.log(card)
    card.addEventListener('click', function (event) {
        //hide the card and show pokemon info

        pokemonCardContainer.classList.add('d-none')
        showPokemonInfo(card)

    })
}

function showPokemonInfo(card) {

}