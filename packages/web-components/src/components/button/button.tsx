import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { ComponentSize } from '../../global/props';
import { createClassString } from '../../utils/utils';

export type ButtonVariant = 'outlined' | 'filled' | 'text';

/**
 * @slot Default - Slot for the content of the button
 */
@Component({
  tag: 'bit-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  /**
   * The size of the button
   */
  @Prop() size: ComponentSize = 'medium';

  /**
   * The style of the button
   */
  @Prop() variant: ButtonVariant = 'outlined';

  /**
   * If true, the button is disabled and can no longer fire the click event
   */
  @Prop() disabled = false;

  /**
   * If true, the button's width will be that of it's container
   */
  @Prop() fullWidth = false;

  /**
   * Event fired when button is clicked
   */
  @Event() click: EventEmitter<MouseEvent>;

  @Element() element: HTMLElement;

  handleClick = (event: MouseEvent) => {
    event.stopImmediatePropagation();

    if (this.disabled) {
      return;
    }

    this.createRippleEffect(event);
    this.click.emit(event);
  };

  createRippleEffect = (event: MouseEvent) => {
    const ripple = document.createElement('span');
    const diameter = Math.max(this.element.clientWidth, this.element.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - (this.element.offsetLeft + radius)}px`;
    ripple.style.top = `${event.clientY - (this.element.offsetTop + radius)}px`;
    ripple.classList.add('ripple');

    const button = this.element.shadowRoot.querySelector('button');
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  render() {
    const hostClasses: string[] = [];
    const buttonClasses: string[] = [this.size, this.variant];

    if (this.fullWidth) {
      hostClasses.push('full-width');
    }

    return (
      <Host class={createClassString(hostClasses)}>
        <button class={createClassString(buttonClasses)} onClick={this.handleClick} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}
