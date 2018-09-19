import Props from './polyfills/props'

export default interface Module {
  onTick()
}

export default abstract class Module {
  public el: HTMLElement

  constructor(el: HTMLElement | string) {
    if (el instanceof HTMLElement) {
      this.el = el
    } else {
      this.el = document.querySelector(el)
    }

    if (this.el === null) {
      throw new Error('Provided Element is null or cannot be found.')
    }

    if (this.onTick !== undefined) {
      Props.get.addTickInstance(this)
    }
  }
}
