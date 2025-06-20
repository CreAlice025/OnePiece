// FONCTIONS DE FILTRAGE
import Character from "./components/characters"
import ElementHTML from "./components/element"
import Planet from "./components/planets"




export function populateFilters(characters: Character[],
    raceSelect: HTMLSelectElement,
    affiliationSelect: HTMLSelectElement) {
    const races = Array.from(new Set(characters.map(c => c.race))).sort()
    races.forEach(race => {
        const option = new ElementHTML()
            .createElement('option')
            .value(race)
            .textContent(race)
        raceSelect.appendChild(option.element!)
    })
    const affiliations = Array.from(new Set(characters.map(c => c.affiliation))).sort()
    affiliations.forEach(aff => {
        const option = new ElementHTML()
            .createElement('option')
            .value(aff)
            .textContent(aff)
        affiliationSelect.appendChild(option.element!)
    })

}

export function applyFilters(characters: Character[],
    raceSelect: HTMLSelectElement,
    affiliationSelect: HTMLSelectElement,
    searchInput: HTMLInputElement,
    renderFn: (filtered: Character[]) => void) {
    const raceFilter = raceSelect.value.toLowerCase()
    const affiliationFilter = affiliationSelect.value.toLowerCase()
    const searchTerm = searchInput.value.toLowerCase()

    const filtered = characters.filter(c => {
        const matchesRace = raceFilter === "" || c.race.toLowerCase() === raceFilter
        const matchesAffiliation = affiliationFilter === "" || c.affiliation.toLowerCase() === affiliationFilter
        const matchesSearch = c.name.toLowerCase().includes(searchTerm)
        return matchesRace && matchesAffiliation && matchesSearch
    })

    renderFn(filtered)
}

export function filterByName(planets: Planet[], searchInput: HTMLInputElement, renderF: (filtered: Planet[]) => void) {
    const searchTerm = searchInput.value.toLowerCase()
    const filtered = planets.filter(p => p.name.toLowerCase().includes(searchTerm))
    renderF(filtered)
}
