import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

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
   * Event fired when button is clicked
   */
  @Event() click: EventEmitter<MouseEvent>;

  handleClick = (event: MouseEvent) => {
    event.stopImmediatePropagation();
    this.click.emit(event);
  };

  render() {
    return (
      <button class={this.size.toString()} onClick={this.handleClick}>
        <slot />
      </button>
    );
  }
}
