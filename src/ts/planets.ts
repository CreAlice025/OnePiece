import ElementHTML from "./element"

type PlanetData = {
    id: number,
    name: string,
    isDestroyed: boolean,
    description: string,
    image: string,
    deletedAt: number | null
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

    renderHtml() {
        const card = new ElementHTML()
            .createElement("div")
            .class("grid grid-col-6 gap-3 p-6")

        new ElementHTML()
            .createElement("img")
            .setA("src", this.image || "https://static.wikia.nocookie.net/dragonball/images/b/b8/PlanetKannasa-1-.png/revision/latest?cb=20150621123059&path-prefix=fr")
            .setA("alt", this.name)
            .appendTo(card.element!)
            .class("w-35 h-80")

        new ElementHTML()
            .createElement("h1")
            .textContent(this.name)
            .appendTo(card.element!)

        new ElementHTML()
            .createElement("p")
            .textContent(this.isDestroyed ? "Détruite" : "Présente")

        new ElementHTML()
            .createElement("p")
            .textContent(this.description)
            .appendTo(card.element!)

        return card.element!

    }

}