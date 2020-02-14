import { Controller } from "stimulus"
import Color from "../color";

export default class extends Controller {
    static targets = [
        "screen",
        "canvas",
        "selector"
    ]

    get colors() {
        return JSON.parse(this.selectorTarget.value).colors
            .map((values) => new Color(values))
    }

    get rgbColors() {
        return this.colors.map((color) => color.rgbString)
    }

    connect() {
        this.loadData()
    }

    loadData() {
        fetch(this.data.get("url"))
            .then((response) => response.text())
            .then((paletteOptions) => {
                this.selectorTarget.innerHTML = paletteOptions
                this.update()
            })
    }

    update() {
        this.screenTarget.style = `background-color: ${this.rgbColors[3]};`
        this.canvasTarget.style = `background-color: ${this.rgbColors[2]};`
        this.selectorTarget.style = `color: ${this.rgbColors[0]};`
        this.selectorTarget.parentElement.style = `border-color: ${this.rgbColors[1]}; box-shadow: inset 0 2px ${this.rgbColors[2]}, 0 2px ${this.rgbColors[2]};`
    }
}
