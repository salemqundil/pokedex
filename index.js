async function fetchData(id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if(!response.ok){
            throw new Error("Could not fetch res")
        }


        const data = await response.json();

        console.log(pokemonSprite)
        const imgElemnt = document.getElementById("pokemonSprite");
        const dataId = document.getElementById("id");
        const dataTitel = document.getElementById("titel_name");
        const dataType = document.getElementById("type");
        const dataSpecies = document.getElementById("species");
        const dataHeight = document.getElementById("height");
        const dataWeight = document.getElementById("weight");
        const dataAbilities_1 = document.getElementById("abilities_1");
        const dataAbilities_2 = document.getElementById("abilities_2");
        const dataLocal_1 = document.getElementById("local_1");
        const dataLocal_2 = document.getElementById("local_2");
        imgElemnt.src = data.sprites.front_default;
        imgElemnt.style.display = "block";
        imgElemnt.style.width = '400px';
        dataType.innerText= data.types[0].type.name;
        dataSpecies.innerText=data.species.name;
        dataHeight.innerText = data.weight;
        dataWeight.innerText = data.height;
        dataAbilities_1.innerText = data.abilities[0].ability.name;
        dataAbilities_2.innerText = data.abilities[1].ability.name;
        dataLocal_1.innerText = data.game_indices[0].game_index;
        dataLocal_2.innerText = data.game_indices[0].version.name;
        dataTitel.innerText=data.name;
        dataId.innerText=data.id;
    }
    catch{
        console.error(error)
    }
}

async function fetchDataNew(){
    try{
        const response = await fetch(` https://pokeapi.co/api/v2/pokemon?limet=20`);
        if(!response.ok){
            throw new Error("Could not fecth res")
        }
        for(i=0;i<30;i++){
            const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${i+1}`)
            console.log(response)
            const data = await response.json();
            const imgElemnt = document.getElementById("lists");
            imgElemnt.innerHTML += 
        
            `<a class="text-decoration-none" href="index.html?id=${data.id}">
                <div class="card m-3" style="width: 18rem;">
                  <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title p-3">${data.name}</h5>
                  </div>
                </div>
            </a>
            `
            data.sprites.front_default;
            imgElemnt.style.display = "block";
        }
    }
    catch{
        console.error(error)
    }
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('id')) {
    fetchData(urlParams.get('id'));
} else {
    fetchDataNew();
}