import Planet from "../planets.ts"
import "../ball.ts"

async function renderWorldsPage() {
    const worlds = await Planet.fetchAll()

    const container = document.querySelector('#appWorld') as HTMLElement
    if (!container) return

    worlds.forEach(world => {
        const card = world.renderHtml()
        container.appendChild(card)

    })
}

renderWorldsPage()