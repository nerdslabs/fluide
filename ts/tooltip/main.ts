import Module from '../module';

export enum Position {
  TOP = 'tooltip-top',
  BOTTOM = 'tooltip-bottom',
  LEFT = 'tooltip-left',
  RIGHT = 'tooltip-right',
  CLASS = '',
}

export default class Tooltip extends Module {
  public static Position = Position

  private tooltip: HTMLElement = null
  private position: Position

  constructor(el: HTMLElement | string, position: Position = Position.CLASS) {
    super(el)

    if (position === Position.CLASS) {
      if (this.el.className.indexOf('tooltip-top') > -1) {
        this.position = Position.TOP
      } else if (this.el.className.indexOf('tooltip-left') > -1) {
        this.position = Position.LEFT
      } else if (this.el.className.indexOf('tooltip-right') > -1) {
        this.position = Position.RIGHT
      } else {
        this.position = Position.BOTTOM
      }
    } else {
      this.position = position
    }

    this.el.addEventListener('mouseenter', (event) => this.mouseEnter(event))
    this.el.addEventListener('mouseleave', (event) => this.mouseLeave(event))
    this.el.addEventListener('click', (event) => this.mouseLeave(event))
    this.el.addEventListener('touchend', (event) => this.mouseLeave(event))
  }

  public onTick() {
    if (this.tooltip !== null && this.tooltip.parentElement !== null) {
      if (document.body.contains(this.el.parentElement) === false) {
        document.body.removeChild(this.tooltip)
      } else {
        this.updatePosition.call(this)
      }
    }
  }

  public show() {
    const text = this.el.getAttribute('alt')

    this.tooltip = document.createElement('div')
    this.tooltip.classList.add('tooltip', this.position)
    this.tooltip.innerHTML = text

    document.body.appendChild(this.tooltip)

    const { left, top } = this.calculatePosition()

    this.tooltip.style.left = left + 'px'
    this.tooltip.style.top = top + 'px'
  }

  public hide() {
    if (this.tooltip.parentElement) {
      document.body.removeChild(this.tooltip)
    }
  }

  private mouseEnter(this: Tooltip, event: UIEvent) {
    this.show()
  }

  private mouseLeave(this: Tooltip, event: UIEvent) {
    this.hide()
  }

  private updatePosition(this: Tooltip) {
    const { left, top } = this.calculatePosition()

    this.tooltip.style.left = left + 'px'
    this.tooltip.style.top = top + 'px'
  }

  private calculatePosition() {
    let left
    let top

    const position = this.el.getBoundingClientRect()

    if (this.position === Position.BOTTOM) {
      left = position.left + (this.el.offsetWidth / 2) - (this.tooltip.offsetWidth / 2)
      top = position.top + this.el.offsetHeight + 10
    } else if (this.position === Position.TOP) {
      left = position.left + (this.el.offsetWidth / 2) - (this.tooltip.offsetWidth / 2)
      top = position.top - this.tooltip.offsetHeight - 10
    } else if (this.position === Position.LEFT) {
      left = position.left - this.tooltip.offsetWidth - 10
      top = position.top + (this.el.offsetHeight / 2) - (this.tooltip.offsetHeight / 2)
    } else if (this.position === Position.RIGHT) {
      left = position.left + this.el.offsetWidth + 10
      top = position.top + (this.el.offsetHeight / 2) - (this.tooltip.offsetHeight / 2)
    }

    if (left < 0) {
      left = 0
    } else if (left + this.tooltip.offsetWidth > document.documentElement.scrollWidth) {
      left = document.documentElement.scrollWidth - this.tooltip.offsetWidth
    }

    left = Math.round(left)
    top = Math.round(top)

    return {
      left, top,
    }
  }

}
