/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ComponentSize } from "./global/props";
import { ButtonVariant } from "./components/button/button";
export { ComponentSize } from "./global/props";
export { ButtonVariant } from "./components/button/button";
export namespace Components {
    interface BitButton {
        /**
          * If true, the button is disabled and can no longer fire the click event
         */
        "disabled": boolean;
        /**
          * If true, the button's width will be that of it's container
         */
        "fullWidth": boolean;
        /**
          * The size of the button
         */
        "size": ComponentSize;
        /**
          * The style of the button
         */
        "variant": ButtonVariant;
    }
}
export interface BitButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBitButtonElement;
}
declare global {
    interface HTMLBitButtonElementEventMap {
        "click": MouseEvent;
    }
    interface HTMLBitButtonElement extends Components.BitButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLBitButtonElementEventMap>(type: K, listener: (this: HTMLBitButtonElement, ev: BitButtonCustomEvent<HTMLBitButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLBitButtonElementEventMap>(type: K, listener: (this: HTMLBitButtonElement, ev: BitButtonCustomEvent<HTMLBitButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLBitButtonElement: {
        prototype: HTMLBitButtonElement;
        new (): HTMLBitButtonElement;
    };
    interface HTMLElementTagNameMap {
        "bit-button": HTMLBitButtonElement;
    }
}
declare namespace LocalJSX {
    interface BitButton {
        /**
          * If true, the button is disabled and can no longer fire the click event
         */
        "disabled"?: boolean;
        /**
          * If true, the button's width will be that of it's container
         */
        "fullWidth"?: boolean;
        /**
          * Event fired when button is clicked
         */
        "onClick"?: (event: BitButtonCustomEvent<MouseEvent>) => void;
        /**
          * The size of the button
         */
        "size"?: ComponentSize;
        /**
          * The style of the button
         */
        "variant"?: ButtonVariant;
    }
    interface IntrinsicElements {
        "bit-button": BitButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bit-button": LocalJSX.BitButton & JSXBase.HTMLAttributes<HTMLBitButtonElement>;
        }
    }
}
