import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bit-terminal',
  styleUrl: 'terminal.css',
  shadow: true,
})
export class BitTerminal {
  render() {
    return (
      <Host>
        <div class="container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
