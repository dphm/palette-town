import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [
        "canvas",
        "selector"
    ]

    connect() {
        const canvas = this.canvasTarget;
        console.log(canvas);

        const selector = this.selectorTarget;
        console.log(selector);
    }
}
