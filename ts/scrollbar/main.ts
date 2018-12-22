import Module from '../module'
import Events from './events'

export default class Scrollbar extends Module {

  public wrapper: HTMLElement
  public scroll: HTMLElement
  public bar: HTMLElement

  public scrollHeight: number
  public maxPosition: number = 0

  public height: number
  public width: number

  private visibleProportion: number

  private events: Events

  private barHeight: number
  private position: number = 0

  private scrollClass: NodeJS.Timer = null

  constructor(el: HTMLElement) {
    super(el)

    this.wrap()
    this.createScroll()
    this.calculateSizes()
  }

  public wrap() {
    this.el.classList.add('scrollbar')

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'scrollbar-wrapper'
    this.el.parentNode.insertBefore(this.wrapper, this.el);
    this.wrapper.appendChild(this.el);
  }

  public calculateSizes() {
    this.height = this.el.clientHeight
    this.scrollHeight = this.el.scrollHeight

    this.el.style.width = null
    this.width = this.el.clientWidth

    const visibleProportion = this.height / this.scrollHeight

    if (this.height * visibleProportion > 30) {
      this.visibleProportion = visibleProportion
      this.barHeight = this.height * visibleProportion
    } else {
      this.visibleProportion = 30 / this.height
      this.barHeight = 30
    }

    this.maxPosition = this.height - this.barHeight

    this.scroll.style.height = this.height + 'px'
    this.bar.style.height = this.barHeight + 'px'

    this.setBarPosition()
  }

  public move(distance: number) {
    this.el.scrollTop = (distance + this.el.scrollTop)
  }

  public setBarPosition() {
    const position = (this.el.scrollTop / (this.scrollHeight - this.height)) * this.maxPosition

    if (position <= 0) {
      this.position = 0;
    } else if (position < this.maxPosition) {
      this.position = position;
    } else {
      this.position = this.maxPosition;
    }

    this.bar.style.marginTop = this.position + 'px';

    this.scroll.classList.add('scroll-active')
    clearTimeout(this.scrollClass)
    this.scrollClass = setTimeout(() => {
      this.scroll.classList.remove('scroll-active')
    }, 500)
  }

  public onTick() {
    if (this.el.scrollHeight !== this.scrollHeight) {
      this.calculateSizes.call(this)
    }

    if (this.height !== this.el.clientHeight || this.width !== this.el.clientWidth) {
      this.calculateSizes.call(this)
    }
  }

  private createScroll() {
    this.scroll = document.createElement('div')
    this.scroll.className = 'scrollbar-handler'

    this.bar = document.createElement('div')
    this.bar.className = 'bar'

    this.scroll.appendChild(this.bar)

    this.events = new Events(this)

    this.el.parentElement.insertBefore(this.scroll, this.el.nextSibling)
  }
}
