import { Component, h } from '@stencil/core';

/**
 * @slot Default - Slot for the content of the button
 */
@Component({
  tag: 'bit-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
