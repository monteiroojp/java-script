let nameInput = document.getElementById('input')
const button = document.getElementById('button')
const pokemonImg = document.getElementById('pokemonImg')
let element = document.getElementById('element')

async function fetchData(pokemonName) {

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log(response)
        

        if(!response.ok){
            window.alert('Esse pokemon não está mais diponível no pokedex!')
            throw new Error("Fetch API couldn't acess the data")
        }

        else{
            const data = await response.json()
            console.log(data.stats)
            const pokemonImgSrc = data.sprites.front_default 
            pokemonImg.src = pokemonImgSrc
            pokemonImg.style.display = 'block'

        }
    }

    catch(error){
        console.error(error)
    }
}


button.addEventListener('click', () =>{
    let pokemonName = String(nameInput.value).toLowerCase().trim()
    fetchData(pokemonName)
})

