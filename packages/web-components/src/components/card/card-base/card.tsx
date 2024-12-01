import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bit-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
