import { debounce } from '../helpers'
import Scrollbar from './main'

export default class Events {
  private scrollbar: Scrollbar
  private currentY: number

  constructor(scrollbar: Scrollbar) {
    this.scrollbar = scrollbar

    this.scrollbar.bar.onmousedown = event => this.mouseDown(event)
    this.scrollbar.bar.ontouchstart = event => this.touchStart(event)

    this.scrollbar.el.onscroll = event => this.userScrolled(event)

    document.onmouseup = event => this.mouseUp(event)
    document.ontouchend = event => this.touchEnd(event)
  }

  private mouseDown(this: Events, event: MouseEvent) {
    event.preventDefault()
    this.currentY = event.pageY
    document.onmousemove = e => this.mouseMove(e)
  }

  private mouseMove(this: Events, event: MouseEvent) {
    event.preventDefault()

    const moveDistance = (event.pageY - this.currentY)
    const scrollDistance = (moveDistance / this.scrollbar.maxPosition) * (this.scrollbar.scrollHeight - this.scrollbar.height)
    this.currentY = event.pageY

    this.scrollbar.move(scrollDistance)
  }

  private mouseUp(this: Events, event: MouseEvent) {
    document.onmousemove = null
  }

  private touchStart(this: Events, event: TouchEvent) {
    const touch = event.touches[0] || null
    if (event.touches.length === 1 && touch !== null) {
      this.currentY = touch.pageY
      this.scrollbar.bar.ontouchmove = e => this.touchMove(e)
    }
  }

  private touchMove(this: Events, event: TouchEvent) {
    event.preventDefault()
    const touch = event.touches[0] || null
    if (event.touches.length === 1 && touch !== null) {
      const moveDistance = (touch.pageY - this.currentY)
      const scrollDistance = (moveDistance / this.scrollbar.maxPosition) * (this.scrollbar.scrollHeight - this.scrollbar.height)
      this.currentY = touch.pageY

      this.scrollbar.move(scrollDistance)
    }
  }

  private touchEnd(this: Events, event: TouchEvent) {
    document.ontouchmove = null
  }

  private userScrolled(this: Events, event: UIEvent) {
    this.scrollbar.setBarPosition()
  }
}
