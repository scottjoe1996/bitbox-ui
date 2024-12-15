import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'bit-card-title',
  styleUrl: 'card-title.css',
  shadow: true,
})
export class CardTitle {
  /**
   * The title of the card
   */
  @Prop() main: string;

  /**
   * The subtitle of the card
   */
  @Prop() subtitle?: string;

  render() {
    return (
      <Host>
        <div>
          <p class="title">{this.main}</p>
          {this.subtitle && <p class="subtitle">{this.subtitle}</p>}
        </div>
      </Host>
    );
  }
}
