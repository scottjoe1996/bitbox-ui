/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BitButton {
    }
}
declare global {
    interface HTMLBitButtonElement extends Components.BitButton, HTMLStencilElement {
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
