// import Planet from "./planets.ts"
import Character, { type CharacterAPIres } from "./characters.ts"

async function getPage() {
    try {
        const res = await fetch("https://dragonball-api.com/api/characters")
        const data: CharacterAPIres = await res.json()

        const container = document.querySelector('#app') as HTMLElement
        data.items.forEach((char: any) => {
            const character = new Character(char)
            const card = character.renderCard()
            container?.appendChild(card)
        })
    } catch (err) {
        console.log("erreur lors du chargement des persos", err)
    }
}

getPage()




// async getCharacters(page = 1): Promise < Character[] > {

// }

//    async getPlanets(page = 1): Promise < Planet[] > {
//     const res = await fetch("https://dragonball-api.com/api/planets?page=${page}")
//         const data: PlanetData[] = await res.json()
//         return data.map((d: PlanetData) => new Planet(d))
// }