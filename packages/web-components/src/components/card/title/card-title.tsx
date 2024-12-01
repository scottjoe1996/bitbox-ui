import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bit-card-title',
  styleUrl: 'card-title.css',
  shadow: true,
})
export class CardTitle {
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
