'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type BitButtonCustomEvent } from "@bitbox-ui/web";
import { BitButton as BitButtonElement, defineCustomElement as defineBitButton } from "@bitbox-ui/web/dist/components/bit-button.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type BitButtonEvents = { onClick: EventName<BitButtonCustomEvent<MouseEvent>> };

export const BitButton: StencilReactComponent<BitButtonElement, BitButtonEvents> = /*@__PURE__*/ createComponent<BitButtonElement, BitButtonEvents>({
    tagName: 'bit-button',
    elementClass: BitButtonElement,
    react: React,
    events: { onClick: 'click' } as BitButtonEvents,
    defineCustomElement: defineBitButton
});
