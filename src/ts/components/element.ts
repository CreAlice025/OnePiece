export default class ElementHTML {
    public element: HTMLElement | null

    constructor() {
        this.element = null

    }
    createElement(tagName: string): this {
        this.element = document.createElement(tagName)
        return this
    }

    textContent(text: string): this {
        if (this.element)
            this.element.textContent = text
        return this
    }

    class(css: string): this {
        if (this.element) {
            const classes = css.split(' ').filter(c => c.trim() !== '')
            this.element.classList.add(...classes)
        }
        return this
    }

    value(val: string): this {
        if (this.element && (
            this.element instanceof HTMLInputElement ||
            this.element instanceof HTMLTextAreaElement ||
            this.element instanceof HTMLSelectElement ||
            this.element instanceof HTMLOptionElement
        )
        ) {
            this.element.value = val
        }
        return this
    }

    appendTo(parent: HTMLElement): this {
        if (this.element)
            parent.appendChild(this.element)
        return this
    }

    setA(name: string, value: string): this {
        if (this.element) {
            this.element.setAttribute(name, value)
        }
        return this
    }
}
