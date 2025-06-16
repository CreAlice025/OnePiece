import ElementHTML from "../components/element.ts"

type CharacterData = {
    id: number,
    name: string,
    ki: string,
    maxKi: string
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt: number | null
}

export type CharacterAPIres = {
    items: CharacterData[]
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

export default class Character {
    id: number
    name: string
    ki: string
    maxKi: string
    race: string
    gender: string
    description: string
    image: string
    affiliation: string
    deletedAt: number | null

    constructor(data: CharacterData) {
        this.id = data.id
        this.name = data.name
        this.ki = data.ki
        this.maxKi = data.maxKi
        this.race = data.race
        this.gender = data.gender
        this.description = data.description
        this.image = data.image
        this.affiliation = data.affiliation
        this.deletedAt = data.deletedAt
    }

    static async fetchAll(): Promise<Character[]> {
        try {
            const res = await fetch("https://dragonball-api.com/api/characters")
            const data: CharacterAPIres = await res.json()
            return data.items.map(item => new Character(item))
        } catch (err) {
            console.log("erreur lors du chargement des persos", err)
            return []
        }

    }

    renderHtml() {
        const card = new ElementHTML()
            .createElement("div")
            .class("relative flex flex-row items-center rounded-2xl border-4 border-yellow-400 bg-black/90 max-w-6xl mx-auto p-10 gap-10 text-left shadow-[0_0_12px_rgba(253,224,71,0.7)] text-amber-200")

        new ElementHTML()
            .createElement("button")
            .textContent("Retour")
            .class("absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 z-20 hover:cursor-pointer")
            .appendTo(card.element!)
            .element!.addEventListener('click', () => {
                const overlay = document.querySelector("#overlay")!
                overlay.classList.add("hidden")
            })

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://image.jeuxvideo.com/medias-md/170147/1701466635-6880-card.jpg")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("w-1/3 max-h-[400px] object-contain border-r-2 pr-6 border-yellow-400")

        const rightDiv = new ElementHTML()
            .createElement("div")
            .class("flex flex-col gap-4 w-2/3")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .class('text-4xl text-yellow-400 font-bold')
            .appendTo(rightDiv.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(`${this.ki} / ${this.maxKi}`)
            .class('text-2xl')
            .appendTo(rightDiv.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.affiliation)
            .class('text-2xl')
            .appendTo(rightDiv.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(`Race : ${this.race} | Genre : ${this.gender}`)
            .class('text-2xl')
            .appendTo(rightDiv.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.description)
            .class('text-md text-justify leading-relaxed')
            .appendTo(rightDiv.element!)

        rightDiv.appendTo(card.element!)

        return card.element!
    }


    renderCard() {
        const card = new ElementHTML()
            .createElement("div")
            .class("flex flex-col items-center justify-between p-4 h-[260px] rounded-2xl border-4 border-yellow-400 text-white text-center shadow-md transition-transform duration-300 ease-in-out cursor-pointer bg-black/80 hover:bg-blue-950 hover:animate-pulse-inverse hover:scale-105 hover:border-yellow-400")

        new ElementHTML()
            .createElement("p")
            .textContent(String(this.id))

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://image.jeuxvideo.com/medias-md/170147/1701466635-6880-card.jpg")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("h-45 w-auto object-contain mb-2 border-b-2 pb-5 border-yellow-400")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .class('text-2xl text-yellow-300 mb-1')
            .appendTo(card.element!)

        return card.element!
    }

}