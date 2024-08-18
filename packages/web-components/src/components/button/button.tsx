import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

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

  handleClick = (event: MouseEvent) => {
    event.stopImmediatePropagation();

    if (this.disabled) {
      return;
    }
    this.click.emit(event);
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
