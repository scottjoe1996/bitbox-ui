import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bit-card-content',
  styleUrl: 'card-content.css',
  shadow: true,
})
export class CardTitle {
  render() {
    return (
      <Host>
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
