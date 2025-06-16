import ElementHTML from "./element"

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

    renderHtml() {
        const card = new ElementHTML()
            .createElement("div")
            .class("flex flex-col rounded-lg border-2 border-yellow-500 h-400 mx-auto text-center p-5 gap-10")

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://image.jeuxvideo.com/medias-md/170147/1701466635-6880-card.jpg")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("h-1/3 w-auto object-contain p-10 border-b-2")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .class('text-4xl')
            .appendTo(card.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.ki + '/' + this.maxKi)
            .class('text-2xl')
            .appendTo(card.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.affiliation)
            .class('text-2xl')
            .appendTo(card.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(`Race : ${this.race} | Genre : ${this.gender}`)
            .class('text-2xl')
            .appendTo(card.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.description)
            .class('text-2xl text-justify')
            .appendTo(card.element!)



        return card.element!

    }

    renderCard() {
        const card = new ElementHTML()
            .createElement("div")
            .class("flex flex-col rounded-xl border-2 border-yellow-500 h-150 text-center bg-black/80 text-white transition-all duration-300 hover:scale-105 hover:bg-black/20 hover:text-black cursor-pointer")

        new ElementHTML()
            .createElement("p")
            .textContent(String(this.id))

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://image.jeuxvideo.com/medias-md/170147/1701466635-6880-card.jpg")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("h-1/2 w-auto object-contain p-5 pb-20 m-20 border-b-2")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .class('text-4xl')
            .appendTo(card.element!)

        return card.element!
    }

}

