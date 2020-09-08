import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Character = async() =>{
    const id = await getHash()
    const character = await getData(id)
    console.log(character)
    const view = `
        <div class="Characters-inner">
            
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>chapter : ${character.episode.length}</h3>
                <h3>Status: ${character.species}</h3>
                <h3>Spice: ${character.status}</h3>
                <h3>Gender: ${character.gender}</h3>
                <h3>Origin: ${character.origin.name}</h3>
                <h3>Last Location: ${character.location.name}</h3>
            </article>
        </div>
    `;

    return view
}

export default Character