import ElementHTML from "../components/element.ts"

type PlanetData = {
    id: number,
    name: string,
    isDestroyed: boolean,
    description: string,
    image: string,
    deletedAt: number | null
}

export type PlanetAPIres = {
    items: PlanetData[]
    meta: {
        totalItems: number
        itemCount: number
        itemsPerPage: number
        totalPages: number
        currentPage: number
    }
    links: {
        first: string
        previous: string | null
        next: string | null
        last: string
    }
}

export default class Planet {
    id: number
    name: string
    isDestroyed: boolean
    description: string
    image: string
    deletedAt: number | null

    constructor(data: PlanetData) {
        this.id = data.id
        this.name = data.name
        this.isDestroyed = data.isDestroyed
        this.description = data.description
        this.image = data.image
        this.deletedAt = data.deletedAt
    }

    static async fetchAll(): Promise<Planet[]> {
        try {
            const res = await fetch("https://dragonball-api.com/api/planets?limit=100")
            const data: PlanetAPIres = await res.json()
            return data.items.map(item => new Planet(item))
        } catch (err) {
            console.log("erreur lors du chargement des persos", err)
            return []
        }
    }

    renderHtml() {
        const card = new ElementHTML()
            .createElement("div")
            .class(" flex flex-col items-center justify-between h-[400px] rounded-2xl border-4 border-yellow-400 text-white text-center shadow-md transition-transform duration-300 ease-in-out cursor-pointer bg-black/80 hover:bg-blue-950 hover:animate-pulse-inverse hover:scale-105 hover:border-yellow-400 p-6")

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://static.wikia.nocookie.net/dragonball/images/b/b8/PlanetKannasa-1-.png/revision/latest?cb=20150621123059&path-prefix=fr")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("-full h-48 flex justify-center items-center overflow-hidden rounded-xl border-b-2 border-yellow-500")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .appendTo(card.element!)
            .class('text-4xl text-yellow-400 font-bold')

        new ElementHTML()
            .createElement("p")
            .textContent(this.isDestroyed ? "Détruite" : "Présente")

        new ElementHTML()
            .createElement("p")
            .textContent(this.description)
            .appendTo(card.element!)
            .class('text-md text-justify leading-relaxed')

        return card.element!

    }

}