import { debounce } from '../helpers'
import Scrollbar from './main'

export default class Events {
  private scrollbar: Scrollbar
  private currentY: number

  private isMac: RegExpMatchArray = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)

  private isWheeling: NodeJS.Timer = null

  private watcher: NodeJS.Timer = null
  private fps: number = 1000 / 24

  constructor(scrollbar: Scrollbar) {
    this.scrollbar = scrollbar

    this.scrollbar.el.onwheel = event => this.mouseWheel(event)
    this.scrollbar.scroll.onwheel = event => this.mouseWheel(event)
    this.scrollbar.bar.onmousedown = event => this.mouseDown(event)
    this.scrollbar.el.onscroll = event => this.userScrolled(event)

    this.scrollbar.el.ontouchstart = event => this.touchStart(event)

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

  private mouseWheel(this: Events, event: WheelEvent) {
    let distance = null

    if (event.wheelDelta && (event.wheelDelta % 120) === 0) {
      distance = -(event.wheelDelta / 10);
    } else {
      distance = event.deltaY
    }

    if ((distance > 0 && this.scrollbar.el.scrollTop < (this.scrollbar.scrollHeight - this.scrollbar.height)) || (distance < 0 && this.scrollbar.el.scrollTop > 0)) {
      event.preventDefault()
      this.scrollbar.move(distance)
    }
  }

  private mouseUp(this: Events, event: MouseEvent) {
    document.onmousemove = null
  }

  private touchStart(this: Events, event: TouchEvent) {
    const touch = event.touches[0] || null
    if (event.touches.length === 1 && touch !== null) {
      this.currentY = touch.pageY
      this.scrollbar.el.ontouchmove = e => this.touchMove(e)
    }
  }

  private touchMove(this: Events, event: TouchEvent) {
    event.preventDefault()
    const touch = event.touches[0] || null
    if (event.touches.length === 1 && touch !== null) {
      const moveDistance = (touch.pageY - this.currentY)
      const scrollDistance = -moveDistance
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
