# Specs

<br>

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                            | Type                             | Default      |
| ----------- | ------------ | ---------------------------------------------------------------------- | -------------------------------- | ------------ |
| `disabled`  | `disabled`   | If true, the button is disabled and can no longer fire the click event | `boolean`                        | `false`      |
| `fullWidth` | `full-width` | If true, the button's width will be that of it's container             | `boolean`                        | `false`      |
| `size`      | `size`       | The size of the button                                                 | `"large" \| "medium" \| "small"` | `'medium'`   |
| `variant`   | `variant`    | The style of the button                                                | `"filled" \| "outlined"`         | `'outlined'` |


## Events

| Event   | Description                        | Type                      |
| ------- | ---------------------------------- | ------------------------- |
| `click` | Event fired when button is clicked | `CustomEvent<MouseEvent>` |


## Slots

| Slot        | Description                        |
| ----------- | ---------------------------------- |
| `"Default"` | Slot for the content of the button |


## CSS Custom Properties

| Name                   | Description                                                                       |
| ---------------------- | --------------------------------------------------------------------------------- |
| `--bit-color-contrast` | Color used for the inner text when button is active or using the "filled" variant |
| `--bit-color-primary`  | Color used for the border, background and inner text of the button.               |
| `--bit-font-family`    | Font family used by the inner text                                                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
