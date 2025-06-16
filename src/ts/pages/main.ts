import Character from "../components/characters.ts"
import "../ball.ts"

async function renderCharasPage() {
    const characters = await Character.fetchAll()

    const container = document.querySelector('#app') as HTMLElement
    if (!container) return

    characters.forEach(character => {
        const card = character.renderCard()
        container.appendChild(card)

        card.addEventListener('click', () => {
            const detailCard = character.renderHtml()
            const overlay = document.getElementById("overlay")!
            overlay.innerHTML = ""
            overlay.appendChild(detailCard)
            overlay.classList.remove("hidden", "opacity-0")
        })
    })
}

renderCharasPage()