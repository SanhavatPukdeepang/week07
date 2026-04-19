
const pokemonContainer = document.getElementById('pokemonContainer');

const fetchBtn = document.getElementById('findPokemon');

fetchBtn.addEventListener("click", () => {
    const inputPokemon = document.getElementById('pokemonName');
    const pokemonName = inputPokemon.value;
    if(pokemonName == 0){
        alert("กรุณาพิมพ์ชื่อโปเกม่อนที่ต้องการเลือก");
        return
    }
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value}`)
        .then((respons) => respons.json())
        .then((data) => {
            
            const newDiv = document.createElement("div");
            const pokemonName = document.createElement("h3");
            const pokemonIMG = document.createElement('img');

            pokemonName.textContent = data.name;
            pokemonIMG.src = data.sprites.front_default;

            pokemonContainer.appendChild(pokemonName);
            pokemonContainer.appendChild(pokemonIMG);
        }
        )
        .catch((err) => {
            alert("ชื่อโปเกม่อนไม่ถูกต้อง");
            return
        });

})