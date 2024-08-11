import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { ComponentSize } from '../../global/props';

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
   * If true, the button is disabled and can not longer fire the click event
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

  handleClick = (event: MouseEvent) => {
    event.stopImmediatePropagation();

    if (this.disabled) {
      return;
    }
    this.click.emit(event);
  };

  render() {
    const hostClasses: string[] = [];

    if (this.fullWidth) {
      hostClasses.push('full-width');
    }

    return (
      <Host class={hostClasses.join(' ')}>
        <button class={this.size} onClick={this.handleClick} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}
