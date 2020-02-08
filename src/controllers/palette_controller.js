import { Controller } from "stimulus"
import PaletteData from "../palette-data"

export default class extends Controller {
    static targets = [
        "screen",
        "canvas",
        "selector"
    ]

    get colors() {
        return this.paletteData.colors(this.selectorTarget.value)
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
            .then((palettesJson) => {
                const palettes = JSON.parse(palettesJson).palettes
                this.paletteData = new PaletteData(palettes)
                this.initializeOptions()
                this.update()
            })
    }

    update() {
        this.screenTarget.style = `background-color: ${this.rgbColors[3]};`
        this.canvasTarget.style = `background-color: ${this.rgbColors[2]};`
        this.selectorTarget.style = `color: ${this.rgbColors[0]};`
        this.selectorTarget.parentElement.style = `border-color: ${this.rgbColors[1]}; box-shadow: inset 0 2px ${this.rgbColors[2]}, 0 2px ${this.rgbColors[2]};`
    }

    initializeOptions() {
        const options = this.paletteData.names.map((name) => {
            var option = document.createElement("option")
            option.className = "palette-name"
            option.value = name
            option.innerText = name
            return option
        })

        const selector = this.selectorTarget
        options.forEach((option) => selector.appendChild(option))
    }
}
