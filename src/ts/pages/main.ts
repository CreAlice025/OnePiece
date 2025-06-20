import Character from "../components/characters.ts"
import "../ball.ts"
import { populateFilters, applyFilters } from "../utils.ts"

const raceSelect = document.getElementById("raceFilter") as HTMLSelectElement
const affiliationSelect = document.getElementById("affiliationFilter") as HTMLSelectElement
const searchInput = document.getElementById("filterInput") as HTMLInputElement
const overlay = document.getElementById("overlay")!
const container = document.querySelector('#app') as HTMLElement

let characters: Character[] = []

function handleFilters() {
    applyFilters(characters, raceSelect, affiliationSelect, searchInput, renderCharas)
}

async function init() {
    characters = await Character.fetchAll()

    populateFilters(characters, raceSelect, affiliationSelect)

    renderCharas(characters)

    raceSelect.addEventListener("change", handleFilters)
    affiliationSelect.addEventListener("change", handleFilters)
    searchInput.addEventListener("input", handleFilters)

}


export function renderCharas(characters: Character[]) {
    container.innerHTML = ""

    if (!container) return

    characters.forEach(character => {
        const card = character.renderCard()
        container.appendChild(card)

        card.addEventListener('click', () => {
            const detailCard = character.renderHtml()

            overlay.innerHTML = ""
            overlay.appendChild(detailCard)
            overlay.classList.remove("hidden", "opacity-0")
        })
    })
}
init()