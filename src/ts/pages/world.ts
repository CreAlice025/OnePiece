import Planet from "../components/planets.ts"
import "../ball.ts"
import { filterByName } from "../utils.ts"

const searchInput = document.getElementById("planetSearch") as HTMLInputElement
const container = document.querySelector('#appWorld') as HTMLElement

let planets: Planet[] = []

function renderPlanets(planets: Planet[]) {
    container.innerHTML = ""

    if (!container) return

    planets.forEach(p => {
        const card = p.renderHtml()
        container.appendChild(card)
    })
}

function handlePlanetSearch() {
    filterByName(planets, searchInput, renderPlanets)
}


async function init() {
    planets = await Planet.fetchAll()
    renderPlanets(planets)
    searchInput.addEventListener("input", handlePlanetSearch)
}

init()