import { Component, h, Prop } from '@stencil/core';

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
  @Prop() size: ComponentSize = 'medium';

  render() {
    return (
      <button class={this.size.toString()}>
        <slot />
      </button>
    );
  }
}
